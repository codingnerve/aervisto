import React from "react";
import { UserCheck, Shield, Shuffle, PhoneForwarded, Users2, CheckCircle2 } from "lucide-react";

export function TrustSection() {
  const points = [
    {
      icon: UserCheck,
      title: "Real Human Booking Specialists",
      description:
        "Skip endless search loops and unhelpful AI bots. Our knowledgeable agents review live airline schedules to curate tailored flight itineraries based on your specific travel needs.",
    },
    {
      icon: Shuffle,
      title: "Complex & Multi-City Itineraries",
      description:
        "From transatlantic open-jaw routes to family bookings requiring coordinated seats, our team evaluates multi-airline routing that automated booking platforms frequently miss.",
    },
    {
      icon: Shield,
      title: "Clear Fare Rules & Baggage Disclosures",
      description:
        "We clarify cabin restrictions, baggage allowances, cancellation terms, and transit visas before you commit to any itinerary.",
    },
    {
      icon: PhoneForwarded,
      title: "Direct Phone & Responsive Communication",
      description:
        "Speak directly with an agent who understands your timeline. We assist customers originating across the United States, United Kingdom, and Canada.",
    },
    {
      icon: Users2,
      title: "Group & Family Coordination",
      description:
        "Traveling with infants, children, or elderly family members? Our specialists assist in requesting bassinet seats, special meals, and airport assistance.",
    },
    {
      icon: CheckCircle2,
      title: "Zero Hidden Online Ticketing Traps",
      description:
        "We do not execute instant credit card checkouts with hidden fees. Every flight option is reviewed and authorized by you with full transparency.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6]">
            Our Commitment
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#152B49] mt-1 tracking-tight">
            Personal Flight Assistance When It Matters Most
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            International flight planning shouldn’t be a stressful battle against confusing search engines. Discover the reassurance of working with dedicated human booking agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F4F7FA] border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 text-left flex flex-col justify-start"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#2463A6] shadow-sm mb-4">
                  <Icon className="w-5 h-5 text-[#2463A6]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#152B49] mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
