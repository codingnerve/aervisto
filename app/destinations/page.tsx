import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { CallCTA } from "@/components/ui/CallCTA";
import { POPULAR_DESTINATIONS } from "@/lib/destinations-data";
import { MapPin, Globe, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Destinations Directory | International Flight Travel Guides",
  description:
    "Discover international flight destinations across Europe, North America, Asia, and the Middle East. Airport information, flight durations, and agent-assisted booking.",
  alternates: {
    canonical: "/destinations",
  },
};

export default function DestinationsDirectoryPage() {
  return (
    <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Destinations" }]} className="mb-6" />

        {/* Directory Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6] block mb-1">
            Worldwide Network
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#152B49] tracking-tight">
            International Flight Destinations
          </h1>
          <p className="text-sm sm:text-base text-[#637083] mt-2 leading-relaxed">
            Explore major global destinations served by scheduled international airlines. Our booking specialists assist with route optimization, alliance connections, and cabin classes from departure cities across the US, UK, and Canada.
          </p>
        </div>

        {/* Top Call Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-white border border-[#DFE6ED] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[#152B49]">
              Need flights to an unlisted destination or regional airport?
            </h3>
            <p className="text-xs text-[#637083] mt-0.5">
              We assist with connections to hundreds of international and regional airports globally.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/flights"
              className="px-4 py-2 bg-[#152B49] text-white text-xs font-bold rounded-lg hover:bg-[#2463A6] transition-colors"
            >
              Custom Enquiry
            </Link>
            <CallCTA variant="primary" sourceContext="destinations_directory_top" />
          </div>
        </div>

        {/* Destinations Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_DESTINATIONS.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>

        {/* Informative Guidance Block */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-[#DFE6ED] shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#EBF5FB] text-[#2463A6] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#2463A6]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#152B49]">
                Tailored Routing & Airport Guidance
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] mt-1.5 leading-relaxed">
                Many metropolitan areas are served by multiple international airports (such as London Heathrow, Gatwick, and London City; or New York JFK, Newark, and LaGuardia). Our booking specialists help you determine which arrival airport best fits your ground transportation and schedule preferences.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold text-[#2463A6]">
                <Link href="/flights" className="hover:underline flex items-center gap-1">
                  <span>Start flight enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/routes" className="hover:underline flex items-center gap-1">
                  <span>View popular routes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
