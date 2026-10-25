"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowLeft, Clock, ShieldCheck, Mail } from "lucide-react";
import { CallCTA } from "@/components/ui/CallCTA";

interface ConfirmationCardProps {
  referenceId: string;
  fullName: string;
  contactMethod: string;
  onReset?: () => void;
}

export function ConfirmationCard({
  referenceId,
  fullName,
  contactMethod,
  onReset,
}: ConfirmationCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#DFE6ED] shadow-xl p-6 sm:p-10 max-w-2xl mx-auto text-left">
      <div className="flex items-center gap-3 text-emerald-600 mb-4">
        <CheckCircle2 className="w-10 h-10 flex-shrink-0" />
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            Enquiry Successfully Submitted
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#152B49] mt-1">
            We’ve Received Your Flight Request
          </h2>
        </div>
      </div>

      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
        Thank you, <strong className="text-[#172335]">{fullName}</strong>. Your enquiry has been assigned to our international reservation desk. An aviation booking specialist is analyzing live scheduled flights and fare rules to compile verified options for you.
      </p>

      {/* Reference Box */}
      <div className="my-6 p-5 rounded-xl bg-[#F4F7FA] border border-[#DFE6ED] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-bold text-[#637083] tracking-wider">
            Your Booking Reference Number
          </span>
          <div className="text-2xl sm:text-3xl font-mono font-black text-[#152B49] tracking-wider mt-0.5">
            {referenceId}
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Quote this reference code whenever you speak with our booking desk.
          </p>
        </div>
        <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#EBF5FB] text-[#2463A6] border border-[#67B7E1]/30 self-start sm:self-auto">
          Contact via: <span className="capitalize font-bold">{contactMethod}</span>
        </div>
      </div>

      {/* Next Steps List */}
      <div className="space-y-3 mb-8">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#152B49]">
          What Happens Next?
        </h3>
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <div className="w-6 h-6 rounded-full bg-[#EBF5FB] text-[#2463A6] font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
            1
          </div>
          <div>
            <strong className="text-[#172335]">Agent Route Review:</strong> Our agents check real airline inventory, seat maps, baggage allowances, and flexible fare classes.
          </div>
        </div>
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <div className="w-6 h-6 rounded-full bg-[#EBF5FB] text-[#2463A6] font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
            2
          </div>
          <div>
            <strong className="text-[#172335]">Personal Consultation:</strong> We contact you directly to review routing alternatives, transparent costs, and answer questions.
          </div>
        </div>
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <div className="w-6 h-6 rounded-full bg-[#EBF5FB] text-[#2463A6] font-bold flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
            3
          </div>
          <div>
            <strong className="text-[#172335]">Reservation Coordination:</strong> Once you approve an itinerary, we guide you through the reservation process.
          </div>
        </div>
      </div>

      {/* Immediate Phone Call Option */}
      <div className="p-5 rounded-xl bg-[#152B49] text-white">
        <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#67B7E1] mb-1">
          <Clock className="w-3.5 h-3.5" />
          <span>Need Instant Assistance?</span>
        </div>
        <h4 className="text-base font-bold text-white mb-2">
          Call us now to discuss this enquiry with a live booking specialist
        </h4>
        <div className="pt-2">
          <CallCTA variant="primary" sourceContext="confirmation_card" />
        </div>
      </div>

      {/* Reset / Actions */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DFE6ED]">
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2463A6] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Submit another flight enquiry</span>
          </button>
        )}
        <Link
          href="/"
          className="text-xs font-semibold text-slate-500 hover:text-slate-800"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
