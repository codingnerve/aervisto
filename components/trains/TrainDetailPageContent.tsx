import type { ReactNode } from "react";
import Link from "next/link";
import {
  Armchair,
  ArrowLeftRight,
  Ban,
  Calendar,
  Check,
  CircleHelp,
  Info,
  Luggage,
  MapPin,
  Route,
  Search,
  ShieldCheck,
  TrainFront,
  type LucideIcon,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { CallCTA } from "@/components/ui/CallCTA";
import { RailSearch } from "@/components/trains/RailSearch";
import { SITE_NAME } from "@/lib/site-config";
import { TRAIN_OPERATORS, type TrainOperator } from "@/lib/mock/trains";

interface GuideCardProps {
  id?: string;
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
}

function GuideCard({ id, title, icon: Icon, children }: GuideCardProps) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-24 rounded-3xl border border-border-subtle bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-4 flex items-center gap-3">
        {Icon && (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-light text-aviation-blue">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        )}
        <h2 id={headingId} className="text-xl font-black text-navy sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-muted-text sm:text-base">
        {children}
      </div>
    </section>
  );
}

export function TrainDetailPageContent({ operator }: { operator: TrainOperator }) {
  const otherOperators = TRAIN_OPERATORS.filter(
    (other) => other.slug !== operator.slug,
  );

  const contents = [
    { id: "why-book", label: "Why book with us" },
    { id: "how-to-book", label: "How to book" },
    { id: "manage-booking", label: "Manage your booking" },
    { id: "seating", label: "Seat selection and upgrades" },
    { id: "changes", label: "Change policy" },
    { id: "cancellations", label: "Cancellation policy" },
    { id: "baggage", label: "Baggage policies" },
    { id: "stations", label: "Station check-in" },
    { id: "routes", label: "Popular routes" },
    { id: "faq", label: "Questions" },
  ];

  return (
    <div className="pb-14">
      <div className="bg-navy pb-16 pt-8 text-white sm:pt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            tone="dark"
            items={[{ label: "Trains", href: "/trains" }, { label: operator.name }]}
          />

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-blue">
                <TrainFront className="h-4 w-4" aria-hidden="true" />
                Rail guide
              </span>
              <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Book {operator.name} rail tickets
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200">
                {operator.intro}
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 lg:min-w-64">
              <p className="text-xs font-bold uppercase tracking-wider text-sky-blue">
                Rail brand
              </p>
              <p className="mt-1 font-mono text-4xl font-black tracking-wider">
                {operator.code}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {operator.country}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RailSearch
          stations={operator.stations}
          title={`Search ${operator.name} journeys`}
          subtitle="Compare train routes, flexible dates and passenger options for city-to-city travel."
          className="relative z-10 -mt-8"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_18rem]">
          <nav
            aria-label="Guide contents"
            className="hidden self-start rounded-2xl border border-border-subtle bg-white p-5 shadow-sm lg:sticky lg:top-24 lg:block"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-aviation-blue">
              Contents
            </p>
            <ul className="space-y-1">
              {contents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="focus-ring block rounded-lg px-2 py-1.5 text-sm font-semibold text-primary-text hover:bg-sky-light hover:text-aviation-blue"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 space-y-5">
            <GuideCard title={`${operator.name} rail booking guide`} icon={TrainFront}>
              <p>{operator.guideIntro}</p>
            </GuideCard>

            <GuideCard
              id="why-book"
              title={`Why book ${operator.name} tickets with ${SITE_NAME}?`}
              icon={ShieldCheck}
            >
              <p>{operator.whyBook}</p>
              <ul className="flex flex-wrap gap-2">
                {operator.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="inline-flex items-center gap-1.5 rounded-full bg-sky-light px-3 py-1.5 text-xs font-bold text-navy"
                  >
                    <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </GuideCard>

            <GuideCard
              id="how-to-book"
              title={`How to book ${operator.name} rail tickets`}
              icon={Search}
            >
              <p>{operator.howToBook}</p>
            </GuideCard>

            <GuideCard
              id="manage-booking"
              title={`Manage your ${operator.name} booking`}
              icon={Calendar}
            >
              <p>{operator.manageBooking}</p>
            </GuideCard>

            <GuideCard id="seating" title="Seat selection and upgrades" icon={Armchair}>
              <p>{operator.seatClassesIntro}</p>
              <dl className="space-y-4">
                {operator.seatClasses.map((seatClass) => (
                  <div
                    key={seatClass.name}
                    className="border-l-4 border-aviation-blue pl-4"
                  >
                    <dt className="font-bold text-navy">{seatClass.name}</dt>
                    <dd className="mt-1">{seatClass.description}</dd>
                  </div>
                ))}
              </dl>
            </GuideCard>

            <GuideCard id="changes" title="Train change policy" icon={ArrowLeftRight}>
              <p>{operator.changePolicy}</p>
            </GuideCard>

            <GuideCard
              id="cancellations"
              title="Rail ticket cancellation policy"
              icon={Ban}
            >
              <p>{operator.cancellationPolicy}</p>
            </GuideCard>

            <GuideCard id="baggage" title="Baggage policies" icon={Luggage}>
              <p>{operator.baggageIntro}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {operator.baggage.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border-subtle bg-light-bg p-4"
                  >
                    <h3 className="font-bold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm">{item.detail}</p>
                  </div>
                ))}
              </div>
            </GuideCard>

            <GuideCard id="stations" title="Station check-in options" icon={MapPin}>
              <p>{operator.stationCheckIn}</p>
            </GuideCard>

            <GuideCard
              id="routes"
              title={`Popular ${operator.name} routes`}
              icon={Route}
            >
              <ul className="divide-y divide-border-subtle rounded-2xl border border-border-subtle">
                {operator.popularCorridors.map((corridor) => (
                  <li
                    key={corridor.label}
                    className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <span className="font-semibold text-primary-text">
                      {corridor.label}
                    </span>
                    <span className="text-sm font-bold text-aviation-blue">
                      {corridor.typicalDuration}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs">
                Journey times are approximate and vary by service.
              </p>
            </GuideCard>

            <GuideCard id="faq" title={`${operator.name} questions`} icon={CircleHelp}>
              <Accordion items={operator.faqs} name={`${operator.slug}-faq`} />
            </GuideCard>
          </div>

          <aside className="space-y-5 lg:col-start-2 xl:col-start-3 xl:sticky xl:top-24 xl:self-start">
            <div className="rounded-3xl bg-navy p-6 text-white shadow-sm">
              <h2 className="text-xl font-black">Need help booking?</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Call our team and we will check {operator.name} options for your
                dates.
              </p>
              <CallCTA
                variant="accent"
                sourceContext={`trains_sidebar_${operator.slug}`}
                className="mt-4 w-full"
              />
            </div>

            {otherOperators.length > 0 && (
              <nav
                aria-label="Other rail brands"
                className="rounded-3xl border border-border-subtle bg-white p-6 shadow-sm"
              >
                <h2 className="text-sm font-black uppercase tracking-wider text-navy">
                  Other rail brands
                </h2>
                <ul className="mt-3 space-y-1">
                  {otherOperators.map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={`/trains/${other.slug}`}
                        className="focus-ring flex items-center justify-between gap-3 rounded-lg px-2 py-2 text-sm font-semibold text-primary-text hover:bg-sky-light hover:text-aviation-blue"
                      >
                        <span>{other.name}</span>
                        <span className="font-mono text-xs font-black text-muted-text">
                          {other.code}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="rounded-3xl border border-border-subtle bg-sky-light p-6">
              <div className="flex items-start gap-2.5">
                <Info
                  className="mt-0.5 h-4 w-4 shrink-0 text-aviation-blue"
                  aria-hidden="true"
                />
                <ul className="space-y-2 text-xs leading-relaxed text-primary-text">
                  <li>Baggage and fare rules vary by ticket and by service.</li>
                  <li>
                    We confirm rail ticket conditions with you before anything is
                    booked.
                  </li>
                  <li>
                    {operator.name} is an independent brand. {SITE_NAME} is not
                    the operator.
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
