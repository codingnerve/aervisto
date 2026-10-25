export interface Airport {
  iata: string;
  name: string;
  city: string;
  country: string;
  region: "US" | "UK" | "Canada" | "Europe" | "Asia" | "Other";
}

export const POPULAR_AIRPORTS: Airport[] = [
  // United States
  { iata: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "United States", region: "US" },
  { iata: "EWR", name: "Newark Liberty International Airport", city: "New York / Newark", country: "United States", region: "US" },
  { iata: "LGA", name: "LaGuardia Airport", city: "New York", country: "United States", region: "US" },
  { iata: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "United States", region: "US" },
  { iata: "ORD", name: "O'Hare International Airport", city: "Chicago", country: "United States", region: "US" },
  { iata: "MIA", name: "Miami International Airport", city: "Miami", country: "United States", region: "US" },
  { iata: "SFO", name: "San Francisco International Airport", city: "San Francisco", country: "United States", region: "US" },
  { iata: "BOS", name: "Logan International Airport", city: "Boston", country: "United States", region: "US" },
  { iata: "DFW", name: "Dallas/Fort Worth International Airport", city: "Dallas", country: "United States", region: "US" },
  { iata: "ATL", name: "Hartsfield-Jackson Atlanta International Airport", city: "Atlanta", country: "United States", region: "US" },
  { iata: "SEA", name: "Seattle-Tacoma International Airport", city: "Seattle", country: "United States", region: "US" },
  { iata: "MCO", name: "Orlando International Airport", city: "Orlando", country: "United States", region: "US" },
  { iata: "IAD", name: "Washington Dulles International Airport", city: "Washington, D.C.", country: "United States", region: "US" },
  { iata: "LAS", name: "Harry Reid International Airport", city: "Las Vegas", country: "United States", region: "US" },

  // United Kingdom
  { iata: "LHR", name: "Heathrow Airport", city: "London", country: "United Kingdom", region: "UK" },
  { iata: "LGW", name: "Gatwick Airport", city: "London", country: "United Kingdom", region: "UK" },
  { iata: "MAN", name: "Manchester Airport", city: "Manchester", country: "United Kingdom", region: "UK" },
  { iata: "EDI", name: "Edinburgh Airport", city: "Edinburgh", country: "United Kingdom", region: "UK" },
  { iata: "BHX", name: "Birmingham Airport", city: "Birmingham", country: "United Kingdom", region: "UK" },
  { iata: "GLA", name: "Glasgow Airport", city: "Glasgow", country: "United Kingdom", region: "UK" },

  // Canada
  { iata: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto", country: "Canada", region: "Canada" },
  { iata: "YVR", name: "Vancouver International Airport", city: "Vancouver", country: "Canada", region: "Canada" },
  { iata: "YUL", name: "Montréal-Trudeau International Airport", city: "Montreal", country: "Canada", region: "Canada" },
  { iata: "YYC", name: "Calgary International Airport", city: "Calgary", country: "Canada", region: "Canada" },
  { iata: "YEG", name: "Edmonton International Airport", city: "Edmonton", country: "Canada", region: "Canada" },
  { iata: "YOW", name: "Ottawa Macdonald-Cartier International Airport", city: "Ottawa", country: "Canada", region: "Canada" },

  // Europe
  { iata: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France", region: "Europe" },
  { iata: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany", region: "Europe" },
  { iata: "AMS", name: "Amsterdam Airport Schiphol", city: "Amsterdam", country: "Netherlands", region: "Europe" },
  { iata: "MAD", name: "Adolfo Suárez Madrid-Barajas Airport", city: "Madrid", country: "Spain", region: "Europe" },
  { iata: "FCO", name: "Leonardo da Vinci International Airport (Fiumicino)", city: "Rome", country: "Italy", region: "Europe" },
  { iata: "DUB", name: "Dublin Airport", city: "Dublin", country: "Ireland", region: "Europe" },
  { iata: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland", region: "Europe" },
  { iata: "BCN", name: "Josep Tarradellas Barcelona-El Prat Airport", city: "Barcelona", country: "Spain", region: "Europe" },
  { iata: "MUC", name: "Munich Airport", city: "Munich", country: "Germany", region: "Europe" },
  { iata: "LIS", name: "Humberto Delgado Airport", city: "Lisbon", country: "Portugal", region: "Europe" },

  // Asia / Middle East / Pacific
  { iata: "DXB", name: "Dubai International Airport", city: "Dubai", country: "United Arab Emirates", region: "Asia" },
  { iata: "DOH", name: "Hamad International Airport", city: "Doha", country: "Qatar", region: "Asia" },
  { iata: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore", region: "Asia" },
  { iata: "HND", name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan", region: "Asia" },
  { iata: "NRT", name: "Narita International Airport", city: "Tokyo", country: "Japan", region: "Asia" },
  { iata: "SYD", name: "Sydney Kingsford Smith Airport", city: "Sydney", country: "Australia", region: "Other" },
  { iata: "MEL", name: "Melbourne Airport", city: "Melbourne", country: "Australia", region: "Other" },
  { iata: "DEL", name: "Indira Gandhi International Airport", city: "Delhi", country: "India", region: "Asia" },
  { iata: "BOM", name: "Chhatrapati Shivaji Maharaj International Airport", city: "Mumbai", country: "India", region: "Asia" }
];

export function searchAirports(query: string): Airport[] {
  if (!query || !query.trim()) return POPULAR_AIRPORTS.slice(0, 10);
  const q = query.toLowerCase().trim();
  return POPULAR_AIRPORTS.filter(
    (a) =>
      a.iata.toLowerCase().includes(q) ||
      a.city.toLowerCase().includes(q) ||
      a.name.toLowerCase().includes(q) ||
      a.country.toLowerCase().includes(q)
  ).slice(0, 8);
}

export function getAirportByIata(iata: string): Airport | undefined {
  return POPULAR_AIRPORTS.find((a) => a.iata.toUpperCase() === iata.toUpperCase());
}
