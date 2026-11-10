export type TrainCorridor = { label: string; typicalDuration: string }; // e.g. "about 3h", guidance only
export type TrainStation = { code: string; name: string; city: string };
export type SeatClass = { name: string; description: string };
export type TrainOperator = {
  id: string;
  slug: string;
  code: string;
  name: string;
  country: string;
  logoAccent: "primary" | "secondary" | "accent";
  summary: string; // listing card
  intro: string; // lead paragraph under H1
  highlights: string[]; // 3 short chips
  guideIntro: string;
  whyBook: string;
  howToBook: string;
  manageBooking: string;
  seatClassesIntro: string;
  seatClasses: SeatClass[];
  changePolicy: string;
  cancellationPolicy: string;
  baggageIntro: string;
  baggage: { title: string; detail: string }[];
  stationCheckIn: string;
  popularCorridors: TrainCorridor[];
  stations: TrainStation[];
  faqs: { question: string; answer: string }[];
};

/**
 * Amtrak station codes are the operator's own published codes.
 * Tren Maya does not publish a station-code scheme that we are aware of, so the
 * codes below are internal identifiers (nearest airport IATA code) used only to
 * de-duplicate and label search suggestions. They are not official station codes.
 */
export const TRAIN_OPERATORS: TrainOperator[] = [
  {
    id: "amtrak",
    slug: "amtrak",
    code: "AMTK",
    name: "Amtrak",
    country: "United States",
    logoAccent: "primary",
    summary:
      "Intercity passenger rail across the United States, from the busy Northeast Corridor to long-distance routes that cross the country. Send us your dates and we will check live schedules and fares with you.",
    intro:
      "Amtrak is the national passenger railroad of the United States, linking major cities with city-centre stations rather than airports. Use this guide to understand how tickets, seating and baggage generally work, then send us a request and we will confirm the details for your trip.",
    highlights: [
      "City-centre to city-centre travel",
      "Several seat and room types",
      "Requests handled by our team",
    ],
    guideIntro:
      "Amtrak runs trains of very different kinds under one name. Short-distance services such as the Northeast Corridor have frequent daily departures, while long-distance trains cover far greater distances and may include overnight travel. Which service suits you depends on your route, your timing and how much space you want on board.",
    whyBook:
      "Rail travel in the United States can be easy to combine with a flight, for example a train to a major city before or after a long-haul journey. When you send a request to our team, we look at the train and the rest of your itinerary together, so connection times and arrival points are checked as a whole. We confirm fares, schedules and conditions with you before anything is booked, and no payment is taken on this website.",
    howToBook:
      "Start by entering your stations, dates and number of passengers in the search above, or call our team. We review the services running on your dates, talk through the options with you, and confirm the conditions of the ticket before any booking is made. If your plans are still flexible, tell us and we can look at nearby dates as well.",
    manageBooking:
      "Once a trip is confirmed, keep your confirmation details to hand and contact our team if you need to ask about your booking. For changes or questions about a ticket you hold, we will explain the options that apply to your particular fare and, where needed, how to proceed with the operator.",
    seatClassesIntro:
      "Amtrak generally offers a choice of seating on its services. Availability depends on the train, so the options below are a general guide and not a promise for every route.",
    seatClasses: [
      {
        name: "Coach",
        description:
          "The standard seat on most services, with reclining seats and room to store a bag overhead. A sensible choice for day trips and shorter journeys.",
      },
      {
        name: "Business and First",
        description:
          "A step up in comfort on selected services, often with extra legroom and a more relaxed carriage. Which of these exists on your train varies by route.",
      },
      {
        name: "Sleeping accommodation",
        description:
          "Private rooms on selected long-distance trains for overnight travel. These are not offered on short corridor services, and we can confirm what is available on your dates.",
      },
    ],
    changePolicy:
      "Whether a ticket can be changed, and at what cost, depends on the fare type you choose and the rules attached to it. Some tickets are more flexible than others. We confirm the change conditions for your ticket with you before anything is booked, so there are no surprises later.",
    cancellationPolicy:
      "Cancellation rules and any refund or credit also depend on the fare type and on how close to departure you cancel. Do not assume a ticket is refundable. Ask our team before you commit, and we will explain the conditions that apply to your specific ticket.",
    baggageIntro:
      "Amtrak is known for a relatively generous approach to luggage compared with air travel, but allowances differ by service and ticket. We confirm the current allowance for your journey rather than quoting a fixed number here.",
    baggage: [
      {
        title: "Carry-on bags",
        detail:
          "Passengers usually keep a small number of bags with them in the carriage, stored overhead or at their seat. Size and quantity limits apply and can vary by service.",
      },
      {
        title: "Checked baggage",
        detail:
          "Checked baggage is only available at some stations and on some trains. If you plan to bring larger luggage, tell us in advance so we can check what is possible on your route.",
      },
    ],
    stationCheckIn:
      "Most travellers arrive at the station well ahead of departure to find the correct platform, collect any documents and board without rushing. Larger city stations can be busy, and some have separate waiting areas for certain ticket types. Our team can tell you what to expect at your departure station and what identification to carry.",
    popularCorridors: [
      { label: "New York to Washington, DC", typicalDuration: "about 3h to 3.5h" },
      { label: "New York to Boston", typicalDuration: "about 4h" },
      { label: "New York to Philadelphia", typicalDuration: "about 1h 15m to 1h 30m" },
      { label: "Washington, DC to Boston", typicalDuration: "about 7h to 8h" },
      { label: "Los Angeles to San Diego", typicalDuration: "about 2h 45m" },
      { label: "Seattle to Portland", typicalDuration: "about 3h 30m" },
      { label: "Chicago to Milwaukee", typicalDuration: "about 1h 30m" },
      { label: "New York to Albany", typicalDuration: "about 2h 30m" },
    ],
    stations: [
      { code: "NYP", name: "New York Penn Station", city: "New York" },
      { code: "WAS", name: "Washington Union Station", city: "Washington, DC" },
      { code: "BOS", name: "Boston South Station", city: "Boston" },
      { code: "PHL", name: "Philadelphia 30th Street", city: "Philadelphia" },
      { code: "BAL", name: "Baltimore Penn Station", city: "Baltimore" },
      { code: "CHI", name: "Chicago Union Station", city: "Chicago" },
      { code: "LAX", name: "Los Angeles Union Station", city: "Los Angeles" },
      { code: "SAN", name: "San Diego Santa Fe Depot", city: "San Diego" },
      { code: "SEA", name: "Seattle King Street Station", city: "Seattle" },
      { code: "PDX", name: "Portland Union Station", city: "Portland" },
    ],
    faqs: [
      {
        question: "Can I book Amtrak tickets on this website?",
        answer:
          "No. This website does not take payment. You send us a request, our team checks live schedules and fares, and we confirm everything with you before anything is booked.",
      },
      {
        question: "How early should I arrive at the station?",
        answer:
          "Arriving with comfortable time to spare is sensible, especially at large stations. Our team can suggest a timing that suits your service and ticket when we confirm your trip.",
      },
      {
        question: "Can I change or cancel my ticket?",
        answer:
          "It depends on the fare you choose. Some fares are flexible and some are not, so we explain the conditions for your specific ticket before you decide.",
      },
      {
        question: "Are the journey times on this page exact?",
        answer:
          "No. Journey times shown are approximate guidance only and vary by service, day and time. We confirm the schedule for your date when you send a request.",
      },
    ],
  },
  {
    id: "tren-maya",
    slug: "tren-maya",
    code: "MAYA",
    name: "Tren Maya",
    country: "Mexico",
    logoAccent: "accent",
    summary:
      "A passenger train serving the Yucatán Peninsula, connecting Caribbean-coast resort areas with colonial cities and archaeological regions. Send us your dates and we will check availability and conditions with you.",
    intro:
      "Tren Maya is a passenger railway in the south-east of Mexico, designed to link destinations across the Yucatán Peninsula. Use this guide for a general overview of how travel works, then send us a request and we will confirm current services and conditions for your dates.",
    highlights: [
      "Yucatán Peninsula routes",
      "Resorts, cities and heritage sites",
      "Details confirmed before booking",
    ],
    guideIntro:
      "Tren Maya connects a range of destinations across the Yucatán Peninsula, so it can suit travellers combining coast, cities and archaeological sites in one trip. The railway has opened in stages, so which stations and services are running can differ depending on when you travel. We check the current position for your dates rather than relying on a fixed list.",
    whyBook:
      "Many travellers reach the region by air, so the train often forms one leg of a longer itinerary. When you send a request to our team, we consider your flights and rail plans together, which helps when arrival times and station locations need to line up. We confirm fares, schedules and conditions with you before anything is booked, and no payment is taken on this website.",
    howToBook:
      "Enter your stations, dates and number of passengers in the search above, or call our team. We look at the services available on your dates, discuss the choices with you, and confirm ticket conditions before any booking is made. Because services and stations have changed over time, we always verify the current position first.",
    manageBooking:
      "After a trip is confirmed, keep your confirmation details safe and contact our team if you have questions. If your plans change, we explain which options apply to your ticket and how to proceed.",
    seatClassesIntro:
      "Tren Maya has described more than one travel option on board. Naming, layout and availability can change, so the points below are general and we confirm what is current for your date.",
    seatClasses: [
      {
        name: "Standard seating",
        description:
          "The everyday choice for most passengers, suitable for sightseeing and shorter hops between destinations. Seat layout and facilities depend on the train.",
      },
      {
        name: "Premium seating",
        description:
          "A more comfortable option on selected services, usually with extra space. Not every service offers it, so ask us to confirm before you plan around it.",
      },
    ],
    changePolicy:
      "Whether a ticket can be changed, and the cost of doing so, depends on the ticket type and the operator's rules at the time of booking. We confirm change conditions with you before anything is booked, so you know the position in advance.",
    cancellationPolicy:
      "Cancellation and refund rules depend on the ticket and on timing. Do not assume that a ticket is refundable. Ask our team before you commit, and we will explain the conditions for the ticket you are considering.",
    baggageIntro:
      "Luggage allowances on Tren Maya depend on the service and ticket, and we do not quote fixed limits here. Tell us what you are travelling with and we will confirm what is permitted.",
    baggage: [
      {
        title: "Carry-on bags",
        detail:
          "Passengers generally keep smaller bags with them on board. Size and number limits apply and may differ by service, so check with us before you pack.",
      },
      {
        title: "Larger luggage",
        detail:
          "If you are travelling with large suitcases, sports gear or other bulky items, let us know in advance. We confirm what can be carried and how it is handled on your route.",
      },
    ],
    stationCheckIn:
      "Allow generous time to reach the station, locate the right platform and complete any checks before departure. Some stations are outside city centres, so transfers from hotels or airports are worth planning in advance. Our team can tell you which station suits your trip and what documents to carry.",
    popularCorridors: [
      { label: "Cancún Airport to Playa del Carmen", typicalDuration: "about 1h" },
      { label: "Cancún Airport to Tulum", typicalDuration: "about 1h 30m to 2h" },
      { label: "Playa del Carmen to Tulum", typicalDuration: "about 45m to 1h" },
      { label: "Cancún Airport to Mérida", typicalDuration: "about 5h to 6h" },
      { label: "Mérida to Campeche", typicalDuration: "about 2h to 3h" },
      { label: "Campeche to Palenque", typicalDuration: "about 3h to 4h" },
      { label: "Tulum to Bacalar", typicalDuration: "about 1h 30m to 2h" },
      { label: "Cancún Airport to Chetumal", typicalDuration: "about 3h to 4h" },
    ],
    stations: [
      { code: "CUN", name: "Cancún Airport", city: "Cancún" },
      { code: "PCM", name: "Playa del Carmen", city: "Playa del Carmen" },
      { code: "TQO", name: "Tulum", city: "Tulum" },
      { code: "BCL", name: "Bacalar", city: "Bacalar" },
      { code: "CTM", name: "Chetumal", city: "Chetumal" },
      { code: "MID", name: "Mérida", city: "Mérida" },
      { code: "CPE", name: "Campeche", city: "Campeche" },
      { code: "PQM", name: "Palenque", city: "Palenque" },
    ],
    faqs: [
      {
        question: "Can I book Tren Maya tickets on this website?",
        answer:
          "No. This website does not take payment. You send us a request, our team checks availability, and we confirm everything with you before anything is booked.",
      },
      {
        question: "Are all stations and routes running?",
        answer:
          "The railway has opened in stages, so the services running can depend on your travel date. We verify the current position for your dates when you send a request.",
      },
      {
        question: "Can I change or cancel my ticket?",
        answer:
          "It depends on the ticket and the rules attached to it. We explain the conditions for your specific ticket before you decide to go ahead.",
      },
      {
        question: "Are the journey times on this page exact?",
        answer:
          "No. Journey times shown are approximate guidance only and vary by service and day. We confirm the schedule for your date when you send a request.",
      },
    ],
  },
];

export function findTrainOperator(slug: string): TrainOperator | undefined {
  return TRAIN_OPERATORS.find((operator) => operator.slug === slug);
}

/** Stations of every operator, de-duplicated by `code`. */
export const allTrainStations: TrainStation[] = Array.from(
  new Map(
    TRAIN_OPERATORS.flatMap((operator) => operator.stations).map((station) => [
      station.code,
      station,
    ]),
  ).values(),
);
