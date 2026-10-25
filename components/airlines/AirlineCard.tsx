import React from "react";
import Link from "next/link";
import { Plane, ArrowRight, MapPin, Shield } from "lucide-react";
import { AirlineData } from "@/lib/airlines-data";

interface AirlineCardProps {
  airline: AirlineData;
  className?: string;
}

export function AirlineCard({ airline, className = "" }: AirlineCardProps) {
  return (
    <div
      className={`group bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between text-left ${className}`}
    >
      <div>
        {/* Top Header with IATA Monogram & Alliance */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            {/* Monogram Badge */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-black text-white text-lg shadow-sm flex-shrink-0"
              style={{ backgroundColor: airline.brandColor }}
            >
              {airline.iata}
            </div>

            <div>
              <div className="text-xs text-slate-500 font-medium">
                {airline.country}
              </div>
              <h3 className="text-lg font-black text-[#152B49] group-hover:text-[#2463A6] transition-colors leading-snug">
                {airline.name}
              </h3>
            </div>
          </div>

          {airline.alliance && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 flex-shrink-0 border border-slate-200">
              {airline.alliance}
            </span>
          )}
        </div>

        {/* Hub Info */}
        <div className="text-xs text-slate-500 mb-2 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#2463A6] flex-shrink-0" />
          <span className="truncate">Hub: {airline.hub}</span>
        </div>

        {/* Short Summary */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {airline.shortDescription}
        </p>

        {/* Popular Destinations Preview */}
        <div className="pt-3 border-t border-slate-100">
          <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5 tracking-wider">
            Popular Connections:
          </div>
          <div className="flex flex-wrap gap-1">
            {airline.popularDestinations.slice(0, 4).map((city) => (
              <span
                key={city}
                className="px-2 py-0.5 bg-slate-50 text-slate-700 text-[11px] font-medium rounded border border-slate-200/60"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <Link
          href={`/airlines/${airline.slug}`}
          className="text-xs font-bold text-[#2463A6] hover:text-[#152B49] inline-flex items-center gap-1"
        >
          <span>Airline Brief &amp; Routes</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <Link
          href={`/flights?notes=${encodeURIComponent(`Preferred airline: ${airline.name}`)}&tripType=round-trip`}
          className="px-3 py-1.5 bg-[#152B49] hover:bg-[#2463A6] text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center shadow-sm"
        >
          <span>Enquire Fares</span>
        </Link>
      </div>
    </div>
  );
}
