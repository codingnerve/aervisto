import Link from "next/link";
import { TrainFront } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CallCTA } from "@/components/ui/CallCTA";
import { RailSearch } from "@/components/trains/RailSearch";
import {
  TRAIN_OPERATORS,
  allTrainStations,
  type TrainOperator,
} from "@/lib/mock/trains";

const accentClasses: Record<TrainOperator["logoAccent"], string> = {
  primary: "bg-navy text-white",
  secondary: "bg-aviation-blue text-white",
  accent: "bg-orange-accent text-white",
};

export function TrainsPageContent() {
  return (
    <div className="mx-auto max-w-7xl space-y-14 px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <Breadcrumbs items={[{ label: "Trains" }]} />

        <section className="grid gap-6 rounded-3xl border border-border-subtle bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-aviation-blue">
              <TrainFront className="h-4 w-4" aria-hidden="true" />
              Passenger rail travel
            </span>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-navy sm:text-4xl">
              Rail booking guides for{" "}
              <span className="text-orange-accent">trusted train operators</span>
            </h1>
          </div>
          <p className="text-base leading-relaxed text-muted-text">
            Browse our operator guides, see the corridors travellers ask about
            most, and send a rail booking request alongside your flights. Our
            team checks live schedules and fares with you before anything is
            confirmed.
          </p>
        </section>
      </div>

      <RailSearch stations={allTrainStations} />

      <section aria-label="Train operators" className="grid gap-5 lg:grid-cols-2">
        {TRAIN_OPERATORS.map((operator) => (
          <article
            key={operator.id}
            className="flex flex-col rounded-3xl border border-border-subtle bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-lg px-3 py-1 font-mono text-sm font-black tracking-wider ${accentClasses[operator.logoAccent]}`}
              >
                {operator.code}
              </span>
              <span className="rounded-full border border-border-subtle bg-light-bg px-3 py-1 text-xs font-bold text-muted-text">
                {operator.country}
              </span>
            </div>

            <h2 className="mt-4 text-xl font-black text-navy sm:text-2xl">
              Book {operator.name} rail tickets
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-text">
              {operator.summary}
            </p>

            <div className="mt-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-aviation-blue">
                Popular corridors
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {operator.popularCorridors.slice(0, 4).map((corridor) => (
                  <li
                    key={corridor.label}
                    className="rounded-full border border-border-subtle bg-light-bg px-3 py-1 text-xs font-semibold text-primary-text"
                  >
                    {corridor.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6">
              <Link
                href={`/trains/${operator.slug}`}
                className="focus-ring group flex items-center justify-between gap-3 border-t border-border-subtle pt-4 text-sm font-bold text-aviation-blue hover:text-navy"
              >
                <span>View guide and request a trip</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-light text-aviation-blue transition-colors group-hover:bg-navy group-hover:text-white">
                  <TrainFront className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl bg-navy p-6 text-white sm:p-10 lg:grid-cols-[1.5fr_auto] lg:items-center">
        <div>
          <h2 className="text-2xl font-black sm:text-3xl">
            Need help planning your rail itinerary?
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200">
            Tell our team where and when you want to travel. We check live
            schedules and fares, and confirm everything with you before anything
            is booked.
          </p>
        </div>
        <CallCTA variant="accent" sourceContext="trains_hub_help" />
      </section>
    </div>
  );
}
