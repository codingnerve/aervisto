export type AirlineRegion =
  | "united-states"
  | "united-kingdom"
  | "canada"
  | "europe"
  | "middle-east"
  | "asia-pacific";

export const AIRLINE_REGION_LABELS: Record<AirlineRegion, string> = {
  "united-states": "United States",
  "united-kingdom": "United Kingdom",
  "canada": "Canada",
  "europe": "Europe",
  "middle-east": "Middle East",
  "asia-pacific": "Asia-Pacific",
};

export interface AirlineData {
  name: string;
  slug: string;
  iata: string;
  brandColor: string;
  country: string;
  region: AirlineRegion;
  hub: string;
  alliance: "oneworld" | "SkyTeam" | "Star Alliance" | null;
  shortDescription: string;
  description: string[];
  popularDestinations: string[];
  cabinClasses: string[];
  fleetHighlights: string[];
  travelTips: string[];
}

export const AIRLINES_DATA: AirlineData[] = [
  // --- United States ---
  {
    name: "Delta Air Lines",
    slug: "delta-air-lines",
    iata: "DL",
    brandColor: "#C8102E",
    country: "United States",
    region: "united-states",
    hub: "Atlanta (ATL), New York (JFK), Los Angeles (LAX)",
    alliance: "SkyTeam",
    shortDescription:
      "Premier US legacy carrier offering extensive transatlantic services to London, Paris, and Amsterdam, along with transcontinental routes.",
    description: [
      "Delta Air Lines operates one of the world's largest airline networks from primary hubs including Atlanta (ATL), New York JFK, Los Angeles (LAX), and Detroit (DTW).",
      "As a founding member of the SkyTeam alliance and joint venture partner with Virgin Atlantic and Air France-KLM, Delta provides seamless transatlantic connectivity with synchronized schedules and reciprocal frequent flyer privileges.",
      "Delta One suites provide full lie-flat seating with closing doors on international widebody aircraft, while Delta Premium Select offers elevated comfort on transatlantic routes."
    ],
    popularDestinations: ["London", "Paris", "Amsterdam", "Rome", "Tokyo", "Los Angeles", "New York"],
    cabinClasses: ["Main Cabin", "Comfort+", "Delta Premium Select", "Delta One"],
    fleetHighlights: ["Airbus A350-900", "Airbus A330-900neo", "Boeing 767-400ER"],
    travelTips: [
      "Delta One passengers departing JFK enjoy access to the dedicated Delta One Lounge with private security check-in.",
      "SkyMiles members can earn and redeem points seamlessly when flying partner transatlantic routes operated by Virgin Atlantic."
    ]
  },
  {
    name: "United Airlines",
    slug: "united-airlines",
    iata: "UA",
    brandColor: "#005DAA",
    country: "United States",
    region: "united-states",
    hub: "Newark (EWR), Chicago (ORD), San Francisco (SFO)",
    alliance: "Star Alliance",
    shortDescription:
      "Major US international airline with daily flights connecting New York, Chicago, and California with Europe, Asia, and Latin America.",
    description: [
      "United Airlines connects travelers across the globe from strategic international gateways including Newark Liberty (EWR), San Francisco (SFO), Chicago O'Hare (ORD), and Washington Dulles (IAD).",
      "As a founding member of Star Alliance and transatlantic transatlantic transatlantic transatlantic partner with Lufthansa and Air Canada, United offers synchronized flight schedules across North America and Europe.",
      "United Polaris business class offers lie-flat suites with Saks Fifth Avenue bedding, alongside dedicated United Premium Plus cabins."
    ],
    popularDestinations: ["London", "Frankfurt", "Tokyo", "Sydney", "Paris", "San Francisco"],
    cabinClasses: ["United Economy", "Economy Plus", "United Premium Plus", "United Polaris Business"],
    fleetHighlights: ["Boeing 787-10 Dreamliner", "Boeing 777-300ER", "Boeing 787-9"],
    travelTips: [
      "Polaris Lounges at Newark, Chicago, and San Francisco feature à la carte restaurant dining exclusively for long-haul business class passengers.",
      "Consider Newark (EWR) departures if you live in New Jersey or Lower Manhattan for direct express rail access."
    ]
  },
  {
    name: "American Airlines",
    slug: "american-airlines",
    iata: "AA",
    brandColor: "#0078D2",
    country: "United States",
    region: "united-states",
    hub: "Dallas/Fort Worth (DFW), Miami (MIA), New York (JFK)",
    alliance: "oneworld",
    shortDescription:
      "Global carrier offering transatlantic routes to the UK and Europe, extensive Latin American connections, and transcon premium services.",
    description: [
      "American Airlines operates extensive international and domestic operations from hubs including Dallas/Fort Worth (DFW), Miami (MIA), New York JFK, and Charlotte (CLT).",
      "Through its transatlantic joint business with British Airways and Iberia in the oneworld alliance, American connects North American travelers to London Heathrow, Madrid, and across Europe.",
      "Flagship Business and Flagship First cabins provide premium lie-flat comfort on long-haul routes and transcontinental JFK-LAX services."
    ],
    popularDestinations: ["London", "Madrid", "Dublin", "Cancún", "Tokyo", "Miami"],
    cabinClasses: ["Main Cabin", "Main Cabin Extra", "Premium Economy", "Flagship Business", "Flagship First"],
    fleetHighlights: ["Boeing 777-300ER", "Boeing 787-9 Dreamliner", "Airbus A321T"],
    travelTips: [
      "American's Flagship First dining at JFK Terminal 8 is available to qualifying international premium passengers.",
      "Codeshare connections with British Airways allow smooth luggage transfer between US cities and regional UK airports."
    ]
  },

  // --- United Kingdom ---
  {
    name: "British Airways",
    slug: "british-airways",
    iata: "BA",
    brandColor: "#075AAA",
    country: "United Kingdom",
    region: "united-kingdom",
    hub: "London Heathrow (LHR), London Gatwick (LGW)",
    alliance: "oneworld",
    shortDescription:
      "The UK's flag carrier, connecting London Heathrow with major US and Canadian cities with multiple daily nonstop flights.",
    description: [
      "British Airways is the UK's premier international airline, operating extensive worldwide routes from London Heathrow (Terminal 5 and Terminal 3) and London Gatwick.",
      "Serving over two dozen North American gateways including New York (JFK/EWR), Boston, Chicago, Los Angeles, Toronto, and Vancouver, British Airways provides unmatched transatlantic frequency.",
      "Club Suite business class features direct-aisle-access lie-flat seats with sliding privacy doors, while World Traveller Plus offers a spacious premium economy cabin."
    ],
    popularDestinations: ["New York", "Los Angeles", "Toronto", "Dubai", "Singapore", "Madrid"],
    cabinClasses: ["World Traveller", "World Traveller Plus", "Club World / Club Suite", "First"],
    fleetHighlights: ["Airbus A350-1000", "Boeing 777-300ER", "Boeing 787-9", "Airbus A380"],
    travelTips: [
      "Terminal 5 at Heathrow offers seamless baggage transfers for passengers continuing onward to European destinations.",
      "Club Suite is available on all Airbus A350s and select retrofitted Boeing 777 and 787 aircraft."
    ]
  },
  {
    name: "Virgin Atlantic",
    slug: "virgin-atlantic",
    iata: "VS",
    brandColor: "#D1103A",
    country: "United Kingdom",
    region: "united-kingdom",
    hub: "London Heathrow (LHR), Manchester (MAN)",
    alliance: "SkyTeam",
    shortDescription:
      "Renowned British carrier delivering transatlantic flights with award-winning Upper Class suites and Premium cabins.",
    description: [
      "Virgin Atlantic specializes in long-haul transatlantic travel connecting London Heathrow and Manchester with major metropolitan hubs across the United States and the Caribbean.",
      "As a member of the SkyTeam alliance and joint venture partner with Delta Air Lines, Virgin Atlantic delivers reciprocal frequent flyer benefits and coordinated connection schedules.",
      "The carrier is celebrated for its distinctive Upper Class service, featuring lie-flat beds, onboard social spaces (The Loft and The Booth), and dedicated Heathrow Clubhouse access."
    ],
    popularDestinations: ["New York (JFK)", "Boston", "Orlando", "Miami", "Los Angeles", "Barbados"],
    cabinClasses: ["Economy Light/Classic/Delight", "Premium", "Upper Class"],
    fleetHighlights: ["Airbus A350-1000", "Airbus A330-900neo", "Boeing 787-9 Dreamliner"],
    travelTips: [
      "The Virgin Atlantic Clubhouse at Heathrow Terminal 3 is considered one of the world's finest airline lounges, complete with à la carte dining and viewing decks.",
      "Economy Delight fares include priority boarding and extra 34-inch legroom."
    ]
  },

  // --- Canada ---
  {
    name: "Air Canada",
    slug: "air-canada",
    iata: "AC",
    brandColor: "#D8232A",
    country: "Canada",
    region: "canada",
    hub: "Toronto Pearson (YYZ), Vancouver (YVR), Montreal (YUL)",
    alliance: "Star Alliance",
    shortDescription:
      "Canada's flag carrier linking Canadian gateways with the US, Europe, Asia, and Australia with signature lie-flat service.",
    description: [
      "Air Canada is Canada's largest airline, operating primary hubs at Toronto Pearson (YYZ), Vancouver International (YVR), and Montréal-Trudeau (YUL).",
      "The airline provides extensive transborder service between Canada and the United States, alongside daily nonstop transatlantic services to London, Paris, and Frankfurt.",
      "Air Canada Signature Class features executive lie-flat pods on international widebody flights, paired with BMW chauffeur transfers for eligible passengers at Toronto Pearson."
    ],
    popularDestinations: ["London", "Paris", "New York", "Tokyo", "Frankfurt", "Los Angeles"],
    cabinClasses: ["Economy", "Premium Economy", "Air Canada Signature Class"],
    fleetHighlights: ["Boeing 787-9 Dreamliner", "Boeing 777-300ER", "Airbus A220-300"],
    travelTips: [
      "US-bound passengers departing Toronto or Vancouver clear US Customs and Border Protection at the Canadian airport before boarding.",
      "The UP Express train connects Toronto Union Station directly to Pearson Terminal 1 in 25 minutes."
    ]
  },
  {
    name: "WestJet",
    slug: "westjet",
    iata: "WS",
    brandColor: "#009DA5",
    country: "Canada",
    region: "canada",
    hub: "Calgary (YYC), Toronto Pearson (YYZ), Vancouver (YVR)",
    alliance: null,
    shortDescription:
      "Calgary-based Canadian airline operating trans-Canada, US transborder, and transatlantic Boeing 787 routes to Europe.",
    description: [
      "WestJet connects Canadian travelers from its primary hub in Calgary (YYC) and secondary bases in Toronto and Vancouver to destinations across North America, Central America, and Europe.",
      "With its modern Boeing 787-9 Dreamliner fleet, WestJet operates nonstop transatlantic services from Calgary to London Heathrow, Paris, and Dublin.",
      "Business cabin on the 787 offers private lie-flat pods with turn-down service and dine-on-demand gastronomy."
    ],
    popularDestinations: ["London", "Paris", "Cancún", "Orlando", "Las Vegas", "Vancouver"],
    cabinClasses: ["Economy", "Premium", "Business (Boeing 787)"],
    fleetHighlights: ["Boeing 787-9 Dreamliner", "Boeing 737 MAX 8"],
    travelTips: [
      "Calgary serves as a convenient connection hub for travelers departing Western Canada for Europe.",
      "WestJet Rewards dollars can be applied toward flight bookings with transparent dollar-for-dollar value."
    ]
  },

  // --- Europe ---
  {
    name: "Air France",
    slug: "air-france",
    iata: "AF",
    brandColor: "#002157",
    country: "France",
    region: "europe",
    hub: "Paris Charles de Gaulle (CDG)",
    alliance: "SkyTeam",
    shortDescription:
      "France's national carrier offering elegant transatlantic services connecting North America to Paris and global destinations.",
    description: [
      "Air France connects travelers to Paris Charles de Gaulle (CDG) and onward destinations across Europe, Africa, and the Middle East.",
      "As a core member of the SkyTeam alliance and transatlantic joint venture partner with Delta and Virgin Atlantic, Air France serves numerous US and Canadian cities.",
      "The business class cabin features refined French cuisine curated by Michelin-starred chefs and direct-aisle-access lie-flat seats."
    ],
    popularDestinations: ["Paris", "Rome", "Nice", "Barcelona", "Dubai", "New York"],
    cabinClasses: ["Economy", "Premium Comfort", "Business", "La Première"],
    fleetHighlights: ["Airbus A350-900", "Boeing 777-300ER", "Boeing 787-9"],
    travelTips: [
      "La Première first class offers one of aviation's most exclusive private transfer and dining experiences at Paris CDG.",
      "Allow at least 90 minutes for connections at Charles de Gaulle when transferring between Schengen and non-Schengen gates."
    ]
  },
  {
    name: "Lufthansa",
    slug: "lufthansa",
    iata: "LH",
    brandColor: "#05164D",
    country: "Germany",
    region: "europe",
    hub: "Frankfurt (FRA), Munich (MUC)",
    alliance: "Star Alliance",
    shortDescription:
      "Premier German airline operating extensive long-haul flights from Frankfurt and Munich to North America and worldwide hubs.",
    description: [
      "Lufthansa is Germany's largest airline, operating major international connecting hubs at Frankfurt (FRA) and Munich (MUC).",
      "As a founding member of Star Alliance, Lufthansa connects seamlessly with United Airlines and Air Canada across North American gateways.",
      "The airline's Allegris cabin generation introduces customizable seating options across Business, Premium Economy, and First Class."
    ],
    popularDestinations: ["Frankfurt", "Munich", "Berlin", "Vienna", "Zurich", "New York"],
    cabinClasses: ["Economy", "Premium Economy", "Business Class", "First Class"],
    fleetHighlights: ["Boeing 747-8 Intercontinental", "Airbus A350-900", "Boeing 787-9"],
    travelTips: [
      "Frankfurt features the dedicated First Class Terminal, offering private security screening and Porsche transfers directly to aircraft gates.",
      "Munich Airport Terminal 2 is celebrated for its efficiency and rapid 45-minute minimum connection times."
    ]
  },
  {
    name: "KLM Royal Dutch Airlines",
    slug: "klm",
    iata: "KL",
    brandColor: "#00A1DE",
    country: "Netherlands",
    region: "europe",
    hub: "Amsterdam Airport Schiphol (AMS)",
    alliance: "SkyTeam",
    shortDescription:
      "The world's oldest operating airline, connecting North America with Amsterdam and over 150 global destinations.",
    description: [
      "KLM Royal Dutch Airlines operates from Amsterdam Airport Schiphol (AMS), one of Europe's most streamlined single-terminal hubs.",
      "Through its partnership with Delta Air Lines in the SkyTeam alliance, KLM serves multiple gateways in the US and Canada.",
      "World Business Class features full lie-flat seats and iconic collectible Delft Blue miniature houses filled with Dutch gin."
    ],
    popularDestinations: ["Amsterdam", "Edinburgh", "Geneva", "Stockholm", "Nairobi", "New York"],
    cabinClasses: ["Economy", "Premium Comfort", "World Business Class"],
    fleetHighlights: ["Boeing 787-10 Dreamliner", "Boeing 777-300ER", "Airbus A350-900"],
    travelTips: [
      "Amsterdam Schiphol is built as a single-terminal concept, making transfers between transatlantic and European flights straightforward.",
      "Collect your complimentary Delft Blue miniature house when traveling in World Business Class."
    ]
  },

  // --- Middle East & Asia-Pacific ---
  {
    name: "Emirates",
    slug: "emirates",
    iata: "EK",
    brandColor: "#D71921",
    country: "United Arab Emirates",
    region: "middle-east",
    hub: "Dubai International Airport (DXB)",
    alliance: null,
    shortDescription:
      "Award-winning global carrier operating iconic Airbus A380s connecting North America to the Middle East, India, and Africa.",
    description: [
      "Emirates operates a premier widebody fleet connecting North America with Dubai and over 140 destinations across six continents.",
      "Famous for its double-decker Airbus A380 aircraft, Emirates offers an onboard lounge and shower spas for First Class passengers.",
      "The carrier also operates transatlantic fifth-freedom flights such as New York JFK to Milan (MXP) and Newark to Athens (ATH)."
    ],
    popularDestinations: ["Dubai", "Mumbai", "Delhi", "Bangkok", "Johannesburg", "Maldives"],
    cabinClasses: ["Economy", "Premium Economy", "Business Class", "First Class Private Suites"],
    fleetHighlights: ["Airbus A380-800", "Boeing 777-300ER"],
    travelTips: [
      "Emirates operates transatlantic nonstop flights between New York JFK and Milan, as well as Newark and Athens.",
      "Dubai International offers complimentary stopover packages and 24-hour transit facilities."
    ]
  },
  {
    name: "Singapore Airlines",
    slug: "singapore-airlines",
    iata: "SQ",
    brandColor: "#FFA000",
    country: "Singapore",
    region: "asia-pacific",
    hub: "Singapore Changi Airport (SIN)",
    alliance: "Star Alliance",
    shortDescription:
      "World-renowned airline famous for exceptional service, ultra-long-range flights, and luxurious cabin products.",
    description: [
      "Singapore Airlines is celebrated worldwide for legendary in-flight hospitality and punctuality, operating from Singapore Changi (SIN).",
      "The airline operates non-stop flights between Singapore and US hubs including New York JFK, Newark (EWR), Los Angeles, and San Francisco.",
      "First Class Suites on the Airbus A380 feature separate beds and leather armchairs, providing unrivaled luxury."
    ],
    popularDestinations: ["Singapore", "Bali", "Sydney", "Melbourne", "Tokyo", "New York"],
    cabinClasses: ["Economy", "Premium Economy", "Business Class", "First Class / Suites"],
    fleetHighlights: ["Airbus A350-900ULR", "Airbus A380-800", "Boeing 777-300ER"],
    travelTips: [
      "Singapore Airlines operates the world's longest commercial flights between New York/Newark and Singapore, configured with Business and Premium Economy cabins.",
      "Singapore Changi Airport features the Jewel waterfall and transit amenities consistently ranked best in the world."
    ]
  }
];

export function getAirlineBySlug(slug: string): AirlineData | undefined {
  return AIRLINES_DATA.find((a) => a.slug === slug);
}

export function getRelatedAirlines(current: AirlineData): AirlineData[] {
  return AIRLINES_DATA.filter((a) => a.slug !== current.slug && (a.region === current.region || a.alliance === current.alliance)).slice(0, 3);
}
