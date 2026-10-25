export interface DestinationData {
  slug: string;
  name: string;
  country: string;
  region: "Europe" | "North America" | "Asia" | "Middle East" | "Oceania";
  imageUrl: string;
  primaryAirports: {
    code: string;
    name: string;
  }[];
  heroSummary: string;
  description: string;
  keyHighlights: string[];
  bestTimeToVisit: string;
  typicalFlightTimes: {
    from: string;
    duration: string;
  }[];
  travelTips: string[];
}

export const POPULAR_DESTINATIONS: DestinationData[] = [
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    region: "Europe",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    primaryAirports: [
      { code: "LHR", name: "Heathrow Airport" },
      { code: "LGW", name: "Gatwick Airport" },
      { code: "LCY", name: "London City Airport" }
    ],
    heroSummary: "Explore nonstop and connection flight options to London, the global aviation crossroads connecting Europe with the Americas.",
    description: "London is one of the world's most sought-after travel destinations, celebrated for its rich history, cultural landmarks, theater scene, and premier shopping. With multiple international airports, London offers extensive flight choices for travelers originating across North America and around the globe.",
    keyHighlights: [
      "Historic icons including Westminster Abbey, Tower of London, and Buckingham Palace",
      "World-class West End theatrical productions and cultural exhibitions",
      "Seamless train links throughout England, Scotland, and the European continent via Eurostar",
      "Exceptional museums, including the British Museum and Tate Modern, with many free public galleries"
    ],
    bestTimeToVisit: "May through September features mild temperatures and long daylight hours. November and December are magical for holiday lights and festive markets.",
    typicalFlightTimes: [
      { from: "New York (JFK)", duration: "approx. 7 hours (nonstop)" },
      { from: "Toronto (YYZ)", duration: "approx. 7.5 hours (nonstop)" },
      { from: "Los Angeles (LAX)", duration: "approx. 10.5 hours (nonstop)" }
    ],
    travelTips: [
      "Heathrow Express offers 15-minute nonstop service between LHR and Paddington Station, while the Elizabeth Line provides affordable, direct travel across Central London.",
      "Oyster cards or contactless payment cards can be tapped directly on all London buses, Tubes, and commuter trains."
    ]
  },
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    region: "Europe",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    primaryAirports: [
      { code: "CDG", name: "Charles de Gaulle Airport" },
      { code: "ORY", name: "Orly Airport" }
    ],
    heroSummary: "Plan your journey to the City of Light with personalized flight routing assistance.",
    description: "Paris stands as the epitome of art, culinary excellence, fashion, and architectural wonder. As a premier hub for flights arriving from North America, Paris offers effortless access to the rest of France and neighboring European nations.",
    keyHighlights: [
      "Architectural icons including the Eiffel Tower, Arc de Triomphe, and Notre-Dame Cathedral",
      "Renowned art collections at the Louvre Museum, Musée d'Orsay, and Centre Pompidou",
      "Legendary culinary scenes from neighborhood bistros to Michelin-starred dining",
      "High-speed TGV rail connectivity to Lyon, Bordeaux, Provence, and the French Riviera"
    ],
    bestTimeToVisit: "Spring (April - June) and Autumn (September - November) offer comfortable weather and fewer tourists than peak midsummer.",
    typicalFlightTimes: [
      { from: "New York (JFK)", duration: "approx. 7.5 hours (nonstop)" },
      { from: "Chicago (ORD)", duration: "approx. 8.5 hours (nonstop)" },
      { from: "Montreal (YUL)", duration: "approx. 7 hours (nonstop)" }
    ],
    travelTips: [
      "From Charles de Gaulle (CDG), the RER B train reaches central Paris in approximately 35-45 minutes.",
      "Most museums require or strongly encourage advance timed-entry reservations, especially the Louvre."
    ]
  },
  {
    slug: "new-york",
    name: "New York City",
    country: "United States",
    region: "North America",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
    primaryAirports: [
      { code: "JFK", name: "John F. Kennedy International Airport" },
      { code: "EWR", name: "Newark Liberty International Airport" },
      { code: "LGA", name: "LaGuardia Airport" }
    ],
    heroSummary: "Access competitive flight options and tailored cabin assistance to the capital of commerce, arts, and media.",
    description: "New York City is an electric global metropolis comprising five vibrant boroughs. From Broadway theaters and world-famous museums to diverse culinary enclaves, NYC is served by three major international airports accommodating hundreds of daily arrivals.",
    keyHighlights: [
      "Landmarks including Central Park, the Empire State Building, and the Statue of Liberty",
      "World-renowned arts at the Metropolitan Museum of Art, MoMA, and Broadway",
      "Unrivaled culinary diversity across Manhattan, Brooklyn, and Queens",
      "Convenient domestic connections to destinations throughout North America"
    ],
    bestTimeToVisit: "Autumn (September to November) and Spring (April to June) offer ideal walking temperatures. December is popular for holiday window displays and Rockefeller Center.",
    typicalFlightTimes: [
      { from: "London (LHR)", duration: "approx. 8 hours (nonstop)" },
      { from: "Los Angeles (LAX)", duration: "approx. 5.5 hours (nonstop)" },
      { from: "Toronto (YYZ)", duration: "approx. 1.5 hours (nonstop)" }
    ],
    travelTips: [
      "Use JFK AirTrain to connect to the subway (A or E lines) or the Long Island Rail Road (LIRR) for fast transit into Manhattan.",
      "Comfortable walking shoes are essential, as walking and public transit are the fastest ways to navigate Manhattan."
    ]
  },
  {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    region: "Asia",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    primaryAirports: [
      { code: "HND", name: "Tokyo Haneda Airport" },
      { code: "NRT", name: "Narita International Airport" }
    ],
    heroSummary: "Navigate transpacific flight options to Japan's captivating capital city.",
    description: "Tokyo blends centuries-old traditions with ultra-modern innovation. Renowned for supreme safety, extraordinary gastronomy, and seamless transit, Tokyo welcomes millions of international travelers each year.",
    keyHighlights: [
      "Iconic districts such as Shibuya, Shinjuku, Ginza, and historic Asakusa",
      "World-renowned gastronomy spanning Michelin-starred counters to ramen alleys",
      "Historic shrines including Meiji Jingu and the Senso-ji temple grounds",
      "Punctual Shinkansen (bullet train) links to Kyoto, Osaka, and Hakone"
    ],
    bestTimeToVisit: "Spring for sakura (cherry blossoms) and Autumn (October - November) for clear skies and vibrant foliage.",
    typicalFlightTimes: [
      { from: "San Francisco (SFO)", duration: "approx. 11 hours (nonstop)" },
      { from: "Los Angeles (LAX)", duration: "approx. 11.5 hours (nonstop)" },
      { from: "London (LHR)", duration: "approx. 13-14 hours (polar/direct)" }
    ],
    travelTips: [
      "Haneda (HND) is much closer to central Tokyo (25 mins by Monorail) than Narita (NRT, 60 mins by Narita Express).",
      "Carrying some physical cash is still recommended for smaller traditional establishments, though digital cards (Suica/Pasmo) are widely accepted."
    ]
  },
  {
    slug: "rome",
    name: "Rome",
    country: "Italy",
    region: "Europe",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    primaryAirports: [
      { code: "FCO", name: "Leonardo da Vinci International Airport (Fiumicino)" },
      { code: "CIA", name: "Ciampino Airport" }
    ],
    heroSummary: "Enquire about flights to the Eternal City, rich in ancient heritage and Mediterranean charm.",
    description: "Rome is an open-air museum where ancient history and modern Italian lifestyle merge seamlessly. Fiumicino Airport (FCO) is the primary gateway for international visitors exploring central and southern Italy.",
    keyHighlights: [
      "Ancient wonders: Colosseum, Roman Forum, and the Pantheon",
      "Vatican City: St. Peter's Basilica and the Sistine Chapel",
      "Classic piazzas: Piazza Navona, Spanish Steps, and Trevi Fountain",
      "Regional Italian cuisine, authentic espresso culture, and artisanal gelato"
    ],
    bestTimeToVisit: "April through June, and September through October provide warm, comfortable days and pleasant evenings.",
    typicalFlightTimes: [
      { from: "New York (JFK)", duration: "approx. 8.5 hours (nonstop)" },
      { from: "London (LHR)", duration: "approx. 2.5 hours (nonstop)" },
      { from: "Toronto (YYZ)", duration: "approx. 8.5 hours (nonstop)" }
    ],
    travelTips: [
      "Leonardo Express train runs every 15-30 minutes non-stop between Fiumicino Airport and Roma Termini station in 32 minutes.",
      "Pre-book admission for the Colosseum and Vatican Museums well in advance to avoid long queue times."
    ]
  },
  {
    slug: "toronto",
    name: "Toronto",
    country: "Canada",
    region: "North America",
    imageUrl: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=800&q=80",
    primaryAirports: [
      { code: "YYZ", name: "Toronto Pearson International Airport" },
      { code: "YTZ", name: "Billy Bishop Toronto City Airport" }
    ],
    heroSummary: "Explore transborder and domestic Canadian flight itineraries to Ontario's dynamic capital.",
    description: "Canada's largest city, Toronto is a multicultural center known for its diverse neighborhoods, lakefront views, sports culture, and vibrant culinary scene.",
    keyHighlights: [
      "CN Tower with panoramic observation decks over Lake Ontario",
      "Cultural districts: Kensington Market, Distillery District, and Queen West",
      "Royal Ontario Museum (ROM) and the Art Gallery of Ontario (AGO)",
      "Day trips to Niagara Falls, situated only 90 minutes away"
    ],
    bestTimeToVisit: "June through September brings warm summer weather, outdoor patio dining, and numerous waterfront festivals.",
    typicalFlightTimes: [
      { from: "London (LHR)", duration: "approx. 8 hours (nonstop)" },
      { from: "New York (LGA/JFK)", duration: "approx. 1.5 hours (nonstop)" },
      { from: "Vancouver (YVR)", duration: "approx. 4.5 hours (nonstop)" }
    ],
    travelTips: [
      "The UP Express train connects Pearson Airport (YYZ) directly to downtown Toronto Union Station in just 25 minutes.",
      "Billy Bishop (YTZ) is an island airport located right next to downtown, ideal for short-haul regional flights."
    ]
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    primaryAirports: [
      { code: "DXB", name: "Dubai International Airport" },
      { code: "DWC", name: "Al Maktoum International Airport" }
    ],
    heroSummary: "Connect seamlessly to Dubai's futuristic skylines and global connecting hub.",
    description: "Dubai has evolved into a global center for tourism, luxury shopping, cutting-edge architecture, and international transit. DXB is one of the world's busiest international passenger airports.",
    keyHighlights: [
      "Burj Khalifa, the tallest architectural structure on the planet",
      "Expansive shopping and entertainment at The Dubai Mall and Mall of the Emirates",
      "Desert safaris, dune adventures, and Arabian Gulf beaches",
      "Major airline connection hub bridging Europe, Asia, Africa, and Australasia"
    ],
    bestTimeToVisit: "November through March offers pleasant temperatures in the mid-20s Celsius (70s Fahrenheit), ideal for outdoor sightseeing.",
    typicalFlightTimes: [
      { from: "London (LHR)", duration: "approx. 7 hours (nonstop)" },
      { from: "New York (JFK)", duration: "approx. 12.5 hours (nonstop)" },
      { from: "Toronto (YYZ)", duration: "approx. 13 hours (nonstop)" }
    ],
    travelTips: [
      "Dubai Metro connects directly to DXB Terminals 1 and 3, offering rapid transit along the Sheikh Zayed Road corridor.",
      "Taxis and ride-hailing services are clean, regulated, and readily available throughout the city."
    ]
  },
  {
    slug: "madrid",
    name: "Madrid",
    country: "Spain",
    region: "Europe",
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80",
    primaryAirports: [
      { code: "MAD", name: "Adolfo Suárez Madrid-Barajas Airport" }
    ],
    heroSummary: "Enquire about direct and one-stop flight options to the cultural heart of Spain.",
    description: "Madrid captivates travelers with its grand boulevards, expansive royal parks, world-renowned Golden Triangle of Art, and lively tapas culture that lasts well into the evening.",
    keyHighlights: [
      "The Prado Museum, Reina Sofía, and Thyssen-Bornemisza museum triangle",
      "The Royal Palace of Madrid and the sprawling El Retiro Park",
      "Historic culinary landmarks including Mercado de San Miguel",
      "Hub for Renfe high-speed AVE trains linking Barcelona, Valencia, and Seville"
    ],
    bestTimeToVisit: "April to May and September to October offer pleasant weather and clear skies.",
    typicalFlightTimes: [
      { from: "Miami (MIA)", duration: "approx. 8.5 hours (nonstop)" },
      { from: "New York (JFK)", duration: "approx. 7.5 hours (nonstop)" },
      { from: "London (LHR)", duration: "approx. 2.5 hours (nonstop)" }
    ],
    travelTips: [
      "Metro Line 8 links Madrid-Barajas Airport directly to Nuevos Ministerios station in central Madrid in 15 minutes.",
      "Dinner in Madrid typically starts later than in Northern Europe, usually after 8:30 PM."
    ]
  }
];

export function getDestinationBySlug(slug: string): DestinationData | undefined {
  return POPULAR_DESTINATIONS.find((d) => d.slug === slug);
}
