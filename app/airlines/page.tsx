import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AirlineDirectory } from "@/components/airlines/AirlineDirectory";
import { CallCTA } from "@/components/ui/CallCTA";
import { Shield, Plane, Users, Headphones, Sparkles, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Airline Directory | International Flight Enquiries & Assistance | Aervisto",
  description:
    "Explore premier international airlines across the United States, United Kingdom, Canada, Europe, and Asia-Pacific. Consult human reservation specialists for airline ticket enquiries.",
  alternates: {
    canonical: "/airlines",
  },
  openGraph: {
    title: "International Airlines Directory | Aervisto",
    description:
      "Review major legacy airlines, alliance networks, and transatlantic routes. Speak with a booking agent to verify schedules and cabin classes.",
    url: "https://aervisto.com/airlines",
  },
};

export default function AirlinesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "International Airlines Directory",
    description:
      "Directory of major international airlines and alliances supported by Aervisto's reservation and enquiry team.",
    url: "https://aervisto.com/airlines",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://aervisto.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Airlines",
          item: "https://aervisto.com/airlines",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ label: "Airlines" }]} className="mb-6" />

          {/* Hero Section */}
          <div className="relative rounded-3xl overflow-hidden mb-10 shadow-lg text-white">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1600&q=80"
                alt="Modern commercial airliner at airport gate"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0E1D32]/95 via-[#152B49]/85 to-black/40" />
            </div>

            <div className="relative z-10 p-6 sm:p-12 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#67B7E1] backdrop-blur-sm border border-white/15 mb-4">
                <Plane className="w-3.5 h-3.5" />
                Global Carrier Directory
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
                International Airlines We Help You Explore
              </h1>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                Browse leading transatlantic, North American, and global carriers. Our dedicated human booking agents evaluate schedules, joint-venture connections, and cabin classes across major airline alliances to assist with your journey.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CallCTA
                  variant="primary"
                  sourceContext="airlines_hero"
                />
                <Link
                  href="/flights"
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold rounded-xl border border-white/20 transition-all backdrop-blur-sm"
                >
                  Custom Flight Enquiry &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Directory Filter & Cards Component */}
          <div className="mb-14">
            <AirlineDirectory />
          </div>

          {/* How Our Agents Help With Airline Reservations */}
          <div className="bg-white rounded-3xl border border-[#DFE6ED] p-8 sm:p-12 mb-10 shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6] block mb-1">
                Airline Advisory Service
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#152B49]">
                Why Coordinate Airline Bookings With Aervisto?
              </h2>
              <p className="text-sm text-[#637083] mt-2 leading-relaxed">
                Modern airline alliances and codeshares make booking international flights complex. Our specialists understand carrier partnerships and help you navigate the best itinerary options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-[#F4F7FA] border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-[#152B49] text-white flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5 text-[#67B7E1]" />
                </div>
                <h3 className="text-base font-bold text-[#152B49] mb-1.5">
                  Alliance &amp; Joint-Venture Routing
                </h3>
                <p className="text-xs text-[#637083] leading-relaxed">
                  We look across oneworld, Star Alliance, and SkyTeam networks so you can leverage synchronized schedules, reciprocal privileges, and seamless transatlantic transfers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F4F7FA] border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-[#152B49] text-white flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5 text-[#ED6029]" />
                </div>
                <h3 className="text-base font-bold text-[#152B49] mb-1.5">
                  Verified Cabin Seat Products
                </h3>
                <p className="text-xs text-[#637083] leading-relaxed">
                  Whether you require full lie-flat suites (like Delta One or British Airways Club Suite) or extra-legroom Premium Economy, we ensure your aircraft configuration matches expectations.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F4F7FA] border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-[#152B49] text-white flex items-center justify-center mb-3">
                  <Headphones className="w-5 h-5 text-[#67B7E1]" />
                </div>
                <h3 className="text-base font-bold text-[#152B49] mb-1.5">
                  Direct Phone Assistance
                </h3>
                <p className="text-xs text-[#637083] leading-relaxed">
                  Skip robotic automated phone trees. Call our regional desks directly in the US, UK, or Canada to discuss multi-carrier quotes, flexible date comparisons, and group itineraries.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#152B49] to-[#2463A6] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md mb-8">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-black">
                Have a preferred airline in mind?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-1">
                Tell our booking specialists your dates, route, and preferred carrier. We will review real-time availability and assist you with your reservation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
              <Link
                href="/flights"
                className="w-full sm:w-auto px-5 py-3 bg-white text-[#152B49] text-xs sm:text-sm font-bold rounded-xl hover:bg-slate-100 transition-colors text-center"
              >
                Send Flight Enquiry
              </Link>
              <CallCTA variant="header" sourceContext="airlines_banner" />
            </div>
          </div>

          {/* Nominative Fair Use Disclaimer */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-[#637083] leading-relaxed">
            <p>
              <strong>Trademark &amp; Carrier Disclaimer:</strong> All airline names, IATA two-letter designators, alliance insignias, and brand trademarks referenced on this page are the property of their respective owners. Aervisto is an independent flight enquiry and reservation-assistance agency and is not an airline, air carrier, or direct ticket-issuing carrier. References to specific airlines are provided strictly for informational reference and nominative identification purposes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
