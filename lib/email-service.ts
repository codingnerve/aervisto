import { FlightEnquiryInput } from "./validation";

export interface SendEnquiryResult {
  success: boolean;
  referenceId: string;
  message: string;
  providerUsed?: "resend" | "brevo" | "development_fallback";
}

/**
 * Generates an aviation-styled reference ID (e.g. AER-2610-8492)
 */
export function generateReferenceId(): string {
  const now = new Date();
  const yearShort = String(now.getFullYear()).slice(-2);
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const random = Math.floor(1000 + Math.random() * 9000);
  return `AER-${yearShort}${month}-${random}`;
}

/**
 * Normalizes email content with sanitized HTML
 */
function escapeHtml(str: string | undefined | null): string {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Builds HTML for internal flight booking team
 */
function buildInternalEmailHtml(data: FlightEnquiryInput, referenceId: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Flight Enquiry - ${referenceId}</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #F4F7FA; padding: 24px; color: #172335;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #DFE6ED; overflow: hidden;">
    <div style="background-color: #152B49; color: #ffffff; padding: 20px 24px;">
      <h2 style="margin: 0; font-size: 20px; font-weight: 700;">AERVISTO FLIGHT ENQUIRY</h2>
      <p style="margin: 4px 0 0; font-size: 14px; opacity: 0.9;">Reference Code: <strong style="color: #67B7E1;">${referenceId}</strong></p>
    </div>
    <div style="padding: 24px;">
      <h3 style="margin-top: 0; color: #2463A6; border-bottom: 2px solid #EBF5FB; padding-bottom: 8px;">Itinerary Details</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr><td style="padding: 6px 0; color: #637083; width: 140px;">Trip Type:</td><td style="padding: 6px 0; font-weight: 600; text-transform: capitalize;">${escapeHtml(data.tripType)}</td></tr>
        <tr><td style="padding: 6px 0; color: #637083;">Origin:</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(data.origin)}</td></tr>
        <tr><td style="padding: 6px 0; color: #637083;">Destination:</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(data.destination)}</td></tr>
        <tr><td style="padding: 6px 0; color: #637083;">Departure Date:</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(data.departureDate)}</td></tr>
        ${data.returnDate ? `<tr><td style="padding: 6px 0; color: #637083;">Return Date:</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(data.returnDate)}</td></tr>` : ""}
        <tr><td style="padding: 6px 0; color: #637083;">Cabin Class:</td><td style="padding: 6px 0; font-weight: 600; text-transform: capitalize;">${escapeHtml(data.cabinClass.replace("_", " "))}</td></tr>
        <tr><td style="padding: 6px 0; color: #637083;">Passengers:</td><td style="padding: 6px 0; font-weight: 600;">${data.adults} Adults, ${data.children} Children, ${data.infants} Infants</td></tr>
        <tr><td style="padding: 6px 0; color: #637083;">Flexible Dates:</td><td style="padding: 6px 0; font-weight: 600;">${data.flexibleDates ? "Yes (±3 days)" : "No (exact dates)"}</td></tr>
      </table>

      <h3 style="color: #2463A6; border-bottom: 2px solid #EBF5FB; padding-bottom: 8px;">Customer Contact Details</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr><td style="padding: 6px 0; color: #637083; width: 140px;">Full Name:</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(data.fullName)}</td></tr>
        <tr><td style="padding: 6px 0; color: #637083;">Email:</td><td style="padding: 6px 0; font-weight: 600;"><a href="mailto:${escapeHtml(data.email)}" style="color: #2463A6;">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 6px 0; color: #637083;">Telephone:</td><td style="padding: 6px 0; font-weight: 600;"><a href="tel:${escapeHtml(data.countryCode)}${escapeHtml(data.phone)}" style="color: #2463A6;">${escapeHtml(data.countryCode)} ${escapeHtml(data.phone)}</a></td></tr>
        <tr><td style="padding: 6px 0; color: #637083;">Preferred Contact:</td><td style="padding: 6px 0; font-weight: 600; text-transform: capitalize;">${escapeHtml(data.preferredContactMethod)}</td></tr>
      </table>

      ${
        data.additionalNotes
          ? `<h3 style="color: #2463A6; border-bottom: 2px solid #EBF5FB; padding-bottom: 8px;">Additional Requirements</h3>
             <p style="background: #F4F7FA; padding: 12px; border-radius: 4px; line-height: 1.5;">${escapeHtml(data.additionalNotes)}</p>`
          : ""
      }

      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #DFE6ED; font-size: 12px; color: #637083;">
        <p style="margin: 2px 0;">Campaign Attribution:</p>
        <p style="margin: 2px 0;">Source: ${escapeHtml(data.utm_source || "direct")} | Medium: ${escapeHtml(data.utm_medium || "none")} | Campaign: ${escapeHtml(data.utm_campaign || "none")}</p>
        ${data.gclid ? `<p style="margin: 2px 0;">GCLID: ${escapeHtml(data.gclid)}</p>` : ""}
        <p style="margin: 8px 0 0;">Received at: ${new Date().toUTCString()}</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Builds customer acknowledgement email
 */
