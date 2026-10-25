"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Shield, Check, X } from "lucide-react";
import { getStoredConsent, setStoredConsent } from "@/lib/analytics";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if user has not yet decided
    const current = getStoredConsent();
    if (current === "pending") {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setStoredConsent("granted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setStoredConsent("denied");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent"
      className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-white border border-[#DFE6ED] rounded-2xl shadow-2xl p-5 text-left animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-[#EBF5FB] text-[#2463A6] flex-shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-[#152B49]">
            Cookie & Privacy Preferences
          </h3>
          <p className="text-xs text-[#637083] mt-1 leading-relaxed">
            We use essential cookies to operate our enquiry services and privacy-friendly analytics to understand how visitors use our flight reservation tools. You can customize your preferences anytime.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Link
              href="/cookie-policy"
              className="text-[11px] font-semibold text-[#2463A6] hover:underline"
            >
              Read Cookie Policy
            </Link>
            <span className="text-slate-300">•</span>
            <Link
              href="/privacy-policy"
              className="text-[11px] font-semibold text-[#2463A6] hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={handleDecline}
          className="px-3 py-1.5 text-xs font-semibold text-[#637083] hover:text-[#172335] rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
        >
          Decline Non-Essential
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="px-4 py-1.5 text-xs font-bold text-white bg-[#152B49] hover:bg-[#2463A6] rounded-lg shadow-sm transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
