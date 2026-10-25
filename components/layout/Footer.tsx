import React from "react";
import Link from "next/link";
import { Phone, Mail, Clock, ShieldCheck, MapPin, ExternalLink, HelpCircle } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { getPhoneConfig } from "@/lib/phone-config";
import { POPULAR_ROUTES } from "@/lib/routes-data";
import { POPULAR_DESTINATIONS } from "@/lib/destinations-data";

export function Footer() {
  const config = getPhoneConfig();

  return (
    <footer className="bg-[#152B49] text-white pt-14 pb-24 md:pb-14 border-t border-[#1E3B63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Brand, Contact, Routes, Destinations, Legal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-[#1E3B63]">
          {/* Col 1: Brand & Model Statement */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" variant="light" />
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
              Aervisto is an international airline ticket enquiry and reservation-assistance service. We help travelers in the United States, United Kingdom, and Canada explore verified flight schedules, cabin classes, and complex route options with dedicated human booking agents.
            </p>
            
            <div className="pt-2">
              <div className="inline-flex items-start gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#67B7E1] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Important Notice:</strong> Aervisto does not directly sell or issue airline tickets through this website. Flight requirements and bookings are handled by human reservation agents via verified booking channels.
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Contact & Assistance */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#67B7E1] mb-4">
              Booking Desk
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li>
                <a
                  href={`tel:${config.defaultPhone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ED6029]" />
                  <span className="font-bold text-white font-mono">{config.defaultPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${config.supportEmail}`}
                  className="flex items-center gap-2 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#67B7E1]" />
                  <span>{config.supportEmail}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>{config.hours}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Routes */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#67B7E1] mb-4">
              Popular Routes
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {POPULAR_ROUTES.slice(0, 6).map((route) => (
                <li key={route.slug}>
                  <Link
                    href={`/routes/${route.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{route.originCity} to {route.destinationCity}</span>
                    <span className="text-[10px] text-slate-400 font-mono group-hover:text-[#67B7E1]">
                      {route.originIata} - {route.destinationIata}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/routes"
                  className="text-xs font-semibold text-[#67B7E1] hover:underline"
                >
                  View All Routes &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Destinations & Quick Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#67B7E1] mb-4">
              Destinations & Info
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {POPULAR_DESTINATIONS.slice(0, 5).map((dest) => (
                <li key={dest.slug}>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    Flights to {dest.name} ({dest.country})
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link href="/airlines" className="hover:text-white transition-colors block text-[#67B7E1] font-semibold">
                  Airlines Directory &rarr;
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors block">
                  About Our Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors block">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimers & Consumer Protection Disclosures */}
        <div className="py-8 text-xs text-slate-400 leading-relaxed space-y-3 border-b border-[#1E3B63]">
          <p>
            <strong>Service Disclosures:</strong> Aervisto is an independent airline ticket enquiry and reservation assistance business. We are not an airline, we do not operate aircraft, and we are not an official carrier website. All trademarks, airline logos, brand names, and airport designations referenced on this website remain the registered property of their respective owners and are used strictly for informational identification purposes under nominative fair use.
          </p>
          <p>
            <strong>Fares & Availability:</strong> Airline fares, seat availability, baggage fees, and schedule details change dynamically and are subject to real-time confirmation through our booking specialists. Aervisto does not publish fabricated or unverified fares. Submitting an enquiry or calling our phone desk does not constitute a completed ticket purchase until verified and confirmed through the appropriate booking procedures.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 Aervisto.com. All rights reserved. Serving travelers across the US, UK, and Canada.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/booking-disclaimer" className="hover:text-white transition-colors">
              Booking Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
