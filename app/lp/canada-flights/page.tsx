import React from "react";
import type { Metadata } from "next";
import { FlightEnquiryForm } from "@/components/flight-enquiry/FlightEnquiryForm";
import { CallCTA } from "@/components/ui/CallCTA";
import { TrustSection } from "@/components/ui/TrustSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Canada Flight Enquiry Desk | Agent-Assisted Airline Reservations",
  description:
    "Flight enquiry service for Canadian travelers departing Toronto Pearson, Vancouver, Montreal, and Calgary for transborder and international travel.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CanadaFlightsLpPage() {
  const caFaqs = [
    {
      question: "How does Aervisto serve travelers in Canada?",
      answer:
        "Our reservation specialists assist Canadian residents with domestic trans-Canada routes, transborder US flights, and long-haul international flights departing Pearson (YYZ), Vancouver (YVR), Montreal (YUL), and other major Canadian airports.",
    },
    {
      question: "Can I enquire about domestic Canadian flights?",
      answer:
        "Yes, we handle trans-Canada routes between Toronto, Vancouver, Calgary, Edmonton, and Atlantic Canada, as well as connections to the Caribbean, Europe, and Asia.",
    },
    {
      question: "Are flights quoted in Canadian Dollars (CAD)?",
      answer:
        "Our team can discuss routing options and ticket arrangements aligned with Canadian banking and currency options.",
    },
  ];

  return (
    <div className="bg-[#F4F7FA] min-h-screen">
      <section className="bg-gradient-to-b from-[#152B49] via-[#10223A] to-[#0E1D32] text-white pt-8 pb-16 sm:pt-14 sm:pb-24 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-bold text-[#67B7E1]">
                <span>🇨🇦 Canada Booking Assistance Desk</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Canadian &amp; International Flight Enquiries.
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with our Canadian reservation desk to evaluate scheduled airline options from Toronto, Vancouver, Montreal, and Calgary to destinations worldwide.
              </p>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#67B7E1]">
                  Direct Canada Line:
                </div>
                <CallCTA variant="hero" market="CA" allowMarketSelect={false} sourceContext="lp_ca_hero" />
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Transborder US, domestic Canada, and international routes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Free initial quotes with verified published airline schedules</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <FlightEnquiryForm
                initialOrigin="Toronto (YYZ) - Canada"
                title="Canada Flight Schedules & Details"
                subtitle="Select your route and dates, then click Get Details to call our Canada booking desk."
              />
            </div>
          </div>
        </div>
      </section>

      <TrustSection />

      <section className="py-14 bg-white border-t border-[#DFE6ED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#152B49] text-center mb-8">
            Frequently Asked Questions for Canadian Travelers
          </h2>
          <FaqAccordion items={caFaqs} />
        </div>
      </section>
    </div>
  );
}
