import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AirlineCard } from "@/components/airlines/AirlineCard";
import { FlightEnquiryForm } from "@/components/flight-enquiry/FlightEnquiryForm";
import { CallCTA } from "@/components/ui/CallCTA";
import {
  AIRLINES_DATA,
  getAirlineBySlug,
  getRelatedAirlines,
} from "@/lib/airlines-data";
import { getPhoneConfig } from "@/lib/phone-config";
import {
  MapPin,
  Shield,
  Plane,
  Phone,
  CheckCircle2,
  Clock,
  Compass,
  ArrowRight,
  Info,
  Sparkles,
  Luggage,
} from "lucide-react";

interface AirlinePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AIRLINES_DATA.map((airline) => ({
    slug: airline.slug,
  }));
}

export async function generateMetadata({
  params,
}: AirlinePageProps): Promise<Metadata> {
  const { slug } = await params;
  const airline = getAirlineBySlug(slug);

  if (!airline) {
    return {
      title: "Airline Not Found | Aervisto",
    };
  }

  const title = `${airline.name} Flights & Booking Assistance | Aervisto`;
  const description = `${airline.shortDescription} Learn about ${airline.name} routes, hubs, cabin classes, and consult Aervisto booking agents for flight enquiries.`;
  const canonical = `/airlines/${airline.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: `https://aervisto.com${canonical}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function AirlineDetailPage({ params }: AirlinePageProps) {
  const { slug } = await params;
  const airline = getAirlineBySlug(slug);

  if (!airline) {
    notFound();
  }

  const related = getRelatedAirlines(airline);
  const phoneConfig = getPhoneConfig();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
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
      {
        "@type": "ListItem",
        position: 3,
        name: airline.name,
        item: `https://aervisto.com/airlines/${airline.slug}`,
      },
    ],
  };

  const airlineJsonLd = {
    "@context": "https://schema.org",
    "@type": "Airline",
    name: airline.name,
    iataCode: airline.iata,
    description: airline.shortDescription,
    url: `https://aervisto.com/airlines/${airline.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(airlineJsonLd) }}
      />

      <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Airlines", href: "/airlines" },
              { label: airline.name },
            ]}
            className="mb-6"
          />

          {/* Header Card */}
          <div className="bg-white rounded-3xl border border-[#DFE6ED] p-6 sm:p-10 mb-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-5">
                {/* Monogram Badge */}
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center font-mono font-black text-white text-2xl sm:text-3xl shadow-md flex-shrink-0"
                  style={{ backgroundColor: airline.brandColor }}
                >
                  {airline.iata}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {airline.country}
                    </span>
                    {airline.alliance && (
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {airline.alliance}
                      </span>
                    )}
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-black text-[#152B49] tracking-tight">
                    {airline.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-[#637083] mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2463A6] flex-shrink-0" />
                    <span>Primary Hub: {airline.hub}</span>
                  </p>
                </div>
              </div>

              {/* Direct Call Quick Action */}
              <div className="flex-shrink-0 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <CallCTA
                  variant="primary"
                  sourceContext={`airline_header_${airline.slug}`}
                />
              </div>
            </div>

            {/* Quick Summary */}
            <p className="text-sm sm:text-base text-slate-700 mt-6 leading-relaxed max-w-4xl border-t border-slate-100 pt-5">
              {airline.shortDescription}
            </p>
          </div>

          {/* Main 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Key Facts Grid */}
              <div className="bg-white rounded-2xl border border-[#DFE6ED] p-6 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#2463A6] mb-4">
                  Carrier Quick Facts
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-[11px] uppercase font-bold text-slate-400">
                      IATA Code
                    </div>
                    <div className="text-sm font-black text-[#152B49] font-mono mt-0.5">
                      {airline.iata}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-[11px] uppercase font-bold text-slate-400">
                      Global Alliance
                    </div>
                    <div className="text-sm font-bold text-[#152B49] mt-0.5">
                      {airline.alliance ? airline.alliance : "Independent (Non-aligned)"}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 sm:col-span-2">
                    <div className="text-[11px] uppercase font-bold text-slate-400">
                      Primary Operating Hubs
                    </div>
                    <div className="text-sm font-semibold text-[#152B49] mt-0.5">
                      {airline.hub}
                    </div>
                  </div>
                </div>
              </div>

              {/* About the Airline */}
              <div className="bg-white rounded-2xl border border-[#DFE6ED] p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-black text-[#152B49] mb-4">
                  About {airline.name}
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {airline.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Cabin Classes Offered */}
              <div className="bg-white rounded-2xl border border-[#DFE6ED] p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-[#ED6029]" />
                  <h2 className="text-xl font-black text-[#152B49]">
                    Cabin Classes &amp; Seating Options
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  Available cabin tiers on {airline.name} long-haul and regional routes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {airline.cabinClasses.map((cabin) => (
                    <div
                      key={cabin}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-[#152B49]">
                        {cabin}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 mt-4 leading-relaxed">
                  * Cabin amenities, seat pitch, lie-flat dimensions, and meal service vary by aircraft type and specific route. Our agents can verify the exact equipment scheduled for your travel dates.
                </p>
              </div>

              {/* Aircraft & Fleet Highlights */}
              {airline.fleetHighlights && airline.fleetHighlights.length > 0 && (
                <div className="bg-white rounded-2xl border border-[#DFE6ED] p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Plane className="w-5 h-5 text-[#2463A6]" />
                    <h2 className="text-xl font-black text-[#152B49]">
                      Long-Haul Fleet Highlights
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {airline.fleetHighlights.map((aircraft) => (
                      <span
                        key={aircraft}
                        className="px-3 py-1.5 bg-[#F4F7FA] border border-slate-200 rounded-lg text-xs font-bold text-[#152B49]"
                      >
                        {aircraft}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Destinations on this Airline */}
              <div className="bg-white rounded-2xl border border-[#DFE6ED] p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-black text-[#152B49] mb-2">
                  Popular Destinations on {airline.name}
                </h2>
                <p className="text-xs text-slate-500 mb-4">
                  Frequent international gateways and major city connections served across the carrier network:
                </p>
                <div className="flex flex-wrap gap-2">
                  {airline.popularDestinations.map((city) => (
                    <span
                      key={city}
                      className="px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-full text-xs font-semibold text-slate-800 transition-colors"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Travel Tips & Considerations */}
              {airline.travelTips && airline.travelTips.length > 0 && (
                <div className="bg-[#EBF5FB] rounded-2xl border border-[#67B7E1]/30 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="w-5 h-5 text-[#2463A6]" />
                    <h2 className="text-base font-bold text-[#152B49]">
                      Travel &amp; Booking Insights for {airline.name}
                    </h2>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {airline.travelTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2463A6] mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nominative Fair Use Note */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-slate-500 leading-relaxed">
                <p>
                  <strong>Notice of Independent Operation:</strong> {airline.name} is a registered trademark of its respective parent company. Aervisto is an independent ticket enquiry and reservation assistance business. We are not an airline, we do not operate aircraft, and we are not an official carrier representative or partner unless explicitly documented.
                </p>
              </div>
            </div>

            {/* Right Sticky Column: Contact & Enquiry Form */}
            <div className="lg:col-span-5 space-y-6">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Direct Phone Call Card */}
                <div className="bg-gradient-to-br from-[#152B49] to-[#2463A6] text-white rounded-3xl p-6 shadow-lg border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#67B7E1] mb-2">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>Booking Specialists On Call</span>
                  </div>
                  <h3 className="text-xl font-black leading-snug">
                    Speak With an Agent About {airline.name}
                  </h3>
                  <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                    Compare verified schedules, premium cabin upgrades, codeshare routings, and flexible return dates directly by phone.
                  </p>

                  <div className="mt-5">
                    <a
                      href={`tel:${phoneConfig.defaultPhone.replace(/[^\d+]/g, "")}`}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/15 group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-bold text-slate-300">Toll-Free Desk:</span>
                        <span className="font-mono font-black text-base text-white">{phoneConfig.defaultPhone}</span>
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-[#ED6029] text-white font-bold text-xs flex items-center gap-1.5 shadow">
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Now</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Flight Enquiry Form Prefilled */}
                <div className="bg-white rounded-3xl border border-[#DFE6ED] p-6 shadow-sm">
                  <FlightEnquiryForm
                    title={`Check ${airline.name} Schedules & Fares`}
                    subtitle={`Select dates to check live ${airline.name} options and connect directly with our booking desk.`}
                    initialNotes={`Preferred carrier: ${airline.name}`}
                    compactMode={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Related Airlines Section */}
          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[#DFE6ED]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6] block mb-1">
                    Compare Airlines
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#152B49]">
                    Other {airline.alliance ? `${airline.alliance} or ` : ""}{airline.country} Carriers
                  </h2>
                </div>
                <Link
                  href="/airlines"
                  className="text-xs sm:text-sm font-bold text-[#2463A6] hover:text-[#152B49] inline-flex items-center gap-1"
                >
                  <span>View All Airlines</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <AirlineCard key={rel.slug} airline={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
