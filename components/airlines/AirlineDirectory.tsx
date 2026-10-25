"use client";

import React, { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { AirlineCard } from "./AirlineCard";
import { AIRLINES_DATA, AirlineRegion, AIRLINE_REGION_LABELS } from "@/lib/airlines-data";

export function AirlineDirectory() {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAirlines = useMemo(() => {
    return AIRLINES_DATA.filter((airline) => {
      const matchesRegion =
        selectedRegion === "all" || airline.region === selectedRegion;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        airline.name.toLowerCase().includes(q) ||
        airline.iata.toLowerCase().includes(q) ||
        airline.country.toLowerCase().includes(q) ||
        airline.hub.toLowerCase().includes(q) ||
        airline.popularDestinations.some((d) => d.toLowerCase().includes(q));

      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, searchQuery]);

  const regionTabs = [
    { id: "all", label: "All Airlines" },
    { id: "united-states", label: "United States" },
    { id: "united-kingdom", label: "United Kingdom" },
    { id: "canada", label: "Canada" },
    { id: "europe", label: "Europe" },
    { id: "middle-east", label: "Middle East" },
    { id: "asia-pacific", label: "Asia-Pacific" },
  ];

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search airline by name, IATA code, or hub..."
            className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2463A6] focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {regionTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedRegion(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedRegion === tab.id
                  ? "bg-[#152B49] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Airline Cards */}
      {filteredAirlines.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAirlines.map((airline) => (
            <AirlineCard key={airline.slug} airline={airline} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
          <p className="text-base font-bold text-[#152B49]">
            No airlines found matching &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Our booking agents can still evaluate flight options on hundreds of unlisted global airlines.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedRegion("all");
            }}
            className="mt-4 px-4 py-2 bg-[#2463A6] text-white text-xs font-bold rounded-lg hover:bg-[#152B49] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
