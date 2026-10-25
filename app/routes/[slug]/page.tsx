import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FlightEnquiryForm } from "@/components/flight-enquiry/FlightEnquiryForm";
import { CallCTA } from "@/components/ui/CallCTA";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { POPULAR_ROUTES, getRouteBySlug } from "@/lib/routes-data";
import {
  Plane,
  Clock,
  Compass,
  MapPin,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Info,
} from "lucide-react";

interface RoutePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return POPULAR_ROUTES.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: RoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    return {
      title: "Route Not Found",
    };
  }

  return {
    title: `${route.originCity} to ${route.destinationCity} Flights | Enquiry & Booking Assistance`,
    description: `Enquire about flight options from ${route.originCity} (${route.originIata}) to ${route.destinationCity} (${route.destinationIata}). Real booking agents assist with verified schedules and cabin choices.`,
    alternates: {
      canonical: `/routes/${route.slug}`,
    },
    openGraph: {
      title: `${route.originCity} to ${route.destinationCity} Flights | Aervisto`,
      description: route.heroSummary,
      url: `https://aervisto.com/routes/${route.slug}`,
    },
  };
}

export default async function RouteDetailPage({ params }: RoutePageProps) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = POPULAR_ROUTES.filter((r) => r.slug !== route.slug).slice(0, 3);

  return (
    <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Popular Routes", href: "/routes" },
            { label: `${route.originCity} to ${route.destinationCity}` },
          ]}
          className="mb-6"
        />

        {/* Route Hero Header with Real Image */}
        <div className="text-white rounded-3xl p-6 sm:p-12 mb-10 shadow-xl relative overflow-hidden min-h-[320px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <Image
              src={route.imageUrl}
              alt={`${route.originCity} to ${route.destinationCity}`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E1D32]/95 via-[#152B49]/85 to-black/50" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-sky-300 mb-2">
              {route.category} Air Corridor
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow">
              {route.originCity} to {route.destinationCity} Flights
            </h1>

            <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed drop-shadow">
              {route.heroSummary}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/20 text-xs">
              <div>
                <span className="text-slate-300 block uppercase text-[10px]">Origin</span>
                <span className="font-bold text-sm sm:text-base text-white">{route.originIata}</span>
                <span className="block text-slate-300 text-[11px] truncate">{route.originCity}</span>
              </div>
              <div>
                <span className="text-slate-300 block uppercase text-[10px]">Destination</span>
                <span className="font-bold text-sm sm:text-base text-white">{route.destinationIata}</span>
                <span className="block text-slate-300 text-[11px] truncate">{route.destinationCity}</span>
              </div>
              <div>
                <span className="text-slate-300 block uppercase text-[10px]">Typical Duration</span>
                <span className="font-bold text-sm sm:text-base text-white">
                  {route.typicalDuration.split("(")[0]}
                </span>
                <span className="block text-slate-300 text-[11px]">Nonstop baseline</span>
              </div>
              <div>
                <span className="text-slate-300 block uppercase text-[10px]">Time Shift</span>
                <span className="font-bold text-sm sm:text-base text-sky-300">
                  {route.timeDifference.split("(")[0]}
                </span>
                <span className="block text-slate-300 text-[11px] truncate">{route.timeDifference}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid: Prefilled Enquiry Form + Route Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: Route Guide Details */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DFE6ED] shadow-sm">
              <h2 className="text-xl font-extrabold text-[#152B49] mb-3">
                Route Overview & Flight Dynamics
              </h2>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                {route.overview}
              </p>

              {/* Best Time to Fly */}
              <div className="mt-6 p-4 rounded-xl bg-[#EBF5FB] border border-[#67B7E1]/30">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2463A6] mb-1">
                  <Calendar className="w-4 h-4 text-[#ED6029]" />
                  <span>Seasonal Considerations</span>
                </div>
                <p className="text-xs sm:text-sm text-[#172335]">
                  {route.bestTimeToFly}
                </p>
              </div>
            </div>

            {/* Travel Tips */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DFE6ED] shadow-sm">
              <h3 className="text-lg font-extrabold text-[#152B49] mb-4">
                Booking Tips for {route.originCity} to {route.destinationCity}
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4A5568]">
                {route.travelTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Airport Information */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DFE6ED] shadow-sm">
              <h3 className="text-lg font-extrabold text-[#152B49] mb-4">
                Airport & Terminal Details
              </h3>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#F4F7FA] border border-[#DFE6ED]">
                  <strong className="block text-[#152B49] font-bold mb-1">
                    Departure: {route.originAirport}
                  </strong>
                  <p className="text-slate-600">{route.airportInfo.departure}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4F7FA] border border-[#DFE6ED]">
                  <strong className="block text-[#152B49] font-bold mb-1">
                    Arrival: {route.destinationAirport}
                  </strong>
                  <p className="text-slate-600">{route.airportInfo.arrival}</p>
                </div>
              </div>
            </div>

            {/* Route FAQs */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DFE6ED] shadow-sm">
              <h3 className="text-lg font-extrabold text-[#152B49] mb-4">
                Route FAQs
              </h3>
              <FaqAccordion items={route.faqs} />
            </div>
          </div>

          {/* Right Column: Prefilled Enquiry Form & Phone Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Phone Conversion */}
            <div className="bg-[#152B49] text-white rounded-2xl p-6 shadow-md border border-[#1E3B63]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#67B7E1] mb-2">
                <Clock className="w-4 h-4 text-[#ED6029]" />
                <span>Immediate Booking Assistance</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Prefer to discuss {route.originCity} to {route.destinationCity} flights by phone?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Our reservation desk can check real-time airline seats, cabin upgrades, and routing alternatives right now.
              </p>
              <CallCTA variant="primary" sourceContext={`route_${route.slug}_sidebar`} />
            </div>

            {/* Prefilled Flight Enquiry Form */}
            <FlightEnquiryForm
              initialOrigin={`${route.originCity} (${route.originIata}) - ${route.originCountry}`}
              initialDestination={`${route.destinationCity} (${route.destinationIata}) - ${route.destinationCountry}`}
              initialTripType="round-trip"
              title={`Live Schedules: ${route.originIata} to ${route.destinationIata}`}
              subtitle="Select dates and click Get Details to call our desk for live availability and fares on this route."
            />
          </div>
        </div>

        {/* Related Routes Carousel/Grid */}
        <div className="mt-12 pt-8 border-t border-[#DFE6ED]">
          <h2 className="text-lg font-extrabold text-[#152B49] mb-6">
            Explore Related Flight Routes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedRoutes.map((rel) => (
              <div
                key={rel.slug}
                className="bg-white p-5 rounded-xl border border-[#DFE6ED] hover:border-[#2463A6] transition-colors"
              >
                <span className="text-[10px] font-bold text-[#2463A6] uppercase tracking-wider">
                  {rel.category}
                </span>
                <h3 className="text-base font-bold text-[#152B49] mt-1">
                  {rel.originCity} ({rel.originIata}) &rarr; {rel.destinationCity} ({rel.destinationIata})
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {rel.heroSummary}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <Link
                    href={`/routes/${rel.slug}`}
                    className="text-xs font-bold text-[#2463A6] hover:underline"
                  >
                    View Route Details &rarr;
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
