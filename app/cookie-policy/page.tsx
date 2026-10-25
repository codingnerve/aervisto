import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Cookie, Shield, CheckCircle2 } from "lucide-react";
import { getPhoneConfig } from "@/lib/phone-config";

export const metadata: Metadata = {
  title: "Cookie Policy | Aervisto Flight Assistance",
  description:
    "Aervisto Cookie Policy. Learn how we use cookies, session storage, and analytics tokens, and how you can manage your preferences.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  const config = getPhoneConfig();

  return (
    <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Cookie Policy" }]} className="mb-6" />

        <div className="bg-white rounded-2xl border border-[#DFE6ED] p-6 sm:p-10 shadow-sm space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5FB] text-[#2463A6] text-xs font-bold uppercase tracking-wider mb-2">
              <Cookie className="w-3.5 h-3.5 text-[#ED6029]" />
              <span>Cookies &amp; Tracking Technologies</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-[#152B49] tracking-tight">
              Cookie Policy
            </h1>
            <p className="text-xs text-[#637083] mt-2">
              Last updated: October 2026 | Compliant with EU ePrivacy Directive, UK PECR, and US privacy regulations.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-[#4A5568] leading-relaxed space-y-6">
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                1. What Are Cookies &amp; Storage Tokens?
              </h2>
              <p>
                Cookies are small text files placed on your computer or mobile device when you browse websites. Similar technologies include web storage (<code>localStorage</code> and <code>sessionStorage</code>), which retain small preference indicators in your browser.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                2. Categories of Cookies We Use
              </h2>

              {/* Strictly Necessary */}
              <div className="p-4 rounded-xl bg-[#F4F7FA] border border-[#DFE6ED] space-y-2">
                <h3 className="text-sm font-bold text-[#152B49]">
                  A. Strictly Necessary Cookies (Always Active)
                </h3>
                <p className="text-xs text-slate-600">
                  These cookies and session tokens are vital for the basic operation and security of our flight enquiry website. They enable form navigation, prevent automated bot submissions, manage rate-limiting, and save your cookie preference status.
                </p>
                <div className="text-[11px] font-mono text-[#2463A6]">
                  Examples: <code>aervisto_cookie_consent</code>, session security tokens.
                </div>
              </div>

              {/* Analytics & Performance */}
              <div className="p-4 rounded-xl bg-[#F4F7FA] border border-[#DFE6ED] space-y-2">
                <h3 className="text-sm font-bold text-[#152B49]">
                  B. Analytics &amp; Performance Cookies (Consent Required)
                </h3>
                <p className="text-xs text-slate-600">
                  When enabled, these services (such as Google Analytics 4 or Google Tag Manager) collect anonymous information about which pages are viewed, session durations, and user conversion events (like submitting an enquiry or clicking a phone number). This helps us improve website reliability and user interface responsiveness.
                </p>
                <div className="text-[11px] font-mono text-[#2463A6]">
                  Examples: <code>_ga</code>, <code>_ga_*</code> (Google Analytics 4).
                </div>
              </div>

              {/* Campaign Attribution */}
              <div className="p-4 rounded-xl bg-[#F4F7FA] border border-[#DFE6ED] space-y-2">
                <h3 className="text-sm font-bold text-[#152B49]">
                  C. Campaign Attribution Tokens (Advertising Measurement)
                </h3>
                <p className="text-xs text-slate-600">
                  If you arrive via an online advertisement (such as Google Ads), we temporarily capture non-personal campaign identifiers (like <code>utm_source</code> and <code>gclid</code>) in your browser&apos;s session storage to determine which ad campaign prompted your enquiry. These are automatically cleared when your browser session closes.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                3. How to Manage Your Cookie Preferences
              </h2>
              <p>
                You have full control over your cookie settings:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Consent Banner:</strong> When you first visit Aervisto, you can choose to &quot;Accept All&quot; or &quot;Decline Non-Essential&quot; cookies. Your choice is honored across all pages.
                </li>
                <li>
                  <strong>Browser Controls:</strong> You can configure your browser settings to block or delete cookies at any time. Consult your browser&apos;s Help menu (Chrome, Safari, Firefox, or Edge) for instructions.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                4. Inquiries
              </h2>
              <p>
                If you have questions about our cookie practices, please contact us at{" "}
                <a href={`mailto:${config.supportEmail}`} className="text-[#2463A6] underline">
                  {config.supportEmail}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
