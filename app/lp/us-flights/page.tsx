import React from "react";
import type { Metadata } from "next";
import { FlightEnquiryForm } from "@/components/flight-enquiry/FlightEnquiryForm";
import { CallCTA } from "@/components/ui/CallCTA";
import { TrustSection } from "@/components/ui/TrustSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CheckCircle2, Phone, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "US Flight Enquiry Desk | Agent-Assisted Airline Reservations",
  description:
    "Dedicated flight enquiry service for US travelers. Transatlantic, transpacific, and domestic flight research with human booking specialists.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function UsFlightsLpPage() {
  const usFaqs = [
    {
      question: "How does Aervisto assist US travelers?",
      answer:
        "Our reservation specialists assist travelers across the United States in researching and coordinating domestic transcontinental, transatlantic, and transpacific flights across major legacy carriers and airline alliances.",
    },
    {
      question: "Can I request lie-flat seats or premium cabins for US transcon routes?",
      answer:
        "Yes! Many premium domestic flights (such as JFK-LAX or SFO-EWR) offer dedicated lie-flat seating. Specify your cabin preference and our agents will source matching flights.",
    },
    {
      question: "Are flights refundable or changeable?",
      answer:
        "Refund and change policies depend on the ticket fare rules established by the operating airline. Our agents review these terms with you before you commit to any booking.",
    },
  ];

  return (
    <div className="bg-[#F4F7FA] min-h-screen">
      <section className="bg-gradient-to-b from-[#152B49] via-[#10223A] to-[#0E1D32] text-white pt-8 pb-16 sm:pt-14 sm:pb-24 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-bold text-[#67B7E1]">
                <span>🇺🇸 United States Booking Assistance Desk</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                US &amp; International Flight Itineraries Made Simple.
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with our US reservation team to compare scheduled airline options, premium cabins, and complex routes without confusing online checkout traps.
              </p>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#67B7E1]">
                  Direct US Support Line:
                </div>
                <CallCTA variant="hero" market="US" allowMarketSelect={false} sourceContext="lp_us_hero" />
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Personalized service for domestic and international departures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Free initial quotes with verified published airline schedules</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <FlightEnquiryForm
                initialOrigin="New York (JFK) - United States"
                title="US Flight Schedules & Details"
                subtitle="Select your route and dates, then click Get Details to call our US booking desk."
              />
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      <section className="py-14 bg-white border-t border-[#DFE6ED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#152B49] text-center mb-8">
            Frequently Asked Questions for US Travelers
          </h2>
          <FaqAccordion items={usFaqs} />
        </div>
      </section>
    </div>
  );
}
