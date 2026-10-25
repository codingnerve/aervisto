import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Calendar } from "lucide-react";
import { DestinationData } from "@/lib/destinations-data";

interface DestinationCardProps {
  destination: DestinationData;
  className?: string;
}

export function DestinationCard({ destination, className = "" }: DestinationCardProps) {
  return (
    <div
      className={`group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Destination Imagery with overlay */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <Image
            src={destination.imageUrl}
            alt={`Flights to ${destination.name}, ${destination.country}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Region Badge */}
          <div className="absolute top-3 right-3">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-800 shadow-sm">
              {destination.region}
            </span>
          </div>

          {/* Airport Codes Overlay */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <div className="flex items-center gap-1.5 text-xs text-sky-200 font-semibold mb-0.5 drop-shadow">
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination.country}</span>
            </div>
            <h3 className="text-xl font-black text-white drop-shadow-md">
              {destination.name}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5">
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {destination.primaryAirports.map((ap) => (
              <span
                key={ap.code}
                className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-mono font-bold rounded"
                title={ap.name}
              >
                {ap.code}
              </span>
            ))}
          </div>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {destination.heroSummary}
          </p>

          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#ED6029]" />
              <span className="line-clamp-1">{destination.bestTimeToVisit.split(".")[0]}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 flex items-center justify-between gap-3">
        <Link
          href={`/destinations/${destination.slug}`}
          className="text-xs font-bold text-[#2463A6] hover:text-[#152B49] inline-flex items-center gap-1"
        >
          <span>City Guide</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <Link
          href={`/flights?to=${encodeURIComponent(destination.name)}&tripType=round-trip`}
          className="px-3.5 py-2 bg-[#152B49] hover:bg-[#2463A6] text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center shadow-sm"
        >
          <span>Find Flights</span>
        </Link>
      </div>
    </div>
  );
}
