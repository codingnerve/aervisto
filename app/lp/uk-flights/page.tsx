import React from "react";
import type { Metadata } from "next";
import { FlightEnquiryForm } from "@/components/flight-enquiry/FlightEnquiryForm";
import { CallCTA } from "@/components/ui/CallCTA";
import { TrustSection } from "@/components/ui/TrustSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "UK Flight Enquiry Desk | Agent-Assisted Airline Reservations",
  description:
    "Flight enquiry desk for UK travelers departing Heathrow, Gatwick, Manchester, and regional hubs to North America, Asia, and Europe.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function UkFlightsLpPage() {
  const ukFaqs = [
    {
      question: "How does Aervisto help UK-originating passengers?",
      answer:
        "Our reservation specialists research scheduled flights from London Heathrow, Gatwick, Manchester, and Scottish airports to transatlantic destinations across the USA and Canada, alongside worldwide routes.",
    },
    {
      question: "Can I request transatlantic daytime flights to the US?",
      answer:
        "Yes! Many passengers prefer daytime westbound flights from London to New York or Boston to arrive in the afternoon and ease jet lag. Let our team know your schedule preference.",
    },
    {
      question: "Do you advise on US entry travel authorizations (ESTA)?",
      answer:
        "While travelers are responsible for securing their own ESTA, our agents remind you of mandatory US entry requirements when planning your transatlantic itinerary.",
    },
  ];

  return (
    <div className="bg-[#F4F7FA] min-h-screen">
      <section className="bg-gradient-to-b from-[#152B49] via-[#10223A] to-[#0E1D32] text-white pt-8 pb-16 sm:pt-14 sm:pb-24 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-bold text-[#67B7E1]">
                <span>🇬🇧 United Kingdom Booking Assistance Desk</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                UK Departures &amp; Transatlantic Flight Enquiries.
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with our dedicated booking specialists to find verified scheduled flights from London, Manchester, and UK regional airports to the USA, Canada, and global destinations.
              </p>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#67B7E1]">
                  Direct UK Line:
                </div>
                <CallCTA variant="hero" market="UK" allowMarketSelect={false} sourceContext="lp_uk_hero" />
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Heathrow, Gatwick, and regional UK departures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Free initial quotes on verified scheduled airlines</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <FlightEnquiryForm
                initialOrigin="London (LHR) - United Kingdom"
                title="UK Flight Schedules & Details"
                subtitle="Select your route and dates, then click Get Details to call our UK booking desk."
              />
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      <section className="py-14 bg-white border-t border-[#DFE6ED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#152B49] text-center mb-8">
            Frequently Asked Questions for UK Travelers
          </h2>
          <FaqAccordion items={ukFaqs} />
        </div>
      </section>
    </div>
  );
}