function buildCustomerAckHtml(data: FlightEnquiryInput, referenceId: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Your Flight Enquiry Confirmation - Aervisto</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #F4F7FA; padding: 24px; color: #172335;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #DFE6ED; overflow: hidden;">
    <div style="background-color: #152B49; color: #ffffff; padding: 24px;">
      <h1 style="margin: 0; font-size: 22px;">AERVISTO</h1>
      <p style="margin: 6px 0 0; font-size: 14px; color: #67B7E1;">Agent-Assisted Flight Enquiry Received</p>
    </div>
    <div style="padding: 24px;">
      <p style="font-size: 16px; margin-top: 0;">Dear ${escapeHtml(data.fullName)},</p>
      <p style="line-height: 1.6; color: #4A5568;">
        Thank you for contacting Aervisto. We have received your flight enquiry for <strong>${escapeHtml(data.origin)} to ${escapeHtml(data.destination)}</strong>.
      </p>
      <div style="background-color: #EBF5FB; border-left: 4px solid #2463A6; padding: 14px 16px; margin: 20px 0; border-radius: 0 4px 4px 0;">
        <p style="margin: 0; font-size: 13px; color: #637083; text-transform: uppercase; letter-spacing: 0.5px;">Your Enquiry Reference</p>
        <p style="margin: 4px 0 0; font-size: 20px; font-weight: 700; color: #152B49;">${referenceId}</p>
      </div>
      <h3 style="color: #152B49; font-size: 16px;">What Happens Next?</h3>
      <ol style="line-height: 1.6; color: #4A5568; padding-left: 20px;">
        <li>A dedicated booking specialist is reviewing published schedule options and carrier availability based on your travel preferences.</li>
        <li>Your agent will reach out via your preferred contact method (<strong>${escapeHtml(data.preferredContactMethod)}</strong>) to discuss verified itinerary options and fare conditions.</li>
        <li>Once you confirm your choice, your agent will assist with reserving your flights through the appropriate booking channel.</li>
      </ol>
      <p style="line-height: 1.6; color: #4A5568;">
        If you have urgent travel changes or prefer to speak with our booking team immediately, please call our support desk quoting your reference <strong>${referenceId}</strong>.
      </p>
      <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #DFE6ED; font-size: 12px; color: #637083;">
        <p style="margin: 0 0 4px;"><strong>Aervisto Flight Reservation Assistance</strong></p>
        <p style="margin: 0 0 4px;">Aervisto does not issue tickets directly online. All reservations are coordinated by human booking specialists.</p>
        <p style="margin: 0;">https://aervisto.com</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Sends flight enquiry via Resend API
 */
async function sendViaResend(
  apiKey: string,
  fromEmail: string,
  toEmail: string,
  customerEmail: string,
  internalHtml: string,
  customerHtml: string,
  referenceId: string
): Promise<boolean> {
  // 1. Send internal enquiry alert
  const internalRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New Flight Enquiry [${referenceId}]`,
      html: internalHtml,
    }),
  });

  if (!internalRes.ok) {
    const errText = await internalRes.text();
    console.error("[Resend Error] Failed to send internal notification:", errText);
    return false;
  }

  // 2. Send customer acknowledgement (non-blocking failure)
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [customerEmail],
        subject: `Your Flight Enquiry Reference [${referenceId}] - Aervisto`,
        html: customerHtml,
      }),
    });
  } catch (custErr) {
    console.warn("[Resend Warning] Customer acknowledgement could not be sent:", custErr);
  }

  return true;
}

/**
 * Sends flight enquiry via Brevo (Sendinblue) API
 */
async function sendViaBrevo(
  apiKey: string,
  fromEmail: string,
  toEmail: string,
  customerEmail: string,
  internalHtml: string,
  customerHtml: string,
  referenceId: string
): Promise<boolean> {
  // 1. Send internal notification
  const internalRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { email: fromEmail, name: "Aervisto Enquiry System" },
      to: [{ email: toEmail, name: "Aervisto Booking Desk" }],
      subject: `New Flight Enquiry [${referenceId}]`,
      htmlContent: internalHtml,
    }),
  });

  if (!internalRes.ok) {
    const errText = await internalRes.text();
    console.error("[Brevo Error] Failed to send internal notification:", errText);
    return false;
  }

  // 2. Send customer acknowledgement
  try {
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { email: fromEmail, name: "Aervisto Customer Care" },
        to: [{ email: customerEmail }],
        subject: `Your Flight Enquiry Reference [${referenceId}] - Aervisto`,
        htmlContent: customerHtml,
      }),
    });
  } catch (custErr) {
    console.warn("[Brevo Warning] Customer acknowledgement error:", custErr);
  }

  return true;
}

/**
 * Main enquiry delivery function
 */
export async function deliverFlightEnquiry(data: FlightEnquiryInput): Promise<SendEnquiryResult> {
  const referenceId = generateReferenceId();
  const internalHtml = buildInternalEmailHtml(data, referenceId);
  const customerHtml = buildCustomerAckHtml(data, referenceId);

  const provider = (process.env.EMAIL_PROVIDER || "").toLowerCase().trim();
  const apiKey = (process.env.EMAIL_PROVIDER_API_KEY || "").trim();
  const fromEmail = process.env.EMAIL_FROM || "enquiries@aervisto.com";
  const toEmail = process.env.SUPPORT_EMAIL || "enquiries@aervisto.com";

  // Check if real provider is configured
  if (apiKey && (provider === "resend" || provider === "brevo")) {
    let success = false;
    if (provider === "resend") {
      success = await sendViaResend(apiKey, fromEmail, toEmail, data.email, internalHtml, customerHtml, referenceId);
    } else if (provider === "brevo") {
      success = await sendViaBrevo(apiKey, fromEmail, toEmail, data.email, internalHtml, customerHtml, referenceId);
    }

    if (success) {
      return {
        success: true,
        referenceId,
        message: "Enquiry successfully received and delivered to booking team.",
        providerUsed: provider,
      };
    } else {
      // Return server failure honestly
      return {
        success: false,
        referenceId,
        message: "Unable to deliver enquiry through email provider. Please contact our booking desk by phone.",
      };
    }
  }

  // Development / Unconfigured fallback logging:
  // When no API key is provided, log detailed payload to server console for diagnostic testing
  console.log("--------------------------------------------------------------------------------");
  console.log(`[AERVISTO DEV DIAGNOSTIC] Flight enquiry received: Reference #${referenceId}`);
  console.log(`To: ${toEmail} | Customer: ${data.fullName} (${data.email}, ${data.countryCode} ${data.phone})`);
  console.log(`Route: ${data.origin} -> ${data.destination} [${data.tripType}, ${data.cabinClass}]`);
  console.log(`Departure: ${data.departureDate} | Return: ${data.returnDate || "N/A"}`);
  console.log(`Passengers: ${data.adults} Adults, ${data.children} Children, ${data.infants} Infants`);
  console.log("Configure EMAIL_PROVIDER and EMAIL_PROVIDER_API_KEY in .env for live dispatch.");
  console.log("--------------------------------------------------------------------------------");

  return {
    success: true,
    referenceId,
    message: "Enquiry logged successfully in development mode.",
    providerUsed: "development_fallback",
  };
}
