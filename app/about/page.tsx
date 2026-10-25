import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CallCTA } from "@/components/ui/CallCTA";
import { TrustSection } from "@/components/ui/TrustSection";
import {
  Users,
  ShieldCheck,
  Plane,
  HeartHandshake,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Aervisto | Human-Assisted International Flight Enquiry Service",
  description:
    "Learn about Aervisto's agent-assisted flight enquiry model. We provide personalized flight research and reservation assistance for travelers in the US, UK, and Canada.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#F4F7FA] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Us" }]} className="mb-6" />

        {/* Hero Header with Real Image */}
        <div className="text-white rounded-3xl p-6 sm:p-14 mb-12 shadow-xl relative overflow-hidden min-h-[340px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1600&q=80"
              alt="Aviation travel consultant care"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E1D32]/95 via-[#152B49]/85 to-black/50" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-300 block mb-2">
              About Aervisto
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow">
              Bringing Human Care Back to International Flight Planning
            </h1>
            <p className="text-slate-200 text-sm sm:text-lg mt-4 leading-relaxed drop-shadow">
              Aervisto was created to provide a dependable alternative to automated flight aggregators. We believe that booking international air travel—especially complex routes and premium cabins—deserves attentive human expertise.
            </p>
          </div>
        </div>

        {/* Business Model Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-[#DFE6ED] shadow-sm space-y-6 text-left">
            <h2 className="text-2xl font-black text-[#152B49]">
              Our Business Model & Purpose
            </h2>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              Modern flight search engines are built around rigid automated algorithms. When your journey involves transatlantic legs, multiple carriers, family seating needs, or strict refundability requirements, automated tools frequently produce frustrating dead ends or unexpected hidden fees.
            </p>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              At <strong>Aervisto</strong>, we operate as an international airline ticket enquiry and reservation-assistance service. Customers in the United States, United Kingdom, and Canada connect with our booking desk by submitting an enquiry or calling directly. Our agents investigate scheduled carrier inventory, evaluate routing options, and present verified choices tailored to your preferences.
            </p>

            <div className="p-5 rounded-xl bg-[#EBF5FB] border border-[#67B7E1]/40 space-y-2">
              <h3 className="text-sm font-bold text-[#152B49] flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#2463A6]" />
                <span>Our Core Operating Principle</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#172335] leading-relaxed">
                We never execute high-pressure instant checkouts or present fabricated low fares to trap clicks. Every recommendation is verified against authentic airline schedules and clearly explained before you confirm.
              </p>
            </div>
          </div>

          {/* Service Comparison Matrix */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#DFE6ED] shadow-sm space-y-6 text-left">
            <h3 className="text-lg font-black text-[#152B49] border-b border-slate-100 pb-3">
              Clear Boundaries: What We Do & Don&apos;t Do
            </h3>

            {/* What We Do */}
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>What Aervisto Does</span>
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">&check;</span>
                  <span>Researches verified flight itineraries on scheduled carriers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">&check;</span>
                  <span>Provides direct phone access to dedicated booking agents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">&check;</span>
                  <span>Clarifies baggage limits, cabin products, and cancellation rules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">&check;</span>
                  <span>Coordinates reservations through authorized ticketing channels</span>
                </li>
              </ul>
            </div>

            {/* What We Do Not Do */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <span className="text-xs font-extrabold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>What Aervisto Does Not Do</span>
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">&times;</span>
                  <span>We are not an airline and do not operate aircraft</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">&times;</span>
                  <span>We do not directly sell or print tickets through this website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">&times;</span>
                  <span>We do not publish fabricated fares or fake discount tickers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">&times;</span>
                  <span>We do not run unverified credit card checkouts online</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Markets Served Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#DFE6ED] shadow-sm mb-14 text-left">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2463A6] bg-[#EBF5FB] px-3 py-1 rounded-full">
              Geographic Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#152B49] mt-3">
              Target Markets & International Reach
            </h2>
            <p className="text-sm sm:text-base text-[#637083] mt-2">
              Our reservation assistance desk is structured to provide regionalized attention to travelers in three primary markets:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* United States */}
            <div className="p-5 rounded-xl bg-[#F4F7FA] border border-[#DFE6ED]">
              <div className="text-2xl mb-2">🇺🇸</div>
              <h3 className="text-base font-bold text-[#152B49]">United States</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Assisting US travelers with transcontinental routes, transatlantic services to Europe, transpacific flights to Asia, and Latin American connections.
              </p>
            </div>

            {/* United Kingdom */}
            <div className="p-5 rounded-xl bg-[#F4F7FA] border border-[#DFE6ED]">
              <div className="text-2xl mb-2">🇬🇧</div>
              <h3 className="text-base font-bold text-[#152B49]">United Kingdom</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Dedicated support for UK departures from Heathrow, Gatwick, Manchester, and regional hubs to North America, Europe, and the Middle East.
              </p>
            </div>

            {/* Canada */}
            <div className="p-5 rounded-xl bg-[#F4F7FA] border border-[#DFE6ED]">
              <div className="text-2xl mb-2">🇨🇦</div>
              <h3 className="text-base font-bold text-[#152B49]">Canada</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Personalized flight planning for Canadian travelers departing Toronto Pearson, Vancouver, Montreal, and Calgary for transborder and international travel.
              </p>
            </div>
          </div>
        </div>

        {/* Why Trust Section Reused */}
        <TrustSection />

        {/* Final Conversion Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#152B49] text-white text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Have a Flight in Mind? Speak to Our Team Today
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our booking specialists are available to review schedule alternatives, explain fare classes, and verify ticket rules for your next journey.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/flights"
              className="px-6 py-3.5 bg-[#ED6029] hover:bg-[#D84E17] text-white font-bold text-sm rounded-xl transition-all shadow"
            >
              Submit Flight Enquiry
            </Link>
            <CallCTA variant="primary" sourceContext="about_page_footer" />
          </div>
        </div>
      </div>
    </div>
  );
}
