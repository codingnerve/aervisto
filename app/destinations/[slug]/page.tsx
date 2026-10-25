import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FlightEnquiryForm } from "@/components/flight-enquiry/FlightEnquiryForm";
import { CallCTA } from "@/components/ui/CallCTA";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { POPULAR_DESTINATIONS, getDestinationBySlug } from "@/lib/destinations-data";
import { POPULAR_ROUTES } from "@/lib/routes-data";
import {
  MapPin,
  Plane,
  Clock,
  Calendar,
  CheckCircle2,
  Compass,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return POPULAR_DESTINATIONS.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: `Flights to ${destination.name}, ${destination.country} | Flight Enquiry & Booking Support`,
    description: `Enquire about flights to ${destination.name} (${destination.primaryAirports.map((a) => a.code).join(", ")}). Dedicated reservation specialists assist with route options and cabin fares.`,
    alternates: {
      canonical: `/destinations/${destination.slug}`,
    },
    openGraph: {
      title: `Flights to ${destination.name} | Aervisto`,
      description: destination.heroSummary,
      url: `https://aervisto.com/destinations/${destination.slug}`,
    },
  };
}

export default async function DestinationDetailPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const destinationFaqs = [
    {
      question: `Which airport in ${destination.name} should I fly into?`,
      answer: `${destination.name} is served primarily by ${destination.primaryAirports
        .map((a) => `${a.name} (${a.code})`)
        .join(" and ")}. Our booking agents can recommend the best airport based on your flight origin and ground travel plans.`,
    },
    {
      question: `Does Aervisto offer round-trip and one-way flights to ${destination.name}?`,
      answer: `Yes, we handle round-trip, one-way, and open-jaw multi-city bookings arriving in or departing from ${destination.name}.`,
    },
    {
      question: `Can I request flexible travel dates for flights to ${destination.name}?`,
      answer: `Certainly. Indicating flexibility of ±3 days in your enquiry allows our booking team to explore alternative flight dates with better schedules or cabin availability.`,
    },
  ];

  // Related destinations
  const otherDestinations = POPULAR_DESTINATIONS.filter((d) => d.slug !== destination.slug).slice(0, 3);

  return (
    <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Destinations", href: "/destinations" },
            { label: destination.name },
          ]}
          className="mb-6"
        />

        {/* Destination Header Banner with Real Photo */}
        <div className="text-white rounded-3xl p-6 sm:p-12 mb-10 shadow-xl relative overflow-hidden min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <Image
              src={destination.imageUrl}
              alt={destination.name}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E1D32]/95 via-[#152B49]/80 to-black/40" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-300 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination.country} • {destination.region}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow">
              Flights to {destination.name}
            </h1>

            <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed drop-shadow">
              {destination.heroSummary}
            </p>

            {/* Airport Badges */}
            <div className="flex flex-wrap items-center gap-2 mt-5">
              <span className="text-xs text-slate-300">Primary Airports:</span>
              {destination.primaryAirports.map((ap) => (
                <span
                  key={ap.code}
                  className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white font-mono text-xs font-bold rounded-lg border border-white/20"
                >
                  {ap.code} — {ap.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content & Enquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: Destination Guide */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DFE6ED] shadow-sm">
              <h2 className="text-xl font-extrabold text-[#152B49] mb-3">
                About Traveling to {destination.name}
              </h2>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                {destination.description}
              </p>

              {/* Best Time to Visit */}
              <div className="mt-6 p-4 rounded-xl bg-[#EBF5FB] border border-[#67B7E1]/30">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2463A6] mb-1">
                  <Calendar className="w-4 h-4 text-[#ED6029]" />
                  <span>Climate & Seasonal Insights</span>
                </div>
                <p className="text-xs sm:text-sm text-[#172335]">
                  {destination.bestTimeToVisit}
                </p>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DFE6ED] shadow-sm">
              <h3 className="text-lg font-extrabold text-[#152B49] mb-4">
                Destination Highlights & Attractions
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4A5568]">
                {destination.keyHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Typical Flight Times */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DFE6ED] shadow-sm">
              <h3 className="text-lg font-extrabold text-[#152B49] mb-4">
                Typical Flight Times to {destination.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {destination.typicalFlightTimes.map((ft, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F4F7FA] border border-[#DFE6ED] text-xs"
                  >
                    <span className="font-bold text-[#152B49] block">{ft.from}</span>
                    <span className="text-slate-600 mt-1 block">{ft.duration}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 mt-3">
                Times represent typical nonstop flights where available. Connecting routings vary.
              </p>
            </div>

            {/* Travel Tips */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DFE6ED] shadow-sm">
              <h3 className="text-lg font-extrabold text-[#152B49] mb-4">
                Arrival & Ground Transit Tips
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A5568]">
                {destination.travelTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2463A6] mt-2 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DFE6ED] shadow-sm">
              <h3 className="text-lg font-extrabold text-[#152B49] mb-4">
                Frequently Asked Questions
              </h3>
              <FaqAccordion items={destinationFaqs} />
            </div>
          </div>

          {/* Right Column: Enquiry Form & Phone Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone CTA Card */}
            <div className="bg-[#152B49] text-white rounded-2xl p-6 shadow-md border border-[#1E3B63]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#67B7E1] mb-2">
                <Clock className="w-4 h-4 text-[#ED6029]" />
                <span>Personalized Flight Planning</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Speak directly with an agent booking flights to {destination.name}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Need multi-airline combinations, premium cabin seating, or group booking assistance? Call our desk now.
              </p>
              <CallCTA variant="primary" sourceContext={`destination_${destination.slug}_sidebar`} />
            </div>

            {/* Pre-filled Enquiry Form */}
            <FlightEnquiryForm
              initialDestination={`${destination.name} (${destination.primaryAirports[0].code}) - ${destination.country}`}
              initialTripType="round-trip"
              title={`Check Flights to ${destination.name}`}
              subtitle="Enter your departure city and dates, then click Get Details to call our booking team for live options."
            />
          </div>
        </div>

        {/* Other Destinations */}
        <div className="mt-12 pt-8 border-t border-[#DFE6ED]">
          <h2 className="text-lg font-extrabold text-[#152B49] mb-6">
            Explore Other Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherDestinations.map((od) => (
              <div
                key={od.slug}
                className="bg-white p-5 rounded-xl border border-[#DFE6ED] hover:border-[#2463A6] transition-colors"
              >
                <span className="text-[10px] font-bold text-[#2463A6] uppercase tracking-wider">
                  {od.country}
                </span>
                <h3 className="text-base font-bold text-[#152B49] mt-1">
                  Flights to {od.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {od.heroSummary}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <Link
                    href={`/destinations/${od.slug}`}
                    className="text-xs font-bold text-[#2463A6] hover:underline"
                  >
                    View Destination Guide &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
