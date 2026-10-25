import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CallCTA } from "@/components/ui/CallCTA";
import { getPhoneConfig, getMarketPhone } from "@/lib/phone-config";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Headphones,
  CheckCircle2,
  ShieldCheck,
  Send,
} from "lucide-react";
import { FlightEnquiryForm } from "@/components/flight-enquiry/FlightEnquiryForm";

export const metadata: Metadata = {
  title: "Contact Aervisto | Flight Booking Desk & Telephone Directory",
  description:
    "Contact Aervisto's flight booking desk. Direct phone numbers for US, UK, and Canadian travelers, support hours, and agent-assisted flight enquiry submissions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const config = getPhoneConfig();

  return (
    <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact Us" }]} className="mb-6" />

        {/* Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5FB] text-[#2463A6] text-xs font-bold uppercase tracking-wider mb-2">
            <Headphones className="w-3.5 h-3.5 text-[#ED6029]" />
            <span>Customer Care & Reservations</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-[#152B49] tracking-tight">
            Contact Our Booking Desk
          </h1>
          <p className="text-sm sm:text-base text-[#637083] mt-2 leading-relaxed">
            Connect directly with an Aervisto flight specialist. Whether you are enquiring about an upcoming international trip, need guidance on complex routings, or want to discuss group travel, our team is here to assist.
          </p>
        </div>

        {/* Main Grid: Contact Numbers & Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Left Column: Direct Phone Directory & Office Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Direct Phone Lines Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DFE6ED] shadow-sm space-y-5">
              <h2 className="text-lg font-black text-[#152B49] border-b border-slate-100 pb-3 flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#2463A6]" />
                <span>Direct Telephone Support</span>
              </h2>

              <p className="text-xs text-[#637083]">
                Speak directly with an assigned booking specialist to check flight schedules, seat availability, and fare options:
              </p>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#152B49] to-[#2463A6] text-white shadow-md space-y-3">
                <div className="text-xs font-bold text-[#67B7E1] uppercase tracking-wider">
                  Direct Booking Desk
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono">
                  {config.defaultPhone}
                </div>
                <p className="text-xs text-slate-200">
                  Toll-Free • Live agent answers in &lt; 30 seconds • Serving US, UK &amp; Canada
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${config.defaultPhone.replace(/[^\d+]/g, "")}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ED6029] hover:bg-[#D84E17] text-white font-bold text-sm shadow transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Desk Now</span>
                  </a>
                </div>
              </div>

              {/* Email & Hours */}
              <div className="pt-2 border-t border-slate-100 space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="w-4 h-4 text-[#2463A6] flex-shrink-0" />
                  <div>
                    <span className="font-bold text-[#152B49] block">Email Support Desk:</span>
                    <a
                      href={`mailto:${config.supportEmail}`}
                      className="text-[#2463A6] hover:underline"
                    >
                      {config.supportEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <Clock className="w-4 h-4 text-[#ED6029] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#152B49] block">Operating Hours:</span>
                    <span className="text-slate-600">{config.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Contact An Agent Steps */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DFE6ED] shadow-sm text-left">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#152B49] mb-3">
                How to Contact an Agent
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-[#4A5568] list-decimal list-inside leading-relaxed">
                <li>
                  <strong className="text-[#172335]">Submit an online enquiry:</strong> Provide your origin, destination, travel dates, and cabin class using the form on this page.
                </li>
                <li>
                  <strong className="text-[#172335]">Receive your reference code:</strong> Keep your reference handy when speaking with our team.
                </li>
                <li>
                  <strong className="text-[#172335]">Discuss live options:</strong> A reservation specialist will contact you by your preferred channel (phone, email, or WhatsApp/SMS) to discuss verified schedule options.
                </li>
              </ol>
            </div>

            {/* Legal Notice */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-[#637083] leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-[#2463A6] mb-1 inline-block mr-1.5" />
              <strong>Service Clarification:</strong> Aervisto does not operate airlines or issue direct web tickets. We assist travelers with flight research and reservation coordination.
            </div>
          </div>

          {/* Right Column: Full Interactive Flight Enquiry Form */}
          <div className="lg:col-span-7">
            <FlightEnquiryForm
              title="Look Up Flight Details & Speak With Us"
              subtitle="Enter your trip route and dates, then click Get Details to connect directly with our reservation team."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
