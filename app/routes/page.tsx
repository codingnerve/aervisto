import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RouteCard } from "@/components/ui/RouteCard";
import { CallCTA } from "@/components/ui/CallCTA";
import { POPULAR_ROUTES } from "@/lib/routes-data";
import { Compass, Plane, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Popular Flight Routes | International Route Directory",
  description:
    "Explore popular international and North American flight routes. Review flight durations, airport information, and submit flight enquiries to our booking specialists.",
  alternates: {
    canonical: "/routes",
  },
};

export default function RoutesDirectoryPage() {
  const categories = [
    { id: "All", label: "All Routes" },
    { id: "Transatlantic", label: "Transatlantic (US/UK/Europe)" },
    { id: "North America", label: "North America (US & Canada)" },
    { id: "Transpacific", label: "Transpacific & Asia" },
  ];

  return (
    <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Popular Routes" }]} className="mb-6" />

        {/* Directory Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6] block mb-1">
            Flight Routes
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#152B49] tracking-tight">
            Popular International Flight Routes
          </h1>
          <p className="text-sm sm:text-base text-[#637083] mt-2 leading-relaxed">
            Browse high-demand routes connecting the United States, United Kingdom, Canada, and global destinations. Select any route to view airport details, travel considerations, and request an agent-assisted flight quote.
          </p>
        </div>

        {/* Top Call Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-white border border-[#DFE6ED] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[#152B49]">
              Looking for a route not listed in our directory?
            </h3>
            <p className="text-xs text-[#637083] mt-0.5">
              Our reservation agents coordinate flights to thousands of destinations worldwide.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/flights"
              className="px-4 py-2 bg-[#152B49] text-white text-xs font-bold rounded-lg hover:bg-[#2463A6] transition-colors"
            >
              Custom Enquiry
            </Link>
            <CallCTA variant="primary" sourceContext="routes_directory_top" />
          </div>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_ROUTES.map((route) => (
            <RouteCard key={route.slug} route={route} />
          ))}
        </div>

        {/* Information Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-[#DFE6ED] shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#EBF5FB] text-[#2463A6] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#2463A6]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#152B49]">
                Authentic Scheduled Flights & Human Guidance
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] mt-1.5 leading-relaxed">
                Flight times, frequencies, and operating carriers listed across our route guides are based on typical published airline schedules. Because schedules, terminal assignments, and fare classes vary by airline and season, our booking agents verify live options directly with carriers when you submit your enquiry.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold text-[#2463A6]">
                <Link href="/flights" className="hover:underline flex items-center gap-1">
                  <span>Start a general enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/destinations" className="hover:underline flex items-center gap-1">
                  <span>Explore featured destinations</span>
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
