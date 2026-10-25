/**
 * Aervisto Conversion & Analytics Event Tracker
 * Fires events safely into GA4 (gtag) and GTM (dataLayer)
 * respecting user consent preferences.
 */

export type AnalyticsEventName =
  | "flight_search_submitted"
  | "flight_enquiry_submitted"
  | "callback_requested"
  | "phone_cta_clicked"
  | "email_cta_clicked"
  | "enquiry_confirmed";

export interface EventParams {
  category?: string;
  label?: string;
  value?: number;
  market?: string;
  phoneNumber?: string;
  tripType?: string;
  origin?: string;
  destination?: string;
  cabinClass?: string;
  referenceId?: string;
  [key: string]: unknown;
}

export const CONSENT_STORAGE_KEY = "aervisto_cookie_consent";

export type ConsentStatus = "granted" | "denied" | "pending";

export function getStoredConsent(): ConsentStatus {
  if (typeof window === "undefined") return "pending";
  try {
    const val = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (val === "granted" || val === "denied") return val;
    return "pending";
  } catch {
    return "pending";
  }
}

export function setStoredConsent(status: "granted" | "denied") {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, status);
    // Notify gtag if available
    if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("consent", "update", {
        analytics_storage: status,
        ad_storage: status,
      });
    }
  } catch {
    // ignore local storage restrictions
  }
}

/**
 * Emits an event to Google Analytics 4 / Google Tag Manager safely
 */
export function trackEvent(eventName: AnalyticsEventName, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  // Check consent status (strict privacy adherence)
  const consent = getStoredConsent();
  if (consent === "denied") {
    // If explicitly denied, do not fire external analytics
    return;
  }

  // Debug logging in non-production
  if (process.env.NODE_ENV !== "production") {
    console.log(`[Aervisto Analytics] Event: ${eventName}`, params);
  }

  // 1. Google Tag Manager dataLayer push
  const win = window as unknown as {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  };

  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push({
      event: eventName,
      ...params,
      timestamp: new Date().toISOString(),
    });
  }

  // 2. Google Analytics 4 (gtag)
  if (typeof win.gtag === "function") {
    win.gtag("event", eventName, {
      ...params,
      send_to: process.env.NEXT_PUBLIC_GA4_ID,
    });
  }
}
