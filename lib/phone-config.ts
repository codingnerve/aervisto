export type Market = "US" | "UK" | "CA" | "INTL";

export interface MarketPhoneInfo {
  market: Market;
  label: string;
  countryName: string;
  countryCode: string;
  flagEmoji: string;
  number: string;
  displayNumber: string;
  telHref: string;
}

/**
 * Normalizes phone numbers for tel: links
 */
export function formatTelHref(raw: string | undefined | null): string {
  if (!raw || !raw.trim()) return "tel:+18443619076";
  const cleaned = raw.replace(/[^\d+]/g, "");
  return cleaned ? `tel:${cleaned}` : "tel:+18443619076";
}

export const PRIMARY_PHONE =
  process.env.NEXT_PUBLIC_SUPPORT_PHONE ||
  process.env.SUPPORT_PHONE ||
  "+1 (844) 361-9076";

/**
 * Returns centralized phone configuration.
 * Uses a single centralized phone number across the entire website.
 */
export function getPhoneConfig(): {
  defaultPhone: string;
  usPhone: string;
  ukPhone: string;
  caPhone: string;
  supportEmail: string;
  hours: string;
} {
  const defaultPhone = PRIMARY_PHONE;

  const supportEmail =
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL ||
    process.env.SUPPORT_EMAIL ||
    "enquiries@aervisto.com";

  const hours =
    process.env.NEXT_PUBLIC_SUPPORT_HOURS ||
    "Mon - Sun: 7:00 AM - 11:00 PM EST";

  return {
    defaultPhone,
    usPhone: defaultPhone,
    ukPhone: defaultPhone,
    caPhone: defaultPhone,
    supportEmail,
    hours,
  };
}

export function getMarketPhone(market?: Market): MarketPhoneInfo {
  const config = getPhoneConfig();

  return {
    market: market || "US",
    label: "Direct Booking Line",
    countryName: "United States, UK & Canada",
    countryCode: "+1",
    flagEmoji: "📞",
    number: config.defaultPhone,
    displayNumber: config.defaultPhone,
    telHref: formatTelHref(config.defaultPhone),
  };
}
