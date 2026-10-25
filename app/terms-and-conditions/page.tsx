import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FileText, ShieldAlert, CheckCircle2 } from "lucide-react";
import { getPhoneConfig } from "@/lib/phone-config";

export const metadata: Metadata = {
  title: "Terms and Conditions | Aervisto Flight Enquiry Service",
  description:
    "Terms and Conditions governing the use of Aervisto.com and our agent-assisted flight enquiry and reservation-assistance services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const config = getPhoneConfig();

  return (
    <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms & Conditions" }]} className="mb-6" />

        <div className="bg-white rounded-2xl border border-[#DFE6ED] p-6 sm:p-10 shadow-sm space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5FB] text-[#2463A6] text-xs font-bold uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5 text-[#ED6029]" />
              <span>Legal Agreement</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-[#152B49] tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-[#637083] mt-2">
              Last updated: October 2026 | Please read these terms carefully before submitting an enquiry.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-[#4A5568] leading-relaxed space-y-6">
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing <strong>https://aervisto.com</strong> (&quot;the Website&quot;), submitting an online flight enquiry, or contacting our booking team by phone or email, you agree to be bound by these Terms &amp; Conditions and our Privacy Policy. If you do not agree with any portion of these terms, please discontinue use of this service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                2. Nature of Service &amp; Business Role
              </h2>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                <strong>Critical Service Distinction:</strong> Aervisto is an independent flight enquiry and reservation-assistance service. Aervisto is <strong>not an air carrier</strong>, does not own or operate aircraft, and does not directly sell, issue, or validate airline tickets through this website.
              </div>
              <p>
                Our role is strictly to evaluate available flight options, communicate published airline itineraries, and assist customers in reserving travel through authorized ticketing entities and partner booking channels.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                3. Enquiries, Quotes &amp; Price Fluctuations
              </h2>
              <p>
                Submitting an enquiry via our website or telephone does not guarantee a reservation or lock in an airfare. Airline seat inventory and fares fluctuate continuously in real time based on carrier revenue management algorithms. All quotes provided by our agents are subject to live verification and availability at the moment of actual booking.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                4. Passenger Responsibility for Documentation
              </h2>
              <p>
                The passenger is solely responsible for ensuring that all travelers possess:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Valid passports matching the exact legal names provided during booking (often requiring at least 6 months validity beyond intended travel).</li>
                <li>Necessary entry and transit visas (e.g. US ESTA, Canadian ETA, UK ETA, or Schengen Visas).</li>
                <li>Mandatory health, vaccination, or transit documentation required by origin, layover, or destination countries.</li>
              </ul>
              <p>
                Aervisto accepts no liability for passengers denied boarding or entry due to invalid or missing documentation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                5. Airline Rules, Cancellations &amp; Schedule Changes
              </h2>
              <p>
                All flights are operated under the operating carrier&apos;s Contract of Carriage. Airline policies, baggage allowances, cancellation fees, and refund eligibility are established solely by the airline. Aervisto has no authority to override airline fare rules, waive carrier change penalties, or provide refunds contrary to carrier terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                6. Intellectual Property &amp; Trademarks
              </h2>
              <p>
                All trademarks, trade names, airline logos, and airport designations referenced on this website remain the registered property of their respective holders. Their inclusion is strictly for nominative identification and informational reference and does not imply sponsorship, endorsement, or direct commercial affiliation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, Aervisto and its representatives shall not be liable for any direct, indirect, incidental, or consequential damages resulting from flight delays, carrier bankruptcies, cancellations, missed connections, mechanical disruptions, labor strikes, weather conditions, or governmental border actions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                8. Contact for Legal Matters
              </h2>
              <p>
                For legal notices or questions regarding these terms:
              </p>
              <div className="p-4 rounded-xl bg-[#F4F7FA] border border-[#DFE6ED]">
                <p><strong>Aervisto Legal &amp; Compliance</strong></p>
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
