import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FlightEnquiryForm } from "@/components/flight-enquiry/FlightEnquiryForm";
import { CallCTA } from "@/components/ui/CallCTA";
import { ShieldCheck, Clock, CheckCircle2, Phone, Headphones, FileText } from "lucide-react";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "Submit Flight Enquiry | Agent-Assisted Airline Ticket Reservations",
  description:
    "Submit your flight requirements to Aervisto. Our booking agents research verified scheduled flights across major global carriers and contact you with tailored options.",
  alternates: {
    canonical: "/flights",
  },
};

interface FlightsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function FlightsFormContent({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;

  const initialOrigin = typeof resolvedParams.from === "string" ? resolvedParams.from : "";
  const initialDestination = typeof resolvedParams.to === "string" ? resolvedParams.to : "";
  const initialTripType =
    resolvedParams.tripType === "one-way"
      ? "one-way"
      : resolvedParams.tripType === "multi-city"
      ? "multi-city"
      : "round-trip";

  return (
    <FlightEnquiryForm
      initialOrigin={initialOrigin}
      initialDestination={initialDestination}
      initialTripType={initialTripType}
      title="Live Flight Enquiry & Schedule Lookup"
      subtitle="Select your travel route and dates, then click Get Details to connect immediately with our booking team for real-time fares."
    />
  );
}

export default function FlightsPage({ searchParams }: FlightsPageProps) {
  const flightsFaqs = [
    {
      question: "How do I get flight options and pricing?",
      answer:
        "Select your departure and arrival destinations and dates above, then click Get Details. You will be connected directly with our human booking team who review live carrier inventory and private consolidator fares.",
    },
    {
      question: "Is there any fee or charge to check flight details?",
      answer:
        "No. Checking flight availability and receiving fare proposals from our booking team is completely free. You only pay if you decide to proceed with an agreed ticket reservation.",
    },
    {
      question: "Can I request flights for large groups or families?",
      answer:
        "Yes. Our booking agents are experienced in coordinating group bookings, family seating assignments, and special luggage or meal requirements.",
    },
    {
      question: "Can I call the booking desk directly?",
      answer:
        "Yes! You can call our support desk directly at any time. Our agents are ready to discuss your route, date flexibility, and passenger requirements in real time.",
    },
  ];

  return (
    <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={[{ label: "Flight Enquiry" }]} />
        </div>

        {/* Page Heading & Direct Call Banner */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6] block mb-1">
            Reservation Desk
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#152B49] tracking-tight">
            International Flight Enquiry
          </h1>
          <p className="text-sm sm:text-base text-[#637083] mt-2 max-w-3xl leading-relaxed">
            Tell us about your travel plans below. An aviation reservation specialist will research live flight options across major airlines and reach out with verified schedules and transparent fare rules.
          </p>
        </div>

        {/* Main Grid: Form on Left, Side Highlights & Call on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form wrapped in Suspense boundary for Next.js Partial Prefetching */}
          <div className="lg:col-span-8">
            <Suspense
              fallback={
                <div className="p-8 bg-white rounded-2xl border border-[#DFE6ED] min-h-[400px] flex items-center justify-center text-slate-400 animate-pulse">
                  Loading flight enquiry options...
                </div>
              }
            >
              <FlightsFormContent searchParams={searchParams} />
            </Suspense>
          </div>

          {/* Right Sidebar: Direct Call & Trust Information */}
          <div className="lg:col-span-4 space-y-6">
            {/* Urgent Phone Card */}
            <div className="bg-[#152B49] text-white rounded-2xl p-6 shadow-md border border-[#1E3B63]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#67B7E1] mb-2">
                <Clock className="w-4 h-4 text-[#ED6029]" />
                <span>Urgent or Same-Day Travel?</span>
              </div>
              <h2 className="text-lg font-bold text-white mb-2">
                Speak directly with an available booking agent
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                If you are traveling within the next 48 hours or prefer discussing route options by phone, call our desk directly.
              </p>
              <CallCTA variant="primary" sourceContext="flights_page_sidebar" />
            </div>

            {/* Service Process Checklist */}
            <div className="bg-white rounded-2xl p-6 border border-[#DFE6ED] shadow-sm">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#152B49] mb-4">
                Our Booking Commitment
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4A5568]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Authentic Airline Inventory:</strong> We review real published schedules rather than cached or fabricated fares.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Automated Checkout Traps:</strong> We never bill your credit card without prior human confirmation and review.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Dedicated Travel Advisor:</strong> A single agent coordinates your enquiry from initial search to ticket confirmation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Baggage & Rule Transparency:</strong> Full clarity on carry-on limits, checked baggage allowances, and refund policies.
                  </span>
                </li>
              </ul>
            </div>

            {/* Legal / Service Clarification */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-[#637083] leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-[#2463A6] mb-1 inline-block mr-1.5" />
              <strong>Service Notice:</strong> Aervisto does not directly issue or print tickets on this website. All bookings are coordinated with authorized issuing channels and partner providers.
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 pt-12 border-t border-[#DFE6ED] max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#152B49]">
              Flight Enquiry Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#637083] mt-1">
              Common questions regarding our flight enquiry process.
            </p>
          </div>
          <FaqAccordion items={flightsFaqs} />
        </div>
      </div>
    </div>
  );
}
