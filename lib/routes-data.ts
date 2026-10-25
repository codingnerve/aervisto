export interface RouteData {
  slug: string;
  originCity: string;
  originCountry: string;
  originAirport: string;
  originIata: string;
  destinationCity: string;
  destinationCountry: string;
  destinationAirport: string;
  destinationIata: string;
  distanceMiles: number;
  typicalDuration: string;
  timeDifference: string;
  category: "Transatlantic" | "North America" | "Transpacific" | "European Connection";
  imageUrl: string;
  heroSummary: string;
  overview: string;
  travelTips: string[];
  bestTimeToFly: string;
  airportInfo: {
    departure: string;
    arrival: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const POPULAR_ROUTES: RouteData[] = [
  {
    slug: "new-york-to-london",
    originCity: "New York",
    originCountry: "United States",
    originAirport: "John F. Kennedy International Airport (JFK) / Newark (EWR)",
    originIata: "JFK",
    destinationCity: "London",
    destinationCountry: "United Kingdom",
    destinationAirport: "Heathrow Airport (LHR) / Gatwick (LGW)",
    destinationIata: "LHR",
    distanceMiles: 3450,
    typicalDuration: "7h 00m - 7h 45m (nonstop)",
    timeDifference: "+5 Hours (London ahead)",
    category: "Transatlantic",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    heroSummary: "Enquire about nonstop and multi-cabin flight options connecting New York with London gateways.",
    overview: "The New York to London air corridor is among the world's most active transatlantic aviation routes. Whether you need overnight red-eye flights that land early in the UK or daytime departures that ease jetlag, our flight enquiry team helps compare verified options across major transatlantic carriers, premium cabin configurations, and flexible ticket conditions.",
    travelTips: [
      "Overnight flights from JFK or EWR generally depart between 6:00 PM and 10:30 PM, arriving in London early morning.",
      "A select number of rare daytime morning flights exist from JFK, which allow arriving in London late evening to sleep normally.",
      "Check whether your itinerary arrives at Heathrow (LHR) with direct Tube/Elizabeth Line access or Gatwick (LGW) with Gatwick Express train connections."
    ],
    bestTimeToFly: "Eastbound overnight flights are operated year-round with frequent frequencies. Summer experiences elevated passenger volume, while late autumn and winter offer more cabin flexibility.",
    airportInfo: {
      departure: "Departures operate primarily from JFK Terminals 1, 4, 7, and 8, or Newark Terminal B and C, depending on the operating airline.",
      arrival: "Heathrow operations use Terminals 2, 3, 4, or 5. Plan for 45-60 minutes for passport control and baggage collection during peak morning rush."
    },
    faqs: [
      {
        question: "How does Aervisto assist with New York to London flights?",
        answer: "When you submit your travel dates, cabin preference, and passenger count, our booking agents review current scheduled options across major network carriers to provide you with verified routing details and fare rules over phone or email."
      },
      {
        question: "Can I request Premium Economy or Business Class cabins on this route?",
        answer: "Yes. Transatlantic routes feature varied seat products, including lie-flat suites and dedicated premium economy cabins. Inform our team of your comfort requirements, and we will highlight matching itineraries."
      },
      {
        question: "Can I depart from Newark (EWR) instead of JFK?",
        answer: "Certainly. Our agents can evaluate departures from both JFK and EWR to find the most convenient airport and schedule for your location."
      }
    ]
  },
  {
    slug: "los-angeles-to-new-york",
    originCity: "Los Angeles",
    originCountry: "United States",
    originAirport: "Los Angeles International Airport (LAX)",
    originIata: "LAX",
    destinationCity: "New York",
    destinationCountry: "United States",
    destinationAirport: "John F. Kennedy (JFK) / Newark (EWR)",
    destinationIata: "JFK",
    distanceMiles: 2475,
    typicalDuration: "5h 15m - 5h 45m (nonstop)",
    timeDifference: "+3 Hours (New York ahead)",
    category: "North America",
    imageUrl: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80",
    heroSummary: "Connect the US West Coast with New York through dedicated transcontinental flight enquiries.",
    overview: "Transcontinental flights between LAX and the New York area feature premium transcon equipment, lie-flat seating on select carriers, and high frequency throughout the day. Our team assists business travelers, families, and leisure passengers in finding suitable schedules without dealing with confusing self-booking engines.",
    travelTips: [
      "Transcontinental red-eyes depart LAX late night (9:00 PM - 11:59 PM) and arrive in NYC around sunrise.",
      "Morning westbound departures face head winds, making the return trip roughly 30 to 45 minutes longer.",
      "Specify your preference for JFK, EWR, or LGA depending on whether your final destination is Manhattan, Brooklyn, or New Jersey."
    ],
    bestTimeToFly: "Flights operate around the clock every day. Mid-week departures (Tuesdays and Wednesdays) typically offer smoother transit through LAX and JFK terminals.",
    airportInfo: {
      departure: "LAX is accessible via World Way. Allow 2 hours prior to scheduled departure for security screening.",
      arrival: "JFK provides AirTrain connections to the MTA subway and LIRR. EWR offers NJ Transit connections directly into NY Penn Station."
    },
    faqs: [
      {
        question: "Can I request transcontinental lie-flat seats between LAX and JFK?",
        answer: "Yes. Several legacy carriers operate widebody or premium transcon narrowbody aircraft with dedicated lie-flat seating. Let our booking agent know your cabin requirements."
      },
      {
        question: "How far in advance should I enquire about LAX to NYC flights?",
        answer: "Enquiring 3 to 6 weeks in advance typically provides the greatest selection of flight times and fare types."
      }
    ]
  },
  {
    slug: "toronto-to-london",
    originCity: "Toronto",
    originCountry: "Canada",
    originAirport: "Toronto Pearson International Airport (YYZ)",
    originIata: "YYZ",
    destinationCity: "London",
    destinationCountry: "United Kingdom",
    destinationAirport: "Heathrow Airport (LHR) / Gatwick (LGW)",
    destinationIata: "LHR",
    distanceMiles: 3550,
    typicalDuration: "7h 15m - 7h 50m (nonstop)",
    timeDifference: "+5 Hours (London ahead)",
    category: "Transatlantic",
    imageUrl: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=800&q=80",
    heroSummary: "Personalized flight enquiry assistance for travelers departing Eastern Canada to London gateways.",
    overview: "Toronto Pearson (YYZ) is Canada's primary international hub, offering daily nonstop and connecting services to London Heathrow and Gatwick. Aervisto helps Canadian residents and international visitors explore flight options with full clarity on luggage allowances, seat types, and ticket flexibility.",
    travelTips: [
      "Overnight services depart YYZ in the evening, arriving in London the following morning.",
      "Check baggage allowances carefully, as basic economy transatlantic fares may restrict checked luggage.",
      "Ensure your passport validity meets UK entry requirements (valid for the full duration of your intended stay)."
    ],
    bestTimeToFly: "Spring and Autumn offer pleasant temperatures in the UK with fewer crowds than the midsummer travel season.",
    airportInfo: {
      departure: "YYZ Terminal 1 and Terminal 3 both operate international departures. UP Express train connects downtown Toronto Union Station to Pearson in 25 minutes.",
      arrival: "Heathrow Terminal 2 and 3 receive Canadian flights. Gatwick connects to Central London via the Gatwick Express."
    },
    faqs: [
      {
        question: "Does Aervisto assist with Canadian Dollar (CAD) enquiries?",
        answer: "Yes, our team serves travelers across Canada and can discuss options aligned with Canadian travel originating points."
      },
      {
        question: "Are nonstop flights available from Toronto to London?",
        answer: "Yes, multiple carriers operate nonstop service between YYZ and LHR/LGW. Our team can detail nonstop vs one-stop routing alternatives."
      }
    ]
  },
  {
    slug: "london-to-new-york",
    originCity: "London",
    originCountry: "United Kingdom",
    originAirport: "Heathrow Airport (LHR) / Gatwick (LGW)",
    originIata: "LHR",
    destinationCity: "New York",
    destinationCountry: "United States",
    destinationAirport: "John F. Kennedy (JFK) / Newark (EWR)",
    destinationIata: "JFK",
    distanceMiles: 3450,
    typicalDuration: "7h 55m - 8h 35m (nonstop)",
    timeDifference: "-5 Hours (New York behind)",
    category: "Transatlantic",
    imageUrl: "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=800&q=80",
    heroSummary: "Westbound transatlantic flight options from London to New York with personalized booking assistance.",
    overview: "Flying westbound from London to New York gains 5 hours, meaning daylight departures from Heathrow in the morning or early afternoon land in New York on the same calendar afternoon. Our team assists UK travelers with transparent route comparisons, US entry travel requirements guidance, and cabin selections.",
    travelTips: [
      "Remember that non-US passport holders require an approved ESTA prior to boarding any US-bound flight.",
      "Mid-day departures from LHR (e.g., 11:00 AM - 2:00 PM) arrive in NYC between 2:00 PM and 5:00 PM local time.",
      "Consider Terminal 5 or Terminal 3 departures based on your carrier."
    ],
    bestTimeToFly: "Flights operate regularly year-round. Autumn (September to November) is a popular period for crisp weather and cultural events in New York.",
    airportInfo: {
      departure: "Heathrow is accessible via the Elizabeth Line, Piccadilly Line, or Heathrow Express from London Paddington.",
      arrival: "US Customs and Border Protection inspection takes place at your arrival terminal (JFK or EWR)."
    },
    faqs: [
      {
        question: "Can UK customers call a dedicated UK booking line?",
        answer: "Yes, when configured, Aervisto provides dedicated regional contact details for our UK clientele."
      },
      {
        question: "How do I choose between arriving at JFK or Newark?",
        answer: "JFK offers convenient access to Long Island, Brooklyn, and Midtown Manhattan. Newark is often faster for Lower Manhattan, New Jersey, and western NYC suburbs."
      }
    ]
  },
  {
    slug: "chicago-to-paris",
    originCity: "Chicago",
    originCountry: "United States",
    originAirport: "O'Hare International Airport (ORD)",
    originIata: "ORD",
    destinationCity: "Paris",
    destinationCountry: "France",
    destinationAirport: "Charles de Gaulle Airport (CDG)",
    destinationIata: "CDG",
    distanceMiles: 4150,
    typicalDuration: "8h 15m - 8h 55m (nonstop)",
    timeDifference: "+7 Hours (Paris ahead)",
    category: "Transatlantic",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    heroSummary: "Explore Midwest-to-Europe flight itineraries from Chicago O'Hare directly to Paris.",
    overview: "Connect the American Midwest to France with nonstop and single-connection routing alternatives. Aervisto's flight booking specialists review seasonal schedules, alliance connections, and cabin classes so you can make an informed travel choice.",
    travelTips: [
      "Most eastbound transatlantic flights leave O'Hare in the late afternoon or early evening.",
      "Paris CDG is a large airport; allow at least 90 minutes if you have an onward connecting flight in Europe.",
      "Confirm baggage rules for European domestic connections if your final destination is elsewhere in France."
    ],
    bestTimeToFly: "Late spring (May - June) and early fall (September - October) provide ideal weather for exploring Paris and the French regions.",
    airportInfo: {
      departure: "Chicago O'Hare Terminal 1, 3, or 5 depending on the airline. The CTA Blue Line connects downtown Chicago directly to the airport.",
      arrival: "Charles de Gaulle (CDG) RER B train connects airport terminals directly to central Paris (Gare du Nord, Châtelet)."
    },
    faqs: [
      {
        question: "Can Aervisto assist with multi-city trips starting in Paris?",
        answer: "Yes, open-jaw and multi-city itineraries (e.g., flying into Paris and returning from Rome or London) can be requested through our enquiry form."
      },
      {
        question: "Are there both nonstop and connecting options from ORD?",
        answer: "Yes, our team can compare nonstop services alongside single-layover alternatives through cities like London, Dublin, or Montreal."
      }
    ]
  },
  {
    slug: "vancouver-to-toronto",
    originCity: "Vancouver",
    originCountry: "Canada",
    originAirport: "Vancouver International Airport (YVR)",
    originIata: "YVR",
    distanceMiles: 2085,
    destinationCity: "Toronto",
    destinationCountry: "Canada",
    destinationAirport: "Toronto Pearson International Airport (YYZ)",
    destinationIata: "YYZ",
    typicalDuration: "4h 25m - 4h 50m (nonstop)",
    timeDifference: "+3 Hours (Toronto ahead)",
    category: "North America",
    imageUrl: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=800&q=80",
    heroSummary: "Trans-Canada flight enquiry service connecting British Columbia with Ontario.",
    overview: "The Vancouver to Toronto domestic corridor connects Canada's Pacific coast with Ontario. With frequent daily flights spanning early morning departures to late night red-eyes, our flight enquiry agents assist travelers with schedule comparisons and seat selections.",
    travelTips: [
      "Eastbound flights are faster due to prevailing westerly jet streams.",
      "Red-eye flights leave YVR around 10:30 PM - 11:30 PM and land at YYZ around 6:00 AM local time.",
      "The Canada Line SkyTrain provides rapid 26-minute transit from downtown Vancouver to YVR."
    ],
    bestTimeToFly: "Summer is peak travel time across Canada. Early spring and late autumn provide greater availability and easier airport transit.",
    airportInfo: {
      departure: "Vancouver YVR Domestic Terminal features modern amenities and clear signposting for trans-Canada departures.",
      arrival: "Toronto YYZ Terminal 1 or Terminal 3 with UP Express link to downtown Union Station."
    },
    faqs: [
      {
        question: "Can I enquire about domestic Canadian flights on Aervisto?",
        answer: "Yes, our booking team handles domestic Canadian routes, transborder US flights, and long-haul international routes."
      },
      {
        question: "Do you assist with family bookings and special luggage?",
        answer: "Yes, indicate traveling with children, ski equipment, or special baggage in your enquiry, and an agent will verify airline rules."
      }
    ]
  },
  {
    slug: "san-francisco-to-tokyo",
    originCity: "San Francisco",
    originCountry: "United States",
    originAirport: "San Francisco International Airport (SFO)",
    originIata: "SFO",
    destinationCity: "Tokyo",
    destinationCountry: "Japan",
    destinationAirport: "Haneda Airport (HND) / Narita (NRT)",
    destinationIata: "HND",
    distanceMiles: 5150,
    typicalDuration: "10h 45m - 11h 30m (nonstop)",
    timeDifference: "+16 Hours / Crosses Date Line",
    category: "Transpacific",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    heroSummary: "Explore transpacific flight connections between California and Tokyo.",
    overview: "Crossing the Pacific from San Francisco to Tokyo involves crossing the International Date Line. Whether you prioritize landing at Tokyo Haneda (closer to central Tokyo) or Narita, our team provides personalized guidance on airlines, layovers, and cabin comforts.",
    travelTips: [
      "Notice that westbound flights cross the Date Line, arriving the next calendar day.",
      "Haneda (HND) is only 25 minutes from central Tokyo via Tokyo Monorail or Keikyu Line; Narita (NRT) is approximately 60 minutes via Narita Express.",
      "Look into premium economy or business cabins for the 11-hour crossing."
    ],
    bestTimeToFly: "Cherry blossom season (late March - April) and autumn foliage (October - November) are popular seasons with high demand.",
    airportInfo: {
      departure: "SFO International Terminal offers BART rail service directly into San Francisco and the East Bay.",
      arrival: "Both Haneda and Narita offer efficient rail links, foreign exchange, and luggage delivery services into central Tokyo."
    },
    faqs: [
      {
        question: "Which airport in Tokyo should I fly into?",
        answer: "Tokyo Haneda (HND) is much closer to central downtown Tokyo, while Narita (NRT) handles many long-haul international flights. Our team can help evaluate both options."
      },
      {
        question: "How do layovers work on transpacific routes?",
        answer: "Nonstop flights exist between SFO and Tokyo, but one-stop itineraries via Honolulu or Vancouver can also be explored if requested."
      }
    ]
  },
  {
    slug: "miami-to-madrid",
    originCity: "Miami",
    originCountry: "United States",
    originAirport: "Miami International Airport (MIA)",
    originIata: "MIA",
    destinationCity: "Madrid",
    destinationCountry: "Spain",
    destinationAirport: "Adolfo Suárez Madrid-Barajas Airport (MAD)",
    destinationIata: "MAD",
    distanceMiles: 4420,
    typicalDuration: "8h 40m - 9h 15m (nonstop)",
    timeDifference: "+6 Hours (Madrid ahead)",
    category: "Transatlantic",
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80",
    heroSummary: "Enquire about direct and connecting flights from South Florida to Madrid.",
    overview: "Miami to Madrid is a major cultural and commercial bridge between the southeastern United States and southern Europe. Aervisto helps travelers discover suitable flight options, cabin classes, and seasonal schedules with human agent support.",
    travelTips: [
      "Flights typically depart MIA in the late afternoon or evening, landing in Madrid around mid-morning.",
      "Madrid-Barajas Terminal 4 (T4/T4S) is one of Europe's largest terminals, connected to the city via Metro Line 8 and Cercanías trains.",
      "Check Schengen visa requirements if you carry a non-US or non-EU passport."
    ],
    bestTimeToFly: "Spring (April - May) and early autumn (September - October) bring pleasant temperatures to the Iberian peninsula.",
    airportInfo: {
      departure: "MIA Concourse D and E handle major transatlantic flights. MIA Mover links the airport to the Miami Intermodal Center.",
      arrival: "Madrid Barajas Terminal 4S handles non-Schengen arrivals. Automated people movers connect satellite terminals."
    },
    faqs: [
      {
        question: "Can I connect onward to other Spanish cities like Barcelona or Seville?",
        answer: "Yes, our booking agents can assist with through-ticketing connecting to domestic Spanish routes or rail-air partnerships."
      },
      {
        question: "Are there flexible fare options for this route?",
        answer: "Yes, when you enquire, let us know if you require refundable or changeable ticket conditions."
      }
    ]
  }
];

export function getRouteBySlug(slug: string): RouteData | undefined {
  return POPULAR_ROUTES.find((r) => r.slug === slug);
}
