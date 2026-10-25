"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Plane, Phone, HelpCircle, MapPin, Compass } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { CallCTA } from "@/components/ui/CallCTA";
import { getPhoneConfig } from "@/lib/phone-config";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const phoneConfig = getPhoneConfig();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/flights", label: "Flight Enquiry", icon: Plane },
    { href: "/routes", label: "Popular Routes", icon: Compass },
    { href: "/destinations", label: "Destinations", icon: MapPin },
    { href: "/airlines", label: "Airlines", icon: Plane },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DFE6ED]"
          : "bg-white border-b border-[#DFE6ED]"
      }`}
    >
      {/* Top Notification Bar for Service Clarity */}
      <div className="bg-[#152B49] text-white text-[10px] sm:text-xs py-1 sm:py-1.5 px-3 sm:px-4 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-0.5 sm:gap-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="truncate">Agent-Assisted Flight Reservations & Enquiries (US • UK • Canada)</span>
          </div>
          <div className="text-slate-300 text-[10px] sm:text-[11px]">
            Support Hours: {phoneConfig.hours}
          </div>
        </div>
      </div>

      {/* Main Navigation Container */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20 gap-1.5 sm:gap-4">
          {/* Logo */}
          <div className="shrink-0 min-w-0">
            <Logo size="md" variant="navy" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors py-1 relative ${
                    isActive
                      ? "text-[#2463A6] font-bold"
                      : "text-[#172335] hover:text-[#2463A6]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2463A6] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Phone CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <CallCTA variant="header" sourceContext="header" />
          </div>

          {/* Mobile Right Controls: Phone CTA + Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 lg:hidden shrink-0">
            <CallCTA variant="header" sourceContext="mobile_header" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-ring shrink-0"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#DFE6ED] bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1 mb-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[#EBF5FB] text-[#2463A6]"
                      : "text-[#172335] hover:bg-slate-50"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 text-[#2463A6]" />}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Call Box */}
          <div className="pt-3 border-t border-slate-100">
            <div className="text-xs font-bold text-[#637083] uppercase mb-2">
              Speak to a Booking Specialist:
            </div>
            <CallCTA variant="primary" sourceContext="mobile_menu" />
          </div>
        </div>
      )}
    </header>
  );
}
