"use client";

import React, { useState, useEffect } from "react";
import {
  Plane,
  Search,
  Phone,
  Clock,
  ShieldCheck,
  X,
  Loader2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { AirportPicker } from "@/components/flight-enquiry/AirportPicker";
import { PassengerPicker } from "@/components/flight-enquiry/PassengerPicker";
import { getPhoneConfig, formatTelHref } from "@/lib/phone-config";
import { trackEvent } from "@/lib/analytics";

export function HeroFlightSearch() {
  const phoneConfig = getPhoneConfig();
  const phoneNumber = phoneConfig.defaultPhone;
  const telHref = formatTelHref(phoneNumber);

  // Search State
  const [tripType, setTripType] = useState<"round-trip" | "one-way" | "multi-city">("round-trip");
  const [origin, setOrigin] = useState("New York (JFK) - United States");
  const [destination, setDestination] = useState("London (LHR) - United Kingdom");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState<"economy" | "premium_economy" | "business" | "first">("economy");

  // Search Progress & Call Modal
  const [isSearching, setIsSearching] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Date defaults on mount to prevent SSR hydration mismatch
  const [todayStr, setTodayStr] = useState("");
  useEffect(() => {
    const today = new Date();
    const dStr = today.toISOString().split("T")[0];
    setTodayStr(dStr);

    const defaultDep = new Date();
    defaultDep.setDate(defaultDep.getDate() + 14);
    setDepartureDate(defaultDep.toISOString().split("T")[0]);

    const defaultRet = new Date();
    defaultRet.setDate(defaultRet.getDate() + 24);
    setReturnDate(defaultRet.toISOString().split("T")[0]);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    trackEvent("flight_search_submitted", {
      origin,
      destination,
      tripType,
      cabinClass,
    });

    // Short simulated check then trigger Call modal
    setTimeout(() => {
      setIsSearching(false);
      setIsModalOpen(true);
      trackEvent("phone_cta_clicked", {
        category: "hero_search_modal_trigger",
        origin,
        destination,
      });
    }, 800);
  };

  return (
    <div className="w-full">
      {/* Search Container (Expedia / Modern Travel Style) */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/80 p-4 sm:p-6 text-left">
        {/* Top Filter Bar: Tabs & Cabin */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
            {(["round-trip", "one-way", "multi-city"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTripType(t)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all capitalize ${
                  tripType === t
                    ? "bg-[#152B49] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {t.replace("-", " ")}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <span>Cabin:</span>
            <select
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value as any)}
              className="bg-slate-100 text-[#152B49] rounded-lg px-2.5 py-1 text-xs font-bold border-none focus:ring-2 focus:ring-[#2463A6] outline-none"
            >
              <option value="economy">Economy</option>
              <option value="premium_economy">Premium Economy</option>
              <option value="business">Business Class</option>
              <option value="first">First Class</option>
            </select>
          </div>
        </div>

        {/* Inputs Grid */}
        <form onSubmit={handleSearchSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
            {/* Origin */}
            <div className="md:col-span-3">
              <AirportPicker
                id="hero-origin"
                label="Flying From"
                placeholder="Origin City / Airport"
                value={origin}
                onChange={setOrigin}
              />
            </div>

            {/* Destination */}
            <div className="md:col-span-3">
              <AirportPicker
                id="hero-dest"
                label="Flying To"
                placeholder="Destination City / Airport"
                value={destination}
                onChange={setDestination}
              />
            </div>

            {/* Departure Date */}
            <div className="md:col-span-2">
              <label
                htmlFor="hero-departure"
                className="block text-xs font-bold uppercase tracking-wider text-[#172335] mb-1.5"
              >
                Depart Date
              </label>
              <input
                id="hero-departure"
                type="date"
                min={todayStr}
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
                className="w-full px-3 py-2.5 bg-white text-xs sm:text-sm font-medium text-[#172335] border border-[#DFE6ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463A6]/20 focus:border-[#2463A6]"
              />
            </div>

            {/* Return Date (if round-trip) or Passenger Selector */}
            {tripType === "round-trip" ? (
              <div className="md:col-span-2">
                <label
                  htmlFor="hero-return"
                  className="block text-xs font-bold uppercase tracking-wider text-[#172335] mb-1.5"
                >
                  Return Date
                </label>
                <input
                  id="hero-return"
                  type="date"
                  min={departureDate || todayStr}
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 bg-white text-xs sm:text-sm font-medium text-[#172335] border border-[#DFE6ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463A6]/20 focus:border-[#2463A6]"
                />
              </div>
            ) : (
              <div className="md:col-span-2">
                <PassengerPicker
                  adults={adults}
                  childrenCount={childrenCount}
                  infants={infants}
                  onChange={(counts) => {
                    setAdults(counts.adults);
                    setChildrenCount(counts.children);
                    setInfants(counts.infants);
                  }}
                />
              </div>
            )}

            {/* Search Action Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSearching}
                className="w-full py-3 px-4 bg-[#ED6029] hover:bg-[#D84E17] active:bg-[#B83E0E] text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                {isSearching ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Searching...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Search Flights</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Passenger Selector Bar (Shown below for Round-trip to keep inputs clean) */}
          {tripType === "round-trip" && (
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <div className="w-full sm:w-60">
                <PassengerPicker
                  adults={adults}
                  childrenCount={childrenCount}
                  infants={infants}
                  onChange={(counts) => {
                    setAdults(counts.adults);
                    setChildrenCount(counts.children);
                    setInfants(counts.infants);
                  }}
                />
              </div>
              <div className="flex items-center gap-4 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Unpublished Consolidator Rates</span>
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#2463A6]" />
                  <span>Direct Agent Support</span>
                </span>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* POPUP CALL MODAL TRIGGERED BY SEARCH (HIGH-CONVERSION, DIRECT CALL OPTIONS) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-left my-auto animate-in zoom-in-95 duration-200">
            {/* Header Banner */}
            <div className="bg-[#152B49] text-white p-6 sm:p-7 relative">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Special Agent Fares Available</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Call Now to Unlock Private Airline Fares
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                Airlines restrict these discounted consolidator fares from being issued directly online. Call a live agent now to confirm availability and lock in your price.
              </p>

              {/* Searched Route Card */}
              <div className="mt-4 p-3 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between text-xs text-white">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Requested Route</span>
                  <span className="font-bold text-sm truncate max-w-[200px] sm:max-w-xs block">
                    {origin.split("-")[0].trim()} &rarr; {destination.split("-")[0].trim()}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Travel Dates</span>
                  <span className="font-semibold text-slate-200 text-xs">
                    {departureDate} {returnDate ? `– ${returnDate}` : ""}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Body: Single Direct Call Action */}
            <div className="p-6 sm:p-7 space-y-5">
              {/* Primary Call Button */}
              <div className="text-center">
                <a
                  href={telHref}
                  onClick={() =>
                    trackEvent("phone_cta_clicked", {
                      category: "search_popup_call_btn",
                      phoneNumber,
                    })
                  }
                  className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-[#ED6029] hover:bg-[#D84E17] text-white font-black text-xl sm:text-2xl shadow-xl transition-all transform active:scale-95"
                >
                  <Phone className="w-6 h-6 animate-bounce" />
                  <span>Call {phoneNumber}</span>
                </a>

                <p className="text-xs text-slate-500 mt-2.5 font-medium">
                  Toll-Free • Live Agent Answers in &lt; 30 Seconds • No Robot Menus
                </p>
              </div>

              {/* Direct Call Card */}
              <a
                href={telHref}
                onClick={() =>
                  trackEvent("phone_cta_clicked", {
                    category: "search_popup_direct_card",
                    phoneNumber,
                  })
                }
                className="group flex items-center justify-between p-4 rounded-2xl border-2 border-slate-200 hover:border-[#ED6029] hover:bg-orange-50/40 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#152B49] text-white flex items-center justify-center font-bold">
                    <Phone className="w-5 h-5 text-[#67B7E1]" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                      Direct Flight Booking Line
                    </div>
                    <div className="text-base sm:text-lg font-black text-[#152B49] font-mono group-hover:text-[#ED6029] transition-colors">
                      {phoneNumber}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#ED6029] text-white font-extrabold text-xs shadow-md group-hover:bg-[#D84E17] transition-all flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </div>
              </a>

              {/* Reassurance Footer */}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Direct phone line with live human agent assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span>Support Hours: {phoneConfig.hours}</span>
                </div>
              </div>

              {/* Close/Modify Search */}
              <div className="pt-1 text-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors"
                >
                  Modify flight details or search another route
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
