"use client";

import React, { useState, useRef, useEffect } from "react";
import { Users, ChevronDown, Plus, Minus } from "lucide-react";

interface PassengerPickerProps {
  adults: number;
  childrenCount: number;
  infants: number;
  onChange: (counts: { adults: number; children: number; infants: number }) => void;
}

export function PassengerPicker({
  adults,
  childrenCount,
  infants,
  onChange,
}: PassengerPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalPassengers = adults + childrenCount + infants;

  const updateCount = (type: "adults" | "children" | "infants", delta: number) => {
    let nextAdults = adults;
    let nextChildren = childrenCount;
    let nextInfants = infants;

    if (type === "adults") {
      nextAdults = Math.max(1, Math.min(9, adults + delta));
    } else if (type === "children") {
      nextChildren = Math.max(0, Math.min(8, childrenCount + delta));
    } else if (type === "infants") {
      nextInfants = Math.max(0, Math.min(4, infants + delta));
    }

    onChange({
      adults: nextAdults,
      children: nextChildren,
      infants: nextInfants,
    });
  };

  const getSummary = () => {
    const parts = [];
    parts.push(`${adults} Adult${adults > 1 ? "s" : ""}`);
    if (childrenCount > 0) parts.push(`${childrenCount} Child${childrenCount > 1 ? "ren" : ""}`);
    if (infants > 0) parts.push(`${infants} Infant${infants > 1 ? "s" : ""}`);
    return parts.join(", ");
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <label className="block text-xs font-bold uppercase tracking-wider text-[#172335] mb-1.5">
        Passengers
      </label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3.5 py-2.5 bg-white text-sm font-medium text-[#172335] border border-[#DFE6ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463A6]/20 focus:border-[#2463A6] transition-all"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 truncate">
          <Users className="w-4 h-4 text-[#2463A6] flex-shrink-0" />
          <span className="truncate">{getSummary()}</span>
        </div>
        <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0 ml-1" />
      </button>

      {isOpen && (
        <div className="absolute right-0 sm:left-0 top-full mt-1.5 w-72 bg-white border border-[#DFE6ED] rounded-xl shadow-2xl p-4 z-50">
          <div className="space-y-4">
            {/* Adults */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-[#172335]">Adults</div>
                <div className="text-xs text-[#637083]">Age 12+</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={adults <= 1}
                  onClick={() => updateCount("adults", -1)}
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Decrease adult passengers"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-bold text-sm w-4 text-center">{adults}</span>
                <button
                  type="button"
                  disabled={adults >= 9}
                  onClick={() => updateCount("adults", 1)}
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Increase adult passengers"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-[#172335]">Children</div>
                <div className="text-xs text-[#637083]">Ages 2 - 11</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={childrenCount <= 0}
                  onClick={() => updateCount("children", -1)}
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Decrease child passengers"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-bold text-sm w-4 text-center">{childrenCount}</span>
                <button
                  type="button"
                  disabled={childrenCount >= 8}
                  onClick={() => updateCount("children", 1)}
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Increase child passengers"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Infants */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-[#172335]">Infants</div>
                <div className="text-xs text-[#637083]">Under 2 years (lap)</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={infants <= 0}
                  onClick={() => updateCount("infants", -1)}
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Decrease infant passengers"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-bold text-sm w-4 text-center">{infants}</span>
                <button
                  type="button"
                  disabled={infants >= 4}
                  onClick={() => updateCount("infants", 1)}
                  className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Increase infant passengers"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-[#637083]">
                Total: {totalPassengers} traveler{totalPassengers > 1 ? "s" : ""}
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 bg-[#152B49] text-white text-xs font-semibold rounded-md hover:bg-[#2463A6] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
