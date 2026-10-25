"use client";

import React, { useState, useRef, useEffect } from "react";
import { Plane, Search, X } from "lucide-react";
import { Airport, searchAirports } from "@/lib/airports-data";

interface AirportPickerProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
}

export function AirportPicker({
  label,
  id,
  value,
  onChange,
  placeholder = "City or Airport (e.g. London, JFK)",
  error,
  required = true,
}: AirportPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<Airport[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    setResults(searchAirports(query));
  }, [query]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (airport: Airport) => {
    const formatted = `${airport.city} (${airport.iata}) - ${airport.country}`;
    setQuery(formatted);
    onChange(formatted);
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery("");
    onChange("");
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <label
        htmlFor={id}
        className="block text-xs font-bold uppercase tracking-wider text-[#172335] mb-1.5"
      >
        {label} {required && <span className="text-[#ED6029]">*</span>}
      </label>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2463A6]">
          <Plane className="w-4 h-4" />
        </div>

        <input
          id={id}
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange(e.target.value);
            setIsOpen(true);
          }}
          placeholder={placeholder}
          autoComplete="off"
          className={`w-full pl-10 pr-9 py-2.5 bg-white text-sm font-medium text-[#172335] placeholder:text-slate-400 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
            error
              ? "border-rose-400 focus:ring-rose-200 focus:border-rose-500 bg-rose-50/20"
              : "border-[#DFE6ED] focus:ring-[#2463A6]/20 focus:border-[#2463A6]"
          }`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
            aria-label="Clear field"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {error && (
        <p id={`${id}-error`} className="text-xs text-rose-600 mt-1 font-medium">
          {error}
        </p>
      )}

      {/* Autocomplete Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-[#DFE6ED] rounded-xl shadow-2xl z-50 max-h-64 overflow-y-auto divide-y divide-slate-100">
          <div className="px-3 py-1.5 bg-slate-50 text-[11px] font-semibold text-[#637083] uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-3 h-3 text-[#2463A6]" />
            <span>Suggested Airports & Hubs</span>
          </div>

          {results.map((airport) => (
            <button
              key={airport.iata}
              type="button"
              onClick={() => handleSelect(airport)}
              className="w-full text-left px-3.5 py-2.5 hover:bg-[#EBF5FB] transition-colors flex items-center justify-between group"
            >
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#172335] group-hover:text-[#2463A6]">
                  {airport.city}, {airport.country}
                </span>
                <span className="text-xs text-[#637083] line-clamp-1">
                  {airport.name}
                </span>
              </div>
              <span className="px-2 py-1 bg-slate-100 group-hover:bg-[#2463A6] group-hover:text-white text-xs font-mono font-bold rounded text-[#152B49] transition-colors">
                {airport.iata}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
