import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ShieldCheck, Lock, Eye, RefreshCw, FileText } from "lucide-react";
import { getPhoneConfig } from "@/lib/phone-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Aervisto Flight Assistance",
  description:
    "Aervisto Privacy Policy. How we collect, handle, and protect personal information for flight enquiries across the United States, United Kingdom, and Canada.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const config = getPhoneConfig();

  return (
    <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} className="mb-6" />

        <div className="bg-white rounded-2xl border border-[#DFE6ED] p-6 sm:p-10 shadow-sm space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5FB] text-[#2463A6] text-xs font-bold uppercase tracking-wider mb-2">
              <Lock className="w-3.5 h-3.5 text-[#ED6029]" />
              <span>Data Protection & Privacy</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-[#152B49] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#637083] mt-2">
              Last updated: October 2026 | Compliant with US State Privacy Laws, UK GDPR, EU GDPR, and Canadian PIPEDA.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-[#4A5568] leading-relaxed space-y-6">
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                1. Introduction & Scope
              </h2>
              <p>
                Aervisto (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates <strong>https://aervisto.com</strong> as an international airline ticket enquiry and reservation-assistance service. This Privacy Policy outlines our principles and practices regarding the collection, processing, storage, and protection of personal data provided by visitors and customers in the United States, United Kingdom, Canada, and internationally.
              </p>
              <p>
                By using our website, submitting a flight enquiry, or contacting our booking desk by telephone, you acknowledge the terms described in this Privacy Policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                2. Information We Collect
              </h2>
              <p>
                We practice data minimization and collect only the information necessary to research flight options and respond to your travel requests:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Contact Information:</strong> Full name, email address, telephone number, and country code.
                </li>
                <li>
                  <strong>Travel Requirements:</strong> Desired origin city or airport, destination, departure and return dates, passenger counts (adults, children, infants), preferred cabin class, date flexibility, and special travel requirements (such as dietary or seating preferences).
                </li>
                <li>
                  <strong>Technical &amp; Session Data:</strong> IP address (used for rate-limiting and regional routing), browser user-agent, and advertising campaign attribution tags (such as <code>utm_source</code>, <code>utm_medium</code>, <code>utm_campaign</code>, and <code>gclid</code> where lawfully provided).
                </li>
              </ul>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <strong>What We Do NOT Collect:</strong> We do not collect payment card information, bank credentials, Social Security numbers, or national identity card details through our general website enquiry forms.
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                3. How We Use Your Information
              </h2>
              <p>We process your personal information exclusively for lawful business purposes:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>To evaluate scheduled flight options matching your enquiry criteria.</li>
                <li>To communicate verified itineraries, flight schedules, and fare conditions via phone, email, or message.</li>
                <li>To coordinate reservations with authorized ticket issuing channels upon your approval.</li>
                <li>To protect our enquiry systems against automated bot spam, fraud, and denial-of-service abuse.</li>
                <li>To evaluate advertising campaign performance subject to your consent preferences.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                4. Data Sharing &amp; Third Parties
              </h2>
              <p>
                <strong>We do not sell, rent, or trade your personal information.</strong> We only share information with third parties under strict confidentiality and operational necessity:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Ticketing Partners &amp; Airline Providers:</strong> When you instruct an agent to finalize a reservation, passenger details required by the operating carrier for ticketing (such as legal names and dates of birth) are transmitted to the issuing partner.
                </li>
                <li>
                  <strong>Transactional Email Providers:</strong> We utilize secure transactional email infrastructure (such as Resend or Brevo) solely to deliver internal enquiry notifications and customer booking confirmations.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> Where required by law, subpoena, or government aviation security mandates.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                5. Your Privacy Rights (GDPR, CCPA/CPRA &amp; PIPEDA)
              </h2>
              <p>
                Depending on your country or state of residency, you possess specific statutory rights regarding your personal information:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Right to Access:</strong> You may request a copy of the personal data we hold about you.</li>
                <li><strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete details.</li>
                <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> You may request deletion of your enquiry data when no longer needed for business or legal record-keeping.</li>
                <li><strong>Right to Restrict or Object:</strong> You may object to data processing or withdraw marketing/analytical consent at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, please email our data compliance desk at{" "}
                <a href={`mailto:${config.supportEmail}`} className="text-[#2463A6] underline">
                  {config.supportEmail}
                </a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                6. Data Retention &amp; Security
              </h2>
              <p>
                We apply technical and organizational safeguards, including SSL/TLS encryption for all data in transit, strict server-side access controls, and rate-limiting protocols. Enquiry records are retained only for the duration required to service your travel request and comply with accounting and dispute-resolution obligations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                7. Contact Details for Privacy Inquiries
              </h2>
              <p>
                For questions regarding this policy or our privacy practices, contact us at:
              </p>
              <div className="p-4 rounded-xl bg-[#F4F7FA] border border-[#DFE6ED]">
                <p><strong>Aervisto Customer Privacy Desk</strong></p>
                <p>Email: <a href={`mailto:${config.supportEmail}`} className="text-[#2463A6]">{config.supportEmail}</a></p>
                <p>Website: https://aervisto.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
