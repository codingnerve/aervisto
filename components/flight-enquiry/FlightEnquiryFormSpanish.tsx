"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  X,
  Phone,
  Plane,
} from "lucide-react";
import { AirportPicker } from "./AirportPicker";
import { PassengerPickerSpanish } from "./PassengerPickerSpanish";
import { getPhoneConfig, formatTelHref } from "@/lib/phone-config";
import { trackEvent } from "@/lib/analytics";

interface FlightEnquiryFormSpanishProps {
  initialOrigin?: string;
  initialDestination?: string;
  initialTripType?: "round-trip" | "one-way" | "multi-city";
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FlightEnquiryFormSpanish({
  initialOrigin = "",
  initialDestination = "",
  initialTripType = "round-trip",
  title = "Consultar Horarios y Tarifas de Vuelos",
  subtitle = "Seleccione su ruta y fechas estimadas, luego haga clic en Consultar para comunicarse directamente con nuestro equipo de reservas en vivo.",
  className = "",
}: FlightEnquiryFormSpanishProps) {
  const phoneConfig = getPhoneConfig();
  const phoneNumber = phoneConfig.defaultPhone;
  const telHref = formatTelHref(phoneNumber);

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

  // Default dates
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
      newErrors.origin = "Por favor ingrese o seleccione una ciudad o aeropuerto de salida";
    }
    if (!destination.trim()) {
      newErrors.destination = "Por favor ingrese o seleccione una ciudad o aeropuerto de llegada";
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
      lang: "es",
      action: "get_details_click_es",
    });

    setIsModalOpen(true);
  };

  const tripTypeOptions = [
    { id: "round-trip", label: "Ida y Vuelta" },
    { id: "one-way", label: "Solo Ida" },
    { id: "multi-city", label: "Múltiples Destinos" },
  ];

  const cabinClassOptions = [
    { id: "economy", label: "Turista" },
    { id: "premium_economy", label: "Turista Premium" },
    { id: "business", label: "Ejecutiva" },
    { id: "first", label: "Primera Clase" },
  ];

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
        {/* Trip Type & Cabin Class */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-100">
          <div className="inline-flex rounded-lg bg-slate-100 p-1">
            {tripTypeOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setTripType(opt.id as any)}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                  tripType === opt.id
                    ? "bg-[#152B49] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Cabina:</span>
            <select
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value as any)}
              className="text-xs font-bold text-[#152B49] bg-slate-100 rounded-lg px-2.5 py-1.5 border-none focus:ring-2 focus:ring-[#2463A6] outline-none"
            >
              {cabinClassOptions.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Airport Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <AirportPicker
            id="enquiry-origin-es"
            label="Ciudad de Salida"
            placeholder="Ej. Madrid, JFK, Ciudad de México"
            value={origin}
            onChange={setOrigin}
            error={errors.origin}
          />
          <AirportPicker
            id="enquiry-destination-es"
            label="Ciudad de Llegada"
            placeholder="Ej. Cancún, Londres, París"
            value={destination}
            onChange={setDestination}
            error={errors.destination}
          />
        </div>

        {/* Dates & Passengers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label
              htmlFor="enquiry-dep-date-es"
              className="block text-xs font-bold uppercase tracking-wider text-[#172335] mb-1.5"
            >
              Fecha de Salida
            </label>
            <div className="relative">
              <input
                id="enquiry-dep-date-es"
                type="date"
                min={todayStr}
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
                className="w-full px-3 py-2.5 bg-white text-xs sm:text-sm font-medium text-[#172335] border border-[#DFE6ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463A6]/20 focus:border-[#2463A6]"
              />
            </div>
          </div>

          {tripType === "round-trip" ? (
            <div>
              <label
                htmlFor="enquiry-ret-date-es"
                className="block text-xs font-bold uppercase tracking-wider text-[#172335] mb-1.5"
              >
                Fecha de Regreso
              </label>
              <div className="relative">
                <input
                  id="enquiry-ret-date-es"
                  type="date"
                  min={departureDate || todayStr}
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 bg-white text-xs sm:text-sm font-medium text-[#172335] border border-[#DFE6ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2463A6]/20 focus:border-[#2463A6]"
                />
              </div>
            </div>
          ) : (
            <div className="flex items-end pb-2 text-xs text-slate-500 font-medium">
              <span>Viaje directo de un solo tramo</span>
            </div>
          )}

          <div>
            <PassengerPickerSpanish
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

        {/* Action Button */}
        <div>
          <button
            type="submit"
            className="w-full py-4 px-6 bg-[#ED6029] hover:bg-[#D84E17] text-white font-extrabold text-base sm:text-lg rounded-xl shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 animate-bounce" />
            <span>Consultar Disponibilidad por Teléfono</span>
          </button>
        </div>

        {/* Trust Points */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Sin cargos ocultos ni sorpresas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Atención telefónica directa en español</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#2463A6]" />
            <span>Asistencia inmediata</span>
          </div>
        </div>
      </form>

      {/* POPUP CALL MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-left my-auto animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="bg-[#152B49] text-white p-6 sm:p-7 relative">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Especialistas Disponibles Ahora</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                Hable Directamente con un Especialista
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                Nuestros agentes de reservas verifican tarifas en tiempo real en los sistemas globales de aerolíneas. Llame ahora para cotizar su vuelo.
              </p>

              <div className="mt-4 p-3 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between text-xs text-white">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Ruta Elegida</span>
                  <span className="font-bold text-sm truncate max-w-[200px] sm:max-w-xs block">
                    {origin.split("-")[0].trim()} &rarr; {destination.split("-")[0].trim()}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Fechas</span>
                  <span className="font-semibold text-slate-200 text-xs">
                    {departureDate} {returnDate ? `– ${returnDate}` : ""}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 space-y-5">
              <div className="text-center">
                <a
                  href={telHref}
                  className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-[#ED6029] hover:bg-[#D84E17] text-white font-black text-xl sm:text-2xl shadow-xl transition-all transform active:scale-95"
                >
                  <Phone className="w-6 h-6 animate-bounce" />
                  <span>Llamar al {phoneNumber}</span>
                </a>

                <p className="text-xs text-slate-500 mt-2.5 font-medium">
                  Línea Gratuita • Atención en Español • Sin Esperas
                </p>
              </div>

              <a
                href={telHref}
                className="group flex items-center justify-between p-4 rounded-2xl border-2 border-slate-200 hover:border-[#ED6029] hover:bg-orange-50/40 transition-all shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#152B49] text-white flex items-center justify-center font-bold">
                    <Phone className="w-5 h-5 text-[#67B7E1]" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                      Mesa de Reservas
                    </div>
                    <div className="text-base sm:text-lg font-black text-[#152B49] font-mono group-hover:text-[#ED6029] transition-colors">
                      {phoneNumber}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#ED6029] text-white font-extrabold text-xs shadow-md group-hover:bg-[#D84E17] transition-all flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Llamar</span>
                </div>
              </a>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Asistencia personalizada para reservas complejas y familiares</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span>Horario de atención: {phoneConfig.hours}</span>
                </div>
              </div>

              <div className="pt-1 text-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-700 transition-colors"
                >
                  Volver al formulario
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
