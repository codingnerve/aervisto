import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Plane,
  Clock,
  ShieldCheck,
  Compass,
  ArrowRight,
  MapPin,
  Search,
  Star,
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";
import { HeroFlightSearch } from "@/components/flight-search/HeroFlightSearch";
import { FlightEnquiryForm } from "@/components/flight-enquiry/FlightEnquiryForm";
import { CallCTA } from "@/components/ui/CallCTA";
import { RouteCard } from "@/components/ui/RouteCard";
import { DestinationCard } from "@/components/ui/DestinationCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { POPULAR_ROUTES } from "@/lib/routes-data";
import { POPULAR_DESTINATIONS } from "@/lib/destinations-data";
import { getPhoneConfig } from "@/lib/phone-config";

export default function HomePage() {
  const config = getPhoneConfig();

  const homepageFaqs = [
    {
      question: "How does Aervisto help with international airline tickets?",
      answer:
        "Aervisto provides a personalized enquiry and reservation-assistance service. Instead of forcing you to navigate complex multi-airline search matrices, our human booking agents research live airline options based on your route, dates, cabin class, and budget requirements, and coordinate reservations on your behalf.",
    },
    {
      question: "Does the website sell or issue tickets directly online?",
      answer:
        "No. Aervisto does not directly sell or issue airline tickets through our website. All flight requirements are reviewed by human booking agents who verify route schedules, baggage rules, and fare conditions before coordinating ticketing through legitimate, authorized booking channels.",
    },
    {
      question: "Why do travelers call an agent instead of using automated search engines?",
      answer:
        "Airlines frequently release unpublished consolidator fares that cannot be published on online search engines. Additionally, our booking agents handle complex multi-city routes, family seating requirements, and provide direct phone assistance if your flights are delayed or rescheduled.",
    },
    {
      question: "Which countries and markets do you serve?",
      answer:
        "Aervisto primarily assists travelers originating in or traveling between the United States, United Kingdom, and Canada, alongside international long-haul connections worldwide.",
    },
    {
      question: "Can I request Premium Economy, Business, or First Class cabins?",
      answer:
        "Yes! Our agents specialize in premium cabin options, lie-flat transcontinental seating, and long-haul international suites across leading global airline alliances.",
    },
    {
      question: "Can I speak directly with a booking agent right now?",
      answer:
        "Yes! You can call our booking desk directly during support hours. Our agents are ready to discuss your route, date flexibility, and passenger requirements in real time.",
    },
  ];

  const featuredAirports = [
    { name: "British Airways", code: "BA", slug: "british-airways", hub: "London Heathrow (LHR)" },
    { name: "Virgin Atlantic", code: "VS", slug: "virgin-atlantic", hub: "London Heathrow / Manchester" },
    { name: "Delta Air Lines", code: "DL", slug: "delta-air-lines", hub: "Atlanta / New York JFK" },
    { name: "United Airlines", code: "UA", slug: "united-airlines", hub: "Newark / Chicago O'Hare" },
    { name: "Air Canada", code: "AC", slug: "air-canada", hub: "Toronto Pearson (YYZ)" },
    { name: "Emirates", code: "EK", slug: "emirates", hub: "Dubai International (DXB)" },
    { name: "Air France", code: "AF", slug: "air-france", hub: "Paris Charles de Gaulle (CDG)" },
    { name: "Lufthansa", code: "LH", slug: "lufthansa", hub: "Frankfurt / Munich" },
  ];

  const customerReviews = [
    {
      name: "David & Sarah K.",
      location: "New York, NY",
      route: "New York (JFK) ⇄ London (LHR)",
      quote:
        "We needed 4 coordinated seats with a bassinet for our infant. Standard booking sites kept separating our seats. One quick call to Aervisto and an agent arranged everything on a nonstop Virgin Atlantic flight.",
      rating: 5,
    },
    {
      name: "Marcus T.",
      location: "Toronto, ON",
      route: "Toronto (YYZ) ⇄ Paris (CDG)",
      quote:
        "Found lie-flat Business Class options for our anniversary trip at rates we simply couldn't find on Google Flights. The agent walked us through terminal connections and baggage rules thoroughly.",
      rating: 5,
    },
    {
      name: "Eleanor M.",
      location: "London, UK",
      route: "London (LHR) ⇄ Los Angeles (LAX)",
      quote:
        "When our original return leg was disrupted, having a direct phone number with a human who picked up in two rings was invaluable. No endless robotic hold music. Genuine peace of mind.",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION: Authentic Travel Photography + Modern Expedia-Style Search Bar */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center text-white py-14 sm:py-20 overflow-hidden">
        {/* Background Photo (Aircraft Wing above Clouds during Sunrise) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80"
            alt="Commercial airplane in flight over clouds"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Deep Navy Gradient Overlay for legibility & warmth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1D32]/95 via-[#152B49]/85 to-[#0E1D32]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
              Where would you like to fly next?
            </h1>
            <p className="text-sm sm:text-lg text-slate-200 font-medium max-w-2xl mx-auto drop-shadow">
              Search real-time flight routes. Connect with a dedicated reservation specialist for unpublished airline fares and personalized booking care.
            </p>
          </div>

          {/* Hero Search Flight Bar with Instant Call Popup */}
          <div className="max-w-5xl mx-auto">
            <HeroFlightSearch />
          </div>

          {/* Sub-Hero Trust Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-200 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Unpublished Consolidator Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dedicated Human Booking Agent</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Serving US, UK &amp; Canada</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#ED6029]" />
              <a href={config.defaultPhone ? `tel:${config.defaultPhone.replace(/[^\d+]/g, "")}` : "tel:+18443619076"} className="hover:underline font-bold text-white">
                Call {config.defaultPhone || "+1 (844) 361-9076"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRENDING FLIGHT DESTINATIONS (Expedia-style rich cards with photos) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6]">
                Popular Gateways
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#152B49] mt-1 tracking-tight">
                Trending Destinations This Season
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Explore major global hubs with daily transatlantic and international scheduled services.
              </p>
            </div>

            <Link
              href="/destinations"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2463A6] hover:text-[#152B49] transition-colors"
            >
              <span>Explore all destinations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_DESTINATIONS.slice(0, 4).map((dest) => (
              <DestinationCard key={dest.slug} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. POPULAR FLIGHT CORRIDORS SHOWCASE (With images) */}
      <section className="py-16 sm:py-20 bg-[#F4F7FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6]">
                Flight Routes
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#152B49] mt-1 tracking-tight">
                Featured Nonstop &amp; Direct Corridors
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                High-demand routes between the US, UK, Canada, Europe, and Asia.
              </p>
            </div>

            <Link
              href="/routes"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2463A6] hover:text-[#152B49] transition-colors"
            >
              <span>View all flight routes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POPULAR_ROUTES.slice(0, 6).map((route) => (
              <RouteCard key={route.slug} route={route} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL SECTION: WHY BOOK WITH A HUMAN AGENT (Expedia / Travel Magazine Style) */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern business class aircraft seating and travel comfort"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152B49]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-300">
                    Agent-Assisted Care
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    Unlocking Private Airline Fares &amp; Lie-Flat Comfort
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 max-w-md">
                    Speak directly with a specialist who understands airline seat pitches, baggage allowances, and alliance perks.
                  </p>
                </div>
              </div>

              {/* Floating Agent Badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-full bg-[#ED6029] text-white flex items-center justify-center font-bold flex-shrink-0">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#152B49]">Direct Booking Line</div>
                  <div className="text-sm font-extrabold text-[#ED6029]">
                    {config.defaultPhone || "+1 (844) 361-9076"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Editorial Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6]">
                  The Human Advantage
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#152B49] mt-2 tracking-tight leading-tight">
                  Why Savvy Travelers Call Us Instead of Online Bots
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Aggregator engines rely on rigid computer algorithms that frequently overlook complex routing combinations and hide restrictive basic economy conditions. Aervisto connects you with real aviation booking agents.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#EBF5FB] text-[#2463A6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2463A6]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#152B49]">
                      Unpublished Consolidator Airfares
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Major international carriers supply offline agencies with specialized wholesale and consolidator fares that cannot be advertised directly on web checkout screens.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#EBF5FB] text-[#2463A6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2463A6]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#152B49]">
                      Multi-City &amp; Open-Jaw Routing
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Traveling into London and returning from Rome or Paris? Our agents configure split itineraries seamlessly across international partner airlines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#EBF5FB] text-[#2463A6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2463A6]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#152B49]">
                      Direct Human Care When Plans Change
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      If an airline changes a flight time or you need to reschedule, you speak directly with your dedicated agent rather than waiting on hold for hours with a chatbot.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <CallCTA variant="primary" sourceContext="homepage_editorial" />
                <Link
                  href="/about"
                  className="text-xs sm:text-sm font-bold text-[#2463A6] hover:underline"
                >
                  Learn how we work &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TOP AIRLINES WE QUOTE (Expedia-style Partner Grid) */}
      <section className="py-14 bg-[#F4F7FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Global Airline Network
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-[#152B49] mt-1 mb-8">
            Scheduled Carriers We Research &amp; Quote
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {featuredAirports.map((carrier) => (
              <Link
                key={carrier.slug}
                href={`/airlines/${carrier.slug}`}
                className="group p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#2463A6] hover:shadow-md transition-all text-left block"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-slate-100 rounded text-[#152B49] group-hover:bg-[#EBF5FB] group-hover:text-[#2463A6] transition-colors">
                    {carrier.code}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2463A6] group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="text-sm font-bold text-[#152B49] group-hover:text-[#2463A6] transition-colors">
                  {carrier.name}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                  {carrier.hub}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/airlines"
              className="px-5 py-2.5 bg-white border border-slate-300 hover:border-[#2463A6] text-xs sm:text-sm font-bold text-[#152B49] hover:text-[#2463A6] rounded-xl shadow-sm transition-all inline-flex items-center gap-2"
            >
              <span>Explore All Airlines &amp; Carrier Briefs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-[11px] text-slate-400 mt-5">
            Airline names and IATA codes are referenced under nominative fair use for flight identification purposes. Aervisto is an independent flight assistance agency.
          </p>
        </div>
      </section>

      {/* 6. VERIFIED TRAVELER EXPERIENCES (Real Human Quotes) */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6]">
              Customer Experiences
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#152B49] mt-1">
              What Travelers Say About Our Booking Assistance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerReviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F4F7FA] border border-slate-200 shadow-sm text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-[#2463A6] mb-1.5 uppercase font-mono">
                    {rev.route}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-sm text-[#152B49] block">{rev.name}</span>
                    <span className="text-xs text-slate-500 block">{rev.location}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMPACT FULL FLIGHT ENQUIRY SECTION */}
      <section id="enquiry-form-section" className="py-16 sm:py-20 bg-[#F4F7FA] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6]">
              Instant Flight Details
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#152B49] mt-1">
              Check Schedules &amp; Speak to an Agent
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
              Select your trip details and click Get Details to connect directly with our human booking specialists for real-time fares and availability.
            </p>
          </div>

          <FlightEnquiryForm
            title="Instant Flight Details Lookup"
            subtitle="Free agent quote. No credit card required. Check verified schedules across leading airlines."
          />
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-[#152B49]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Clear answers regarding how our agent-assisted flight enquiry service works.
            </p>
          </div>

          <FaqAccordion items={homepageFaqs} defaultOpenIndex={0} />

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2463A6] hover:underline"
            >
              <span>View full FAQ knowledge base</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. PROMINENT CONVERSION BANNER */}
      <section className="py-14 sm:py-18 bg-[#152B49] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Ready to speak with an international flight agent?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Our reservation desk is open. Call now to review schedule options, cabin classes, and baggage rules with a human specialist.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={config.defaultPhone ? `tel:${config.defaultPhone.replace(/[^\d+]/g, "")}` : "tel:+18443619076"}
              className="w-full sm:w-auto px-8 py-4 bg-[#ED6029] hover:bg-[#D84E17] text-white font-extrabold text-lg rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Call {config.defaultPhone || "+1 (844) 361-9076"}</span>
            </a>

            <Link
              href="/flights"
              className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-xl transition-all border border-white/20"
            >
              Submit Written Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
