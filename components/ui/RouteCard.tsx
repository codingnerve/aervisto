import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plane, ArrowRight, Clock } from "lucide-react";
import { RouteData } from "@/lib/routes-data";

interface RouteCardProps {
  route: RouteData;
  className?: string;
}

export function RouteCard({ route, className = "" }: RouteCardProps) {
  return (
    <div
      className={`group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Route Imagery */}
        <div className="relative h-40 w-full overflow-hidden bg-slate-100">
          <Image
            src={route.imageUrl}
            alt={`${route.originCity} to ${route.destinationCity} flights`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white border border-white/20">
              {route.category}
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-slate-800 flex items-center gap-1 shadow-sm">
              <Clock className="w-3 h-3 text-[#2463A6]" />
              <span>{route.typicalDuration.split("(")[0].trim()}</span>
            </span>
          </div>

          {/* IATA Flight Banner */}
          <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
            <div className="text-left">
              <span className="text-2xl font-black font-mono tracking-tight text-white drop-shadow">
                {route.originIata}
              </span>
              <span className="block text-xs text-slate-200 font-medium">
                {route.originCity}
              </span>
            </div>

            <div className="flex-1 px-3 flex flex-col items-center">
              <div className="w-full flex items-center justify-center gap-1">
                <span className="h-0.5 w-full bg-white/40" />
                <Plane className="w-4 h-4 text-[#ED6029] transform rotate-90 flex-shrink-0" />
                <span className="h-0.5 w-full bg-white/40" />
              </div>
              <span className="text-[10px] text-slate-300 mt-0.5">
                {route.distanceMiles} mi
              </span>
            </div>

            <div className="text-right">
              <span className="text-2xl font-black font-mono tracking-tight text-white drop-shadow">
                {route.destinationIata}
              </span>
              <span className="block text-xs text-slate-200 font-medium">
                {route.destinationCity}
              </span>
            </div>
          </div>
        </div>

        {/* Text Details */}
        <div className="p-4 sm:p-5">
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {route.heroSummary}
          </p>

          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Time Shift: <strong className="text-slate-700">{route.timeDifference.split("(")[0]}</strong></span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 flex items-center justify-between gap-3">
        <Link
          href={`/routes/${route.slug}`}
          className="text-xs font-bold text-[#2463A6] hover:text-[#152B49] inline-flex items-center gap-1"
        >
          <span>Route Guide</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <Link
          href={`/flights?from=${route.originIata}&to=${route.destinationIata}&tripType=round-trip`}
          className="px-3.5 py-2 bg-[#152B49] hover:bg-[#2463A6] text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center shadow-sm"
        >
          <span>Check Availability</span>
        </Link>
      </div>
    </div>
  );
}
