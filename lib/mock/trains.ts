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
 * The VIA Rail Canada codes below are internal identifiers (nearest airport IATA
 * code) used only to de-duplicate and label search suggestions. They are not
 * official station codes.
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
    id: "via-rail-canada",
    slug: "via-rail-canada",
    code: "VIA",
    name: "VIA Rail Canada",
    country: "Canada",
    logoAccent: "secondary",
    summary:
      "Canada's national intercity passenger rail service, from frequent trains in the busy Windsor to Québec City corridor to long-distance journeys across the country. Send us your dates and we will check live schedules and fares with you.",
    intro:
      "VIA Rail Canada is a national passenger railway linking cities and communities across Canada, with regular services between Toronto, Ottawa, Montréal and Québec City and long-distance trains that cross the country. Use this guide to understand how tickets, seating and baggage generally work, then send us a request and we will confirm the details for your trip.",
    highlights: [
      "Corridor and coast-to-coast routes",
      "Several seat and sleeper types",
      "Requests handled by our team",
    ],
    guideIntro:
      "VIA Rail Canada runs two broad kinds of service. Corridor trains connect cities in the Windsor to Québec City region with frequent daily departures, while long-distance trains, such as the routes towards Vancouver and Halifax, run less often and can include several nights on board. Which suits you depends on your route, your timing and how much comfort you want.",
    whyBook:
      "Many travellers reach Canada by air, so a train is often one leg of a longer trip, for example flying into Toronto or Montréal and continuing by rail. When you send a request to our team, we look at the train and the rest of your itinerary together, so arrival times and station locations are checked as a whole. We confirm fares, schedules and conditions with you before anything is booked, and no payment is taken on this website.",
    howToBook:
      "Start by entering your stations, dates and number of passengers in the search above, or call our team. We review the services running on your dates, talk through the options with you, and confirm the conditions of the ticket before any booking is made. If your plans are still flexible, tell us and we can look at nearby dates as well.",
    manageBooking:
      "Once a trip is confirmed, keep your confirmation details to hand and contact our team if you have questions about your booking. If your plans change, we explain the options that apply to your particular fare and, where needed, how to proceed with the operator.",
    seatClassesIntro:
      "VIA Rail Canada generally offers a choice of accommodation on its services. Availability depends on the train, so the options below are a general guide and not a promise for every route.",
    seatClasses: [
      {
        name: "Economy",
        description:
          "The standard seat on most services, suitable for day trips and shorter journeys. Seat layout and facilities depend on the train.",
      },
      {
        name: "Business",
        description:
          "A step up in comfort on selected services, often with extra space and some added extras. What is included depends on the service, so ask us to confirm before you plan around it.",
      },
      {
        name: "Sleeper accommodation",
        description:
          "Private sleeping accommodation on selected long-distance trains for overnight travel. It is not offered on short corridor services, and we can confirm what is available on your dates.",
      },
    ],
    changePolicy:
      "Whether a ticket can be changed, and at what cost, depends on the fare type you choose and the rules attached to it. Some lower fares are more restricted than others. We confirm the change conditions for your ticket with you before anything is booked, so there are no surprises later.",
    cancellationPolicy:
      "Cancellation rules and any refund or credit also depend on the fare type and on how close to departure you cancel. Do not assume a ticket is refundable. Ask our team before you commit, and we will explain the conditions that apply to your specific ticket.",
    baggageIntro:
      "Baggage allowances on VIA Rail Canada differ by service and ticket, and we do not quote fixed limits here. Tell us what you are travelling with and we will confirm what is permitted on your journey.",
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
      "Most travellers arrive at the station well ahead of departure to find the correct platform, collect any documents and board without rushing. Facilities vary from large city stations to small stops on long-distance routes. Our team can tell you what to expect at your departure station and what identification to carry.",
    popularCorridors: [
      { label: "Toronto to Montréal", typicalDuration: "about 5h to 6h" },
      { label: "Toronto to Ottawa", typicalDuration: "about 4h to 5h" },
      { label: "Montréal to Ottawa", typicalDuration: "about 2h" },
      { label: "Montréal to Québec City", typicalDuration: "about 3h to 3h 30m" },
      { label: "Toronto to Kingston", typicalDuration: "about 2h to 2h 30m" },
      { label: "Toronto to Windsor", typicalDuration: "about 4h to 4h 30m" },
      { label: "Montréal to Halifax", typicalDuration: "about 21h to 23h" },
      { label: "Toronto to Vancouver", typicalDuration: "about 4 days" },
    ],
    stations: [
      { code: "YYZ", name: "Toronto Union Station", city: "Toronto" },
      { code: "YUL", name: "Montréal Central Station", city: "Montréal" },
      { code: "YOW", name: "Ottawa Station", city: "Ottawa" },
      { code: "YQB", name: "Québec City Gare du Palais", city: "Québec City" },
      { code: "YGK", name: "Kingston Station", city: "Kingston" },
      { code: "YQG", name: "Windsor Station", city: "Windsor" },
      { code: "YHZ", name: "Halifax Station", city: "Halifax" },
      { code: "YEG", name: "Edmonton Station", city: "Edmonton" },
      { code: "YJA", name: "Jasper Station", city: "Jasper" },
      { code: "YVR", name: "Vancouver Pacific Central Station", city: "Vancouver" },
    ],
    faqs: [
      {
        question: "Can I book VIA Rail Canada tickets on this website?",
        answer:
          "No. This website does not take payment. You send us a request, our team checks live schedules and fares, and we confirm everything with you before anything is booked.",
      },
      {
        question: "How early should I arrive at the station?",
        answer:
          "Arriving with comfortable time to spare is sensible, especially at large stations or if you are checking baggage. Our team can suggest a timing that suits your service and ticket when we confirm your trip.",
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
