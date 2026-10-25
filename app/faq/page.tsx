import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqAccordion, FaqItem } from "@/components/ui/FaqAccordion";
import { CallCTA } from "@/components/ui/CallCTA";
import { HelpCircle, Phone, FileText, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Aervisto Flight Assistance",
  description:
    "Find clear answers about Aervisto's airline ticket enquiry and agent-assisted reservation service. How enquiries work, fare verification, ticketing, and cancellations.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  const serviceFaqs: FaqItem[] = [
    {
      question: "How does Aervisto help with airline tickets?",
      answer:
        "Aervisto provides an agent-assisted enquiry service. When you share your travel origin, destination, dates, and cabin class preferences, our reservation specialists research published airline schedules, compare alliance routes, and present you with verified itinerary options over phone or email.",
    },
    {
      question: "Does Aervisto issue or print airline tickets directly on this website?",
      answer:
        "No. Aervisto does not sell, print, or issue airline tickets directly on this website. Our website functions as an enquiry and reservation-assistance platform. All tickets are coordinated by human reservation specialists through verified airline booking channels and authorized ticketing providers.",
    },
    {
      question: "Why should I use an agent instead of an automated booking engine?",
      answer:
        "Automated booking algorithms often struggle with multi-carrier routes, complex family seating, open-jaw transatlantic trips, and strict cancellation policies. An experienced booking specialist checks real airline inventory, clarifies fare rules and baggage limitations, and provides a direct human point of contact if your plans change.",
    },
    {
      question: "Is there any charge to submit a flight enquiry?",
      answer:
        "No. Submitting a flight enquiry and receiving verified itinerary options from an Aervisto agent is completely free. You only incur costs if you choose to proceed with an agreed ticket reservation.",
    },
  ];

  const bookingFaqs: FaqItem[] = [
    {
      question: "What happens after I submit a flight enquiry form?",
      answer:
        "Once your enquiry is submitted, you will receive a unique booking reference code (e.g. AER-2610-XXXX). An assigned reservation specialist will analyze published flight options matching your criteria and reach out through your preferred contact method (phone, email, or message) with verified itineraries and pricing.",
    },
    {
      question: "How are flight fares and seat availability confirmed?",
      answer:
        "Fares and seat availability are verified live with airline systems by our booking agents. Because airline prices fluctuate based on seat inventory, our agents confirm the current fare rules and ticket conditions before coordinating your booking.",
    },
    {
      question: "Can I request one-way, round-trip, or multi-city itineraries?",
      answer:
        "Yes. We handle round-trip flights, one-way travel, and complex multi-city or open-jaw itineraries (such as flying into London and returning from Paris or Rome). Simply indicate your requirements in the enquiry form.",
    },
    {
      question: "Can I choose my cabin class (Economy, Premium Economy, Business, First)?",
      answer:
        "Yes. You can select your preferred cabin class on our enquiry form. Our agents can also compare options across multiple cabins (for example, comparing standard economy with premium economy) so you can make an informed choice.",
    },
  ];

  const changesFaqs: FaqItem[] = [
    {
      question: "How are flight changes and cancellations handled?",
      answer:
        "Flight ticket changes, cancellations, and refunds are governed strictly by the operating airline's fare rules and contract of carriage. If you need to modify your reservation, your assigned agent can explain the airline's penalty fees, fare differences, and change policies, and assist you with processing the request.",
    },
    {
      question: "How can I speak directly with an agent right now?",
      answer:
        "You can call our booking desk directly during operating hours. We provide regional telephone support for travelers in the United States, United Kingdom, and Canada. If you already have an enquiry reference code, please mention it when calling.",
    },
    {
      question: "What travel documents or visas do I need?",
      answer:
        "Passports, transit visas (such as ESTA for the US, ETA for the UK/Canada, or Schengen visas for Europe), and health entry requirements are the sole responsibility of the individual passenger. Our agents can provide general routing guidance, but travelers must verify entry regulations with relevant governmental authorities before departure.",
    },
  ];

  return (
    <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} className="mb-6" />

        {/* FAQ Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5FB] text-[#2463A6] text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#ED6029]" />
            <span>Customer Knowledge Base</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-[#152B49] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#637083] mt-2 leading-relaxed">
            Transparent answers regarding how Aervisto works, how enquiries are handled, airline ticket confirmations, and speaking with a booking agent.
          </p>
        </div>

        {/* Section 1: About Our Service */}
        <div className="mb-10 text-left">
          <h2 className="text-lg sm:text-xl font-black text-[#152B49] mb-4 pb-2 border-b border-[#DFE6ED] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2463A6]" />
            <span>Service Overview & Business Model</span>
          </h2>
          <FaqAccordion items={serviceFaqs} defaultOpenIndex={0} />
        </div>

        {/* Section 2: Enquiry & Booking Process */}
        <div className="mb-10 text-left">
          <h2 className="text-lg sm:text-xl font-black text-[#152B49] mb-4 pb-2 border-b border-[#DFE6ED] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2463A6]" />
            <span>Enquiry & Reservation Process</span>
          </h2>
          <FaqAccordion items={bookingFaqs} defaultOpenIndex={null} />
        </div>

        {/* Section 3: Changes, Cancellations & Policies */}
        <div className="mb-12 text-left">
          <h2 className="text-lg sm:text-xl font-black text-[#152B49] mb-4 pb-2 border-b border-[#DFE6ED] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2463A6]" />
            <span>Changes, Cancellations & Customer Care</span>
          </h2>
          <FaqAccordion items={changesFaqs} defaultOpenIndex={null} />
        </div>

        {/* Contact & Enquiry Assistance Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DFE6ED] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="text-base font-bold text-[#152B49]">
              Still have questions about your flight plans?
            </h3>
            <p className="text-xs sm:text-sm text-[#637083] mt-1">
              Our reservation agents are happy to answer specific route questions and provide a customized flight quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="/flights"
              className="w-full sm:w-auto px-5 py-3 bg-[#152B49] hover:bg-[#2463A6] text-white text-xs font-bold rounded-xl transition-colors text-center"
            >
              Submit Enquiry
            </Link>
            <div className="w-full sm:w-auto">
              <CallCTA variant="primary" sourceContext="faq_page_bottom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
