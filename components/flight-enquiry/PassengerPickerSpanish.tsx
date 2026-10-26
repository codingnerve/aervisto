"use client";

import React, { useState, useRef, useEffect } from "react";
import { Users, ChevronDown, Plus, Minus } from "lucide-react";

interface PassengerPickerSpanishProps {
  adults: number;
  childrenCount: number;
  infants: number;
  onChange: (counts: { adults: number; children: number; infants: number }) => void;
}

export function PassengerPickerSpanish({
  adults,
  childrenCount,
  infants,
  onChange,
}: PassengerPickerSpanishProps) {
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
    parts.push(`${adults} Adulto${adults > 1 ? "s" : ""}`);
    if (childrenCount > 0) parts.push(`${childrenCount} Niño${childrenCount > 1 ? "s" : ""}`);
    if (infants > 0) parts.push(`${infants} Bebé${infants > 1 ? "s" : ""}`);
    return parts.join(", ");
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <label className="block text-xs font-bold uppercase tracking-wider text-[#172335] mb-1.5">
        Pasajeros
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2.5 bg-white text-left text-xs sm:text-sm font-medium text-[#172335] border border-[#DFE6ED] rounded-lg hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2463A6]/20 focus:border-[#2463A6] flex items-center justify-between"
      >
        <span className="flex items-center gap-2 truncate">
          <Users className="w-4 h-4 text-slate-500 flex-shrink-0" />
          <span className="truncate">{getSummary()}</span>
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 top-full mt-1.5 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-4 space-y-4 right-0 sm:left-0 sm:right-auto animate-in fade-in duration-150">
          {/* Adults */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-[#172335]">Adultos</div>
              <div className="text-[11px] text-slate-500">12 años o más</div>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => updateCount("adults", -1)}
                disabled={adults <= 1}
                className="w-7 h-7 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-5 text-center font-bold text-sm text-[#172335]">
                {adults}
              </span>
              <button
                type="button"
                onClick={() => updateCount("adults", 1)}
                disabled={totalPassengers >= 9}
                className="w-7 h-7 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-[#172335]">Niños</div>
              <div className="text-[11px] text-slate-500">2 a 11 años</div>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => updateCount("children", -1)}
                disabled={childrenCount <= 0}
                className="w-7 h-7 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-5 text-center font-bold text-sm text-[#172335]">
                {childrenCount}
              </span>
              <button
                type="button"
                onClick={() => updateCount("children", 1)}
                disabled={totalPassengers >= 9}
                className="w-7 h-7 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Infants */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-[#172335]">Bebés</div>
              <div className="text-[11px] text-slate-500">Menores de 2 años (en regazo)</div>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => updateCount("infants", -1)}
                disabled={infants <= 0}
                className="w-7 h-7 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-5 text-center font-bold text-sm text-[#172335]">
                {infants}
              </span>
              <button
                type="button"
                onClick={() => updateCount("infants", 1)}
                disabled={infants >= adults}
                className="w-7 h-7 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-3.5 py-1.5 bg-[#152B49] text-white rounded-lg text-xs font-bold hover:bg-[#2463A6] transition-colors"
            >
              Listo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
