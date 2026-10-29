"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { getPhoneConfig, formatTelHref } from "@/lib/phone-config";
import { trackEvent } from "@/lib/analytics";

interface CallCTAProps {
  variant?: "primary" | "secondary" | "header" | "sticky" | "hero" | "banner";
  market?: string;
  allowMarketSelect?: boolean;
  className?: string;
  sourceContext?: string;
  label?: string;
}

export function CallCTA({
  variant = "primary",
  className = "",
  sourceContext = "cta",
  label,
}: CallCTAProps) {
  const config = getPhoneConfig();
  const phoneNumber = config.defaultPhone;
  const telHref = formatTelHref(phoneNumber);

  const handleClick = () => {
    trackEvent("phone_cta_clicked", {
      phoneNumber,
      category: "call_cta",
      label: sourceContext,
    });
  };

  // Header compact variant
  if (variant === "header") {
    return (
      <a
        href={telHref}
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 sm:gap-2 px-2 py-1.5 min-[380px]:px-2.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#152B49] text-white hover:bg-[#2463A6] active:scale-95 transition-all font-bold text-xs sm:text-sm shadow-sm focus-ring whitespace-nowrap shrink-0 border border-white/10 ${className}`}
        aria-label={`Call Aervisto Booking Support at ${phoneNumber}`}
      >
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
        <Phone className="w-3 h-3 min-[380px]:w-3.5 min-[380px]:h-3.5 text-[#67B7E1] shrink-0" />
        <span className="font-mono tracking-tight font-bold whitespace-nowrap">
          <span className="hidden sm:inline">{phoneNumber}</span>
          <span className="sm:hidden text-[11px] min-[360px]:text-xs">
            <span className="hidden min-[410px]:inline">+1 </span>{phoneNumber.replace(/^\+1\s*/, "")}
          </span>
        </span>
      </a>
    );
  }

  // Hero variant (large, high-conversion)
  if (variant === "hero") {
    return (
      <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${className}`}>
        <a
          href={telHref}
          onClick={handleClick}
          className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#ED6029] hover:bg-[#D84E17] text-white font-black text-lg shadow-lg hover:shadow-xl transition-all transform active:scale-95 focus-ring"
          aria-label={`Call Booking Specialists: ${phoneNumber}`}
        >
          <Phone className="w-5 h-5 text-white" />
          <span>Call {phoneNumber}</span>
        </a>
      </div>
    );
  }

  // Sticky / mobile bar variant
  if (variant === "sticky") {
    return (
      <a
        href={telHref}
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-[#ED6029] active:bg-[#D84E17] text-white font-black text-sm shadow-md transition-colors focus-ring ${className}`}
        aria-label={`Call Agent: ${phoneNumber}`}
      >
        <Phone className="w-4 h-4" />
        <span>Call Booking Desk ({phoneNumber})</span>
      </a>
    );
  }

  // Banner variant
  if (variant === "banner") {
    return (
      <div className={`p-4 rounded-2xl bg-[#152B49] text-white flex flex-col md:flex-row items-center justify-between gap-4 ${className}`}>
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#67B7E1]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Booking Specialists Available Now ({config.hours})
          </div>
          <h4 className="text-lg font-bold mt-1 text-white">
            Need immediate flight options or have a complex route?
          </h4>
          <p className="text-xs text-slate-300 mt-0.5">
            Skip automated booking bots. Speak directly with a dedicated human agent.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <a
            href={telHref}
            onClick={handleClick}
            className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#ED6029] hover:bg-[#D84E17] text-white font-black text-base transition-colors shadow focus-ring"
          >
            <Phone className="w-4 h-4" />
            <span>Call {phoneNumber}</span>
          </a>
        </div>
      </div>
    );
  }

  // Standard Primary variant
  return (
    <a
      href={telHref}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#152B49] hover:bg-[#2463A6] text-white font-bold text-sm sm:text-base transition-colors shadow-sm focus-ring ${className}`}
      aria-label={label || `Call Booking Agent at ${phoneNumber}`}
    >
      <Phone className="w-4 h-4 text-[#67B7E1]" />
      <span>{label || `Call ${phoneNumber}`}</span>
    </a>
  );
}
