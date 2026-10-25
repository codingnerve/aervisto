import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ShieldAlert, AlertTriangle, CheckCircle2, Phone } from "lucide-react";
import { CallCTA } from "@/components/ui/CallCTA";
import { getPhoneConfig } from "@/lib/phone-config";

export const metadata: Metadata = {
  title: "Booking & Aviation Disclaimer | Aervisto Flight Assistance",
  description:
    "Aervisto Booking and Aviation Service Disclaimer. Important disclosures regarding airline partnerships, fare quotes, baggage allowances, and passenger entry requirements.",
  alternates: {
    canonical: "/booking-disclaimer",
  },
};

export default function BookingDisclaimerPage() {
  const config = getPhoneConfig();

  return (
    <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Booking Disclaimer" }]} className="mb-6" />

        <div className="bg-white rounded-2xl border border-[#DFE6ED] p-6 sm:p-10 shadow-sm space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>Aviation Service Disclosures</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-[#152B49] tracking-tight">
              Booking &amp; Service Disclaimer
            </h1>
            <p className="text-xs text-[#637083] mt-2">
              Important information regarding airline ticket enquiries, fare quotations, and reservation assistance.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-[#4A5568] leading-relaxed space-y-6">
            {/* Box 1: Non-Carrier Disclaimer */}
            <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-200 text-amber-950 space-y-2">
              <h2 className="text-sm font-black uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-700" />
                <span>1. Independent Entity &amp; Non-Carrier Status</span>
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed">
                <strong>Aervisto is not an airline and does not operate aircraft.</strong> We are an independent flight enquiry and reservation-assistance agency. We do not sell or issue flight tickets directly on this website. All flight arrangements are handled by human travel specialists coordinating with authorized ticketing partners, global distribution systems, and scheduled operating carriers.
              </p>
            </div>

            {/* Section 2: Fares & Availability */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                2. Live Fares, Seat Availability &amp; Price Volatility
              </h2>
              <p>
                All airfares, flight schedules, aircraft equipment, seat layouts, and route options presented on our website, in route guides, or during initial phone conversations are subject to live verification with the operating airlines. Airlines utilize dynamic pricing systems where fares change without advance notice based on passenger demand and seat availability.
              </p>
              <p>
                An enquiry submitted through this website or a telephone discussion with an agent does not hold or freeze a seat. A fare is finalized only upon verification and completion of the booking process through the designated ticketing procedure.
              </p>
            </section>

            {/* Section 3: Baggage Allowances & Ancillary Fees */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                3. Baggage Policies &amp; Carrier Ancillary Charges
              </h2>
              <p>
                Baggage policies (including weight limits, maximum dimensions, free carry-on allowances, and checked luggage charges) vary significantly between operating carriers and ticket fare classes (e.g. Basic Economy vs Standard Economy vs Premium Economy).
              </p>
              <p>
                Unless explicitly stated in your confirmed itinerary receipt, baggage fees and optional seat selection fees are not included in base flight quotes and may be payable directly to the operating airline at check-in.
              </p>
            </section>

            {/* Section 4: Travel Documents, Visas & Health Rules */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                4. Passport Validity, Visas &amp; Entry Compliance
              </h2>
              <p>
                Passengers carry the sole legal responsibility for possessing all mandatory travel documentation prior to travel. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Valid government-issued passports matching passenger names exactly as ticketed. Many international destinations mandate that passports be valid for a minimum of 6 months beyond the intended departure date.</li>
                <li>Electronic Travel Authorizations (such as US ESTA, Canadian ETA, UK ETA, or Australian ETA) where applicable.</li>
                <li>Transit visas for intermediate connection airports, even if remaining within the airport transit area.</li>
                <li>Required health declarations or vaccination records where mandated by destination authorities.</li>
              </ul>
              <p>
                Neither Aervisto nor the operating airline can accept liability or issue refunds if a passenger is denied boarding by an airline or refused entry by immigration authorities due to documentation defects.
              </p>
            </section>

            {/* Section 5: Cancellations, Refunds & Changes */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                5. Changes, Cancellations &amp; Airline Tariffs
              </h2>
              <p>
                Flight tickets are issued in accordance with the specific fare rules established by the operating carrier. Many discount and promotional airfares are non-refundable or incur carrier-mandated change penalties. When you request itinerary alterations or cancellations, your booking agent will detail the operating airline&apos;s published policies and any applicable fare differences or administrative fees.
              </p>
            </section>

            {/* Section 6: Trademarks & Fair Use */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#152B49]">
                6. Trademarks &amp; Carrier Reference Disclaimer
              </h2>
              <p>
                All airline names, carrier logos, airport IATA/ICAO designations, and travel trademarks mentioned on Aervisto.com are used strictly for informational purposes to identify flight services under nominative fair use. Aervisto does not claim endorsement, exclusive representation, or formal partnership with any specific carrier unless expressly verified in writing.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-[#DFE6ED] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#637083]">
              Have questions regarding these disclosures?
            </p>
            <CallCTA variant="primary" sourceContext="booking_disclaimer_bottom" />
          </div>
        </div>
      </div>
    </div>
  );
}
