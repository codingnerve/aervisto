"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { ArrowLeftRight, Calendar, MapPin, Search, Users } from "lucide-react";
import type { TrainStation } from "@/lib/mock/trains";

type TripType = "return" | "one-way";

interface RailSearchProps {
  stations: TrainStation[];
  title?: string;
  subtitle?: string;
  defaultFrom?: string;
  defaultTo?: string;
  className?: string;
}

const PASSENGER_OPTIONS = [1, 2, 3, 4, 5, 6];

const fieldLabelClass =
  "mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-text";
const fieldControlClass =
  "focus-ring h-12 w-full rounded-xl border border-border-subtle bg-white px-3 text-sm font-medium text-primary-text placeholder:text-muted-text disabled:cursor-not-allowed disabled:bg-light-bg disabled:text-muted-text";

function toLocalDateString(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

export function RailSearch({
  stations,
  title = "Search rail journeys",
  subtitle = "Compare train routes, flexible dates and passenger options for city-to-city travel.",
  defaultFrom = "",
  defaultTo = "",
  className = "",
}: RailSearchProps) {
  const uid = useId();
  const titleId = `${uid}-title`;
  const listId = `${uid}-stations`;
  const returnHintId = `${uid}-return-hint`;

  const [tripType, setTripType] = useState<TripType>("return");
  const [from, setFrom] = useState(defaultFrom);
  const [to, setTo] = useState(defaultTo);
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const departRef = useRef<HTMLInputElement>(null);
  const returnRef = useRef<HTMLInputElement>(null);

  const isOneWay = tripType === "one-way";

  // The minimum selectable date comes from the visitor's local date. It is set on
  // the DOM nodes after mount so server and client markup stay identical.
  useEffect(() => {
    const today = toLocalDateString(new Date());
    if (departRef.current) departRef.current.min = today;
    if (returnRef.current) returnRef.current.min = departDate || today;
  }, [departDate]);

  const swapStations = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // No results page exists yet. When the rail request flow is built, send the
    // search values (tripType, from, to, dates, passengers) to the enquiry endpoint here.
  };

  return (
    <section
      aria-labelledby={titleId}
      className={`rounded-3xl border border-border-subtle bg-white p-5 shadow-sm sm:p-6 ${className}`}
    >
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 id={titleId} className="text-xl font-black text-navy sm:text-2xl">
            {title}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-muted-text">{subtitle}</p>
        </div>

        <fieldset className="shrink-0">
          <legend className="sr-only">Trip type</legend>
          <div className="inline-flex rounded-full bg-light-bg p-1">
            {(
              [
                { value: "return", label: "Return" },
                { value: "one-way", label: "One-way" },
              ] as const
            ).map((option) => (
              <label key={option.value} className="relative cursor-pointer">
                <input
                  type="radio"
                  name={`${uid}-trip-type`}
                  value={option.value}
                  checked={tripType === option.value}
                  onChange={() => setTripType(option.value)}
                  className="peer sr-only"
                />
                <span className="block rounded-full px-4 py-1.5 text-sm font-bold text-muted-text transition-colors peer-checked:bg-navy peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-aviation-blue">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1fr] md:items-end">
          <div>
            <label htmlFor={`${uid}-from`} className={fieldLabelClass}>
              <MapPin className="h-3.5 w-3.5 text-aviation-blue" aria-hidden="true" />
              From
            </label>
            <input
              id={`${uid}-from`}
              type="text"
              list={listId}
              value={from}
              onChange={(event) => setFrom(event.target.value)}
              placeholder="City or station"
              autoComplete="off"
              required
              className={fieldControlClass}
            />
          </div>

          <button
            type="button"
            onClick={swapStations}
            aria-label="Swap origin and destination"
            className="focus-ring flex h-12 w-12 items-center justify-center justify-self-center rounded-full border border-border-subtle bg-white text-aviation-blue transition-colors hover:bg-sky-light"
          >
            <ArrowLeftRight className="h-4 w-4 rotate-90 md:rotate-0" aria-hidden="true" />
          </button>

          <div>
            <label htmlFor={`${uid}-to`} className={fieldLabelClass}>
              <MapPin className="h-3.5 w-3.5 text-orange-accent" aria-hidden="true" />
              To
            </label>
            <input
              id={`${uid}-to`}
              type="text"
              list={listId}
              value={to}
              onChange={(event) => setTo(event.target.value)}
              placeholder="City or station"
              autoComplete="off"
              required
              className={fieldControlClass}
            />
          </div>
        </div>

        <datalist id={listId}>
          {stations.map((station) => (
            <option key={station.code} value={station.name}>
              {`${station.city} (${station.code})`}
            </option>
          ))}
        </datalist>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
          <div>
            <label htmlFor={`${uid}-depart`} className={fieldLabelClass}>
              <Calendar className="h-3.5 w-3.5 text-aviation-blue" aria-hidden="true" />
              Depart
            </label>
            <input
              id={`${uid}-depart`}
              ref={departRef}
              type="date"
              value={departDate}
              onChange={(event) => {
                setDepartDate(event.target.value);
                if (returnDate && event.target.value > returnDate) setReturnDate("");
              }}
              required
              className={fieldControlClass}
            />
          </div>

          <div>
            <label htmlFor={`${uid}-return`} className={fieldLabelClass}>
              <Calendar className="h-3.5 w-3.5 text-aviation-blue" aria-hidden="true" />
              Return
            </label>
            <input
              id={`${uid}-return`}
              ref={returnRef}
              type="date"
              value={isOneWay ? "" : returnDate}
              onChange={(event) => setReturnDate(event.target.value)}
              disabled={isOneWay}
              required={!isOneWay}
              aria-describedby={isOneWay ? returnHintId : undefined}
              className={fieldControlClass}
            />
            {isOneWay && (
              <p id={returnHintId} className="mt-1 text-xs text-muted-text">
                Not needed for one-way
              </p>
            )}
          </div>

          <div className="col-span-2 lg:col-span-1">
            <label htmlFor={`${uid}-passengers`} className={fieldLabelClass}>
              <Users className="h-3.5 w-3.5 text-aviation-blue" aria-hidden="true" />
              Travellers
            </label>
            <select
              id={`${uid}-passengers`}
              value={passengers}
              onChange={(event) => setPassengers(Number(event.target.value))}
              className={fieldControlClass}
            >
              {PASSENGER_OPTIONS.map((count) => (
                <option key={count} value={count}>
                  {count === 1 ? "1 passenger" : `${count} passengers`}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="focus-ring col-span-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-orange-accent px-8 text-sm font-black text-white shadow-sm transition-colors hover:bg-orange-hover lg:col-span-1"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
          </button>
        </div>
      </form>

      <p className="mt-4 text-xs leading-relaxed text-muted-text">
        Rail searches are sent to our team as a request. Fares and schedules are
        confirmed with you before anything is booked, and no payment is taken on
        this website.
      </p>
    </section>
  );
}
