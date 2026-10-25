"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  PhoneCall,
  Clock,
  ShieldCheck,
  CheckCircle2,
  X,
  Phone,
  Plane,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { AirportPicker } from "./AirportPicker";
import { PassengerPicker } from "./PassengerPicker";
import { getPhoneConfig } from "@/lib/phone-config";
import { trackEvent } from "@/lib/analytics";

interface FlightEnquiryFormProps {
  initialOrigin?: string;
  initialDestination?: string;
  initialTripType?: "round-trip" | "one-way" | "multi-city";
  initialNotes?: string;
  title?: string;
  subtitle?: string;
  compactMode?: boolean;
  className?: string;
}

export function FlightEnquiryForm({
  initialOrigin = "",
  initialDestination = "",
  initialTripType = "round-trip",
  title = "Find Live Flight Schedules & Fares",
  subtitle = "Select your route and travel dates, then click Get Details to connect directly with our booking team for real-time fares.",
  compactMode = false,
  className = "",
}: FlightEnquiryFormProps) {
  const phoneConfig = getPhoneConfig();
  const phoneNumber = phoneConfig.defaultPhone;

  // Flight Route State
  const [tripType, setTripType] = useState<"round-trip" | "one-way" | "multi-city">(initialTripType);
  const [origin, setOrigin] = useState(initialOrigin);
  const [destination, setDestination] = useState(initialDestination);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState<"economy" | "premium_economy" | "business" | "first">("economy");

  // Errors & Modal
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Set default dates on client mount to avoid hydration mismatch
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

  const handleGetDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const newErrors: Record<string, string> = {};
    if (!origin.trim()) {
      newErrors.origin = "Please enter or select a departure city or airport";
    }
    if (!destination.trim()) {
      newErrors.destination = "Please enter or select a destination city or airport";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    trackEvent("flight_search_submitted", {
      origin,
      destination,
      tripType,
      cabinClass,
      action: "get_details_click",
    });

    trackEvent("phone_cta_clicked", {
      category: "get_details_modal_trigger",
      origin,
      destination,
    });

    setIsModalOpen(true);
  };

  const cabinLabelMap = {
    economy: "Economy",
    premium_economy: "Premium Economy",
    business: "Business Class",
    first: "First Class",
  };

  return (
    <div
      className={`bg-white rounded-2xl border border-[#DFE6ED] shadow-xl p-5 sm:p-8 text-left transition-all ${className}`}
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-[#152B49] tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <form onSubmit={handleGetDetails} noValidate>
        {/* 1. Trip Type & Cabin Class Selector Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-100">
          {/* Trip Type Tabs */}
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            {[
              { id: "round-trip", label: "Round Trip" },
              { id: "one-way", label: "One Way" },
              { id: "multi-city", label: "Multi-City" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setTripType(tab.id as "round-trip" | "one-way" | "multi-city")}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                  tripType === tab.id
                    ? "bg-[#152B49] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cabin Class */}
          <div className="flex items-center gap-2">
            <label htmlFor="form-cabinClass" className="text-xs font-bold text-[#637083] uppercase">
              Cabin:
            </label>
            <select
              id="form-cabinClass"
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value as "economy" | "premium_economy" | "business" | "first")}
              className="text-xs font-semibold text-[#152B49] bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#2463A6]"
            >
              <option value="economy">Economy</option>
              <option value="premium_economy">Premium Economy</option>
              <option value="business">Business Class</option>
              <option value="first">First Class</option>
            </select>
          </div>
        </div>

        {/* 2. Route Inputs (Origin & Destination) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <AirportPicker
            id="form-origin"
            label="Departure City / Airport"
            placeholder="e.g. New York (JFK), Toronto (YYZ)"
            value={origin}
            onChange={(val) => {
              setOrigin(val);
              if (errors.origin) {
                setErrors((prev) => ({ ...prev, origin: "" }));
              }
            }}
            error={errors.origin}
          />

          <AirportPicker
            id="form-destination"
            label="Destination City / Airport"
            placeholder="e.g. London (LHR), Paris (CDG)"
            value={destination}
            onChange={(val) => {
              setDestination(val);
              if (errors.destination) {
                setErrors((prev) => ({ ...prev, destination: "" }));
              }
            }}
            error={errors.destination}
          />
        </div>

        {/* 3. Dates & Passengers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {/* Departure Date */}
          <div>
            <label
              htmlFor="form-departureDate"
              className="block text-xs font-bold uppercase tracking-wider text-[#172335] mb-1.5"
            >
              Departure Date <span className="text-[#ED6029]">*</span>
            </label>
            <div className="relative">
              <input
                id="form-departureDate"
                type="date"
                min={todayStr}
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-white text-sm font-medium text-[#172335] border border-[#DFE6ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463A6]/20 focus:border-[#2463A6] transition-all"
              />
            </div>
          </div>

          {/* Return Date (only for round-trip) */}
          {tripType === "round-trip" && (
            <div>
              <label
                htmlFor="form-returnDate"
                className="block text-xs font-bold uppercase tracking-wider text-[#172335] mb-1.5"
              >
                Return Date <span className="text-[#ED6029]">*</span>
              </label>
              <div className="relative">
                <input
                  id="form-returnDate"
                  type="date"
                  min={departureDate || todayStr}
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 bg-white text-sm font-medium text-[#172335] border border-[#DFE6ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463A6]/20 focus:border-[#2463A6] transition-all"
                />
              </div>
            </div>
          )}

          {/* Passenger Selector */}
          <div className={tripType !== "round-trip" ? "sm:col-span-2 md:col-span-1" : ""}>
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
        </div>

        {/* Action Button: "Get Details" directly triggers call to us */}
        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#ED6029] hover:bg-[#D84E17] active:bg-[#B83E0E] text-white font-black text-base rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-98 flex items-center justify-center gap-2.5 focus-ring group"
          >
            <PhoneCall className="w-5 h-5 text-white animate-pulse" />
            <span>Get Details</span>
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs text-[#637083]">
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Direct agent quote • No online purchase required</span>
            </div>
            {phoneConfig.defaultPhone && (
              <a
                href={`tel:${phoneConfig.defaultPhone.replace(/[^\d+]/g, "")}`}
                className="font-bold text-[#152B49] hover:text-[#2463A6] inline-flex items-center gap-1"
              >
                <span>Or Call:</span>
                <span className="font-mono text-[#ED6029]">{phoneConfig.defaultPhone}</span>
              </a>
            )}
          </div>
        </div>
      </form>

      {/* POPUP CALL MODAL TRIGGERED BY "GET DETAILS" */}
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

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-300 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Live Flight Booking Desk Active</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black leading-snug">
                Connect With An Agent For Flight Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                Call our direct desk now to verify live flight availability, seat maps, and exclusive unpublished fares.
              </p>

              {/* Selected Route Summary Badge */}
              <div className="mt-4 p-3 bg-white/10 rounded-xl border border-white/15 backdrop-blur-sm">
                <div className="text-[11px] uppercase tracking-wider text-slate-300 font-bold mb-1">
                  Requested Itinerary:
                </div>
                <div className="text-xs sm:text-sm font-black text-white flex items-center gap-1.5 truncate">
                  <span>{origin || "Origin"}</span>
                  <span className="text-sky-300">⇄</span>
                  <span>{destination || "Destination"}</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-1 flex flex-wrap gap-2">
                  <span>{cabinLabelMap[cabinClass]}</span>
                  <span>•</span>
                  <span>{adults} Passenger{adults > 1 ? "s" : ""}</span>
                  {departureDate && (
                    <>
                      <span>•</span>
                      <span>Depart: {departureDate}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Direct Dial Options Body */}
            <div className="p-6 sm:p-7 space-y-5">
              {/* Primary Call Button */}
              <div className="text-center">
                <a
                  href={`tel:${phoneNumber.replace(/[^\d+]/g, "")}`}
                  className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-[#ED6029] hover:bg-[#D84E17] text-white font-black text-xl sm:text-2xl shadow-xl transition-all transform active:scale-95"
                >
                  <Phone className="w-6 h-6 animate-bounce" />
                  <span>Call {phoneNumber}</span>
                </a>

                <p className="text-xs text-slate-500 mt-2.5 font-medium">
                  Toll-Free • Live Agent Answers in &lt; 30 Seconds • No Robot Menus
                </p>
              </div>

              {/* Single Call Card */}
              <a
                href={`tel:${phoneNumber.replace(/[^\d+]/g, "")}`}
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
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Direct phone line with live human agent assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>Support Hours: {phoneConfig.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
