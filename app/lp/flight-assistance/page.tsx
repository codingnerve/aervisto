import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FlightEnquiryForm } from "@/components/flight-enquiry/FlightEnquiryForm";
import { CallCTA } from "@/components/ui/CallCTA";
import { TrustSection } from "@/components/ui/TrustSection";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import {
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Headphones,
  Calendar,
} from "lucide-react";
import { getPhoneConfig } from "@/lib/phone-config";

export const metadata: Metadata = {
  title: "International Flight Assistance | Agent-Assisted Airline Reservations",
  description:
    "Speak directly with experienced booking agents to research international flights across major airlines. Fast phone support, verified schedules, and transparent assistance.",
  robots: {
    index: false, // Recommended for PPC dedicated landing pages to avoid duplicate content
    follow: true,
  },
};

export default function FlightAssistanceLpPage() {
  const config = getPhoneConfig();

  const lpFaqs = [
    {
      question: "How does Aervisto's flight booking assistance work?",
      answer:
        "You submit your travel details or call our desk directly. A human reservation agent reviews published carrier schedules, verifies fare classes and baggage terms, and presents you with tailored itinerary proposals.",
    },
    {
      question: "Does Aervisto issue tickets directly online?",
      answer:
        "No. Aervisto operates as a flight enquiry and reservation-assistance agency. Tickets are coordinated by human specialists through authorized airline booking channels.",
    },
    {
      question: "Can I call right now to get flight options?",
      answer:
        "Yes! Our phone desk is open during regular support hours. You can call immediately to discuss your itinerary with an agent.",
    },
  ];

  return (
    <div className="bg-[#F4F7FA] min-h-screen">
      {/* High-Impact PPC Hero */}
      <section className="bg-gradient-to-b from-[#152B49] via-[#10223A] to-[#0E1D32] text-white pt-8 pb-16 sm:pt-14 sm:pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #67B7E1 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: PPC Headline & Value Props */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-bold text-[#67B7E1] border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Dedicated Flight Booking Specialists</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                International Flight Options Without The Hassle.
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with our reservation desk to find verified flight itineraries, compare multi-carrier options, and secure agent assistance for your upcoming travel.
              </p>

              {/* Call CTA in LP Hero */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#67B7E1]">
                  <Phone className="w-4 h-4 text-[#ED6029]" />
                  <span>Direct Phone Assistance</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Speak to an Agent Now
                </h3>
                <CallCTA variant="hero" allowMarketSelect={true} sourceContext="lp_flight_assistance_hero" />
              </div>

              {/* Verified Checklist */}
              <div className="space-y-2.5 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Real scheduled airline inventory reviewed by human agents</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Assistance with one-way, round-trip, and complex multi-city routes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Clear baggage allowances and fare restrictions explained upfront</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Converting Enquiry Form */}
            <div className="lg:col-span-6">
              <FlightEnquiryForm
                title="Get Live Flight Details & Call"
                subtitle="Enter your trip route and dates, then click Get Details to speak directly with an agent."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency Section */}
      <TrustSection />

      {/* LP FAQs */}
      <section className="py-14 bg-white border-t border-[#DFE6ED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#152B49]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#637083] mt-1">
              Common questions regarding our flight enquiry process.
            </p>
          </div>
          <FaqAccordion items={lpFaqs} />
        </div>
      </section>

      {/* Bottom Conversion Bar */}
      <section className="py-12 bg-[#152B49] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Need Live Assistance Right Now?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Our booking team is ready to evaluate airline options, compare cabin classes, and answer your route questions.
          </p>
          <div className="pt-2 flex justify-center">
            <CallCTA variant="primary" sourceContext="lp_flight_assistance_bottom" />
          </div>
        </div>
      </section>
    </div>
  );
}
