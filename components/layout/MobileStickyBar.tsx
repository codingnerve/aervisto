"use client";

import React from "react";
import Link from "next/link";
import { Phone, Send } from "lucide-react";
import { getMarketPhone } from "@/lib/phone-config";
import { trackEvent } from "@/lib/analytics";

export function MobileStickyBar() {
  const phone = getMarketPhone("US");

  const handleCallClick = () => {
    trackEvent("phone_cta_clicked", {
      category: "mobile_sticky_bar",
      phoneNumber: phone.displayNumber || "unknown",
      market: phone.market,
    });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#DFE6ED] px-4 py-2.5 shadow-2xl">
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        {phone.telHref ? (
          <a
            href={phone.telHref}
            onClick={handleCallClick}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 bg-[#ED6029] active:bg-[#D84E17] text-white font-bold text-xs rounded-xl shadow focus:outline-none"
            aria-label={`Call Booking Team: ${phone.displayNumber}`}
          >
            <Phone className="w-4 h-4 flex-shrink-0 animate-bounce" />
            <span className="truncate">Call {phone.displayNumber}</span>
          </a>
        ) : null}

        <Link
          href="/flights"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 bg-[#152B49] active:bg-[#2463A6] text-white font-bold text-xs rounded-xl shadow focus:outline-none text-center"
        >
          <Send className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">Flight Enquiry</span>
        </Link>
      </div>
    </div>
  );
}
