import { NextRequest, NextResponse } from "next/server";
import { FlightEnquirySchema } from "@/lib/validation";
import { deliverFlightEnquiry } from "@/lib/email-service";

// In-memory rate limiting map: ip -> { count, expiresAt }
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 12;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Clean up expired entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (val.expiresAt < now) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!entry || entry.expiresAt < now) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction & Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many enquiries submitted from this network. Please wait a few moments or call our booking team directly.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await req.json();

    // 3. Honeypot spam trap: if hidden field is filled, pretend to accept or drop quietly
    if (body.website_url && body.website_url.length > 0) {
      console.warn(`[Spam Blocked] Honeypot triggered from IP: ${ip}`);
      return NextResponse.json({
        success: true,
        referenceId: "AER-BOT-FILTERED",
        message: "Enquiry received.",
      });
    }

    // 4. Validate input with Zod
    const validationResult = FlightEnquirySchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      for (const err of validationResult.error.issues) {
        const fieldName = err.path.join(".");
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = err.message;
        }
      }

      return NextResponse.json(
        {
          success: false,
          error: "Please correct the errors in the form.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    // 5. Deliver enquiry
    const deliveryResult = await deliverFlightEnquiry(validationResult.data);

    if (!deliveryResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: deliveryResult.message,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      referenceId: deliveryResult.referenceId,
      message: deliveryResult.message,
    });
  } catch (error) {
    console.error("[Enquiry Handler Exception]", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your enquiry. Please call our booking desk directly.",
      },
      { status: 500 }
    );
  }
}
