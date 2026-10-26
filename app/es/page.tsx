import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import {
  Phone,
  Plane,
  Clock,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Search,
  Star,
  CheckCircle2,
  Calendar,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { HeroFlightSearchSpanish } from "@/components/flight-search/HeroFlightSearchSpanish";
import { FlightEnquiryFormSpanish } from "@/components/flight-enquiry/FlightEnquiryFormSpanish";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { getPhoneConfig, formatTelHref } from "@/lib/phone-config";

export const metadata: Metadata = {
  title: "Aervisto en Español | Reserva de Vuelos Internacionales y Asistencia Telefónica",
  description:
    "Consulte rutas aéreas internacionales y llame directamente a nuestros especialistas en reservas en español. Tarifas mayoristas exclusivas, atención personalizada y sin robots.",
};

export default function SpanishHomePage() {
  const config = getPhoneConfig();
  const phoneNumber = config.defaultPhone;
  const telHref = formatTelHref(phoneNumber);

  const spanishFaqs = [
    {
      question: "¿Cómo ayuda Aervisto con la reserva de billetes de avión internacionales?",
      answer:
        "Aervisto ofrece un servicio personalizado de consulta y asistencia para reservas aéreas. En lugar de obligarle a navegar complicados motores de búsqueda automatizados, nuestros agentes humanos investigan opciones de vuelos en vivo según su ruta, fechas, clase de cabina y presupuesto, gestionando su reserva directamente por teléfono.",
    },
    {
      question: "¿El sitio web vende o emite billetes directamente en línea?",
      answer:
        "No. Aervisto no emite billetes de manera automática a través de la web. Todas las consultas son atendidas por agentes de reservas certificados que verifican horarios, franquicias de equipaje y condiciones de tarifa antes de coordinar la emisión mediante canales aéreos autorizados.",
    },
    {
      question: "¿Por qué los viajeros prefieren llamar a un agente en vez de usar motores de búsqueda?",
      answer:
        "Las aerolíneas frecuentemente ofrecen tarifas consolidadas y mayoristas que no se pueden publicar en buscadores web convencionales. Además, nuestros agentes configuran rutas complejas con múltiples destinos, selección de asientos contiguos para familias y brindan asistencia telefónica inmediata si su vuelo sufre cancelaciones o retrasos.",
    },
    {
      question: "¿Qué países y destinos gestionan habitualmente?",
      answer:
        "Asistimos principalmente a viajeros con origen o destino en España, Estados Unidos, Reino Unido, Canadá, México, Latinoamérica y conexiones intercontinentales de larga distancia en todo el mundo.",
    },
    {
      question: "¿Puedo solicitar cabinas Turista Premium, Ejecutiva (Business) o Primera Clase?",
      answer:
        "Sí. Nuestros especialistas están ampliamente capacitados en cabinas premium, asientos cama (lie-flat) para vuelos transatlánticos y suites internacionales en las mejores alianzas aéreas del mundo (Oneworld, SkyTeam, Star Alliance).",
    },
    {
      question: "¿Puedo hablar directamente con un agente en español ahora mismo?",
      answer:
        "¡Por supuesto! Puede llamar directamente a nuestra línea de atención telefónica durante el horario de soporte. Nuestros agentes están listos para atenderle en español y cotizar su vuelo en tiempo real.",
    },
  ];

  const spanishDestinations = [
    {
      name: "Londres",
      country: "Reino Unido",
      region: "Europa",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      airports: ["LHR", "LGW", "LCY"],
      summary: "Opciones de vuelos directos y con escala a Londres, el centro neurálgico de la aviación mundial.",
      bestTime: "Mayo a Septiembre y temporada navideña",
    },
    {
      name: "París",
      country: "Francia",
      region: "Europa",
      imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      airports: ["CDG", "ORY"],
      summary: "Conexiones aéreas diarias a los aeropuertos Charles de Gaulle y Orly con tarifas preferentes.",
      bestTime: "Primavera y Otoño para clima idóneo",
    },
    {
      name: "Cancún",
      country: "México",
      region: "América",
      imageUrl: "https://images.unsplash.com/photo-1510097467424-192d713fd8c2?auto=format&fit=crop&w=800&q=80",
      airports: ["CUN"],
      summary: "Vuelos vacacionales directos hacia el Caribe mexicano con asistencia completa de equipaje.",
      bestTime: "Diciembre a Abril para días soleados",
    },
    {
      name: "Tokio",
      country: "Japón",
      region: "Asia",
      imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      airports: ["HND", "NRT"],
      summary: "Vuelos transpacíficos y euroasiáticos hacia Tokio Haneda y Narita en clases turista y ejecutiva.",
      bestTime: "Marzo a Mayo y Octubre a Noviembre",
    },
  ];

  const spanishRoutes = [
    {
      originIata: "MAD",
      originCity: "Madrid",
      destIata: "CUN",
      destCity: "Cancún",
      duration: "10h 30m (directo)",
      distance: 4680,
      category: "Caribe & Transatlántico",
      imageUrl: "https://images.unsplash.com/photo-1510097467424-192d713fd8c2?auto=format&fit=crop&w=800&q=80",
      summary: "Ruta directa de alta demanda entre España y el Caribe mexicano con opciones chárter y regulares.",
    },
    {
      originIata: "JFK",
      originCity: "Nueva York",
      destIata: "LHR",
      destCity: "Londres",
      duration: "7h 15m (directo)",
      distance: 3450,
      category: "Transatlántico",
      imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      summary: "Corredor aéreo líder con múltiples salidas diarias nocturnas y diurnas entre JFK/EWR y Heathrow.",
    },
    {
      originIata: "MAD",
      originCity: "Madrid",
      destIata: "MIA",
      destCity: "Miami",
      duration: "9h 45m (directo)",
      distance: 4420,
      category: "España - EE.UU.",
      imageUrl: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=800&q=80",
      summary: "Conexión preferida entre Europa y Florida con tarifas especiales de agente en cabinas premium.",
    },
    {
      originIata: "LAX",
      originCity: "Los Ángeles",
      destIata: "HND",
      destCity: "Tokio",
      duration: "11h 50m (directo)",
      distance: 5480,
      category: "Transpacífico",
      imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
      summary: "Vuelos transpacíficos con asientos cama y atención gastronómica de primer nivel.",
    },
    {
      originIata: "MIA",
      originCity: "Miami",
      destIata: "BOG",
      destCity: "Bogotá",
      duration: "3h 50m (directo)",
      distance: 1510,
      category: "Américas",
      imageUrl: "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=800&q=80",
      summary: "Conexiones rápidas y frecuentes entre el sur de Florida y los principales hubs de Sudamérica.",
    },
    {
      originIata: "BCN",
      originCity: "Barcelona",
      destIata: "JFK",
      destCity: "Nueva York",
      duration: "8h 45m (directo)",
      distance: 3830,
      category: "Transatlántico",
      imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80",
      summary: "Vuelos directos entre Cataluña y Nueva York con tarifas mayoristas reservables por teléfono.",
    },
  ];

  const spanishAirlines = [
    { name: "Iberia", code: "IB", hub: "Madrid Barajas (MAD)" },
    { name: "Air Europa", code: "UX", hub: "Madrid Barajas (MAD)" },
    { name: "British Airways", code: "BA", hub: "Londres Heathrow (LHR)" },
    { name: "American Airlines", code: "AA", hub: "Miami / Dallas / JFK" },
    { name: "Delta Air Lines", code: "DL", hub: "Atlanta / Nueva York JFK" },
    { name: "United Airlines", code: "UA", hub: "Newark / Houston / Chicago" },
    { name: "Air France", code: "AF", hub: "París Charles de Gaulle (CDG)" },
    { name: "Emirates", code: "EK", hub: "Dubái Internacional (DXB)" },
  ];

  const spanishReviews = [
    {
      name: "Carlos & Elena M.",
      location: "Madrid, España",
      route: "Madrid (MAD) ⇄ Cancún (CUN)",
      quote:
        "Necesitábamos coordinar 5 plazas familiares para vacaciones de verano. En las webs los precios cambiaban a cada clic. Llamamos a Aervisto y un asesor en español nos consiguió plazas contiguas y tarifa mayorista con equipaje incluido.",
      rating: 5,
    },
    {
      name: "Roberto S.",
      location: "Miami, FL",
      route: "Miami (MIA) ⇄ Madrid (MAD)",
      quote:
        "Encontraron opciones en Clase Business con asientos lie-flat para mi viaje de negocios a un precio que no aparecía en ningún buscador online. La atención telefónica fue impecable y rápida.",
      rating: 5,
    },
    {
      name: "Beatriz L.",
      location: "Barcelona, España",
      route: "Barcelona (BCN) ⇄ Nueva York (JFK)",
      quote:
        "Tuvimos un cambio de horario de último momento por parte de la aerolínea y al llamar nos contestaron de inmediato sin esperas musicales. Nos reubicaron en otro vuelo sin costo extra. Tranquilidad total.",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section id="buscar-vuelo" className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center text-white py-14 sm:py-20 overflow-hidden">
        {/* Background Aircraft Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80"
            alt="Avión comercial volando sobre las nubes al amanecer"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1D32]/95 via-[#152B49]/85 to-[#0E1D32]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold text-sky-200 uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Atención Personalizada en Español</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
              ¿A dónde le gustaría volar en su próximo viaje?
            </h1>
            <p className="text-sm sm:text-lg text-slate-200 font-medium max-w-2xl mx-auto drop-shadow">
              Consulte rutas de vuelos en tiempo real. Conéctese con un especialista en reservas para acceder a tarifas mayoristas y atención telefónica sin esperas.
            </p>
          </div>

          {/* Hero Search Flight Bar with Instant Call Popup */}
          <div className="max-w-5xl mx-auto">
            <HeroFlightSearchSpanish />
          </div>

          {/* Sub-Hero Trust Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-200 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Tarifas Mayoristas No Publicadas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Agente Humano en Español</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Rutas España, EE.UU., UK y Latinoamérica</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#ED6029]" />
              <a href={telHref} className="hover:underline font-bold text-white">
                Llamar al {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRENDING FLIGHT DESTINATIONS */}
      <section id="destinos" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6]">
                Destinos Más Solicitados
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#152B49] mt-1 tracking-tight">
                Destinos Populares Esta Temporada
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Principales ciudades y centros de conexión con vuelos regulares diarios y tarifas preferenciales.
              </p>
            </div>

            <a
              href={telHref}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2463A6] hover:text-[#152B49] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#ED6029]" />
              <span>Consultar tarifas de cualquier destino ({phoneNumber})</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spanishDestinations.map((dest) => (
              <div
                key={dest.name}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={dest.imageUrl}
                      alt={`Vuelos a ${dest.name}, ${dest.country}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-800 shadow-sm">
                        {dest.region}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-sky-200 font-semibold mb-0.5 drop-shadow">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{dest.country}</span>
                      </div>
                      <h3 className="text-xl font-black text-white drop-shadow-md">
                        {dest.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {dest.airports.map((code) => (
                        <span
                          key={code}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-mono font-bold rounded"
                        >
                          {code}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {dest.summary}
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#ED6029]" />
                        <span className="line-clamp-1">{dest.bestTime}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-4 sm:px-5 sm:pb-5 flex items-center justify-between gap-3">
                  <a
                    href={telHref}
                    className="text-xs font-bold text-[#2463A6] hover:text-[#152B49] inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-[#ED6029]" />
                    <span>Llamar</span>
                  </a>

                  <a
                    href={telHref}
                    className="px-3.5 py-2 bg-[#152B49] hover:bg-[#2463A6] text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3 h-3 text-white" />
                    <span>Consultar Tarifas</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. POPULAR FLIGHT CORRIDORS SHOWCASE */}
      <section id="rutas" className="py-16 sm:py-20 bg-[#F4F7FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6]">
                Corredores Aéreos
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#152B49] mt-1 tracking-tight">
                Rutas Destacadas y Conexiones Directas
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Vuelos de alta frecuencia entre España, Estados Unidos, Reino Unido y América Latina.
              </p>
            </div>

            <a
              href={telHref}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2463A6] hover:text-[#152B49] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#ED6029]" />
              <span>Cotizar cualquier ruta por teléfono</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spanishRoutes.map((route, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={route.imageUrl}
                      alt={`Vuelos de ${route.originCity} a ${route.destCity}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white border border-white/20">
                        {route.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-slate-800 flex items-center gap-1 shadow-sm">
                        <Clock className="w-3 h-3 text-[#2463A6]" />
                        <span>{route.duration}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-2xl font-black font-mono tracking-tight text-white drop-shadow">
                          {route.originIata}
                        </span>
                        <span className="block text-xs text-slate-200 font-medium">
                          {route.originCity}
                        </span>
                      </div>

                      <div className="flex-1 px-3 flex flex-col items-center">
                        <div className="w-full flex items-center justify-center gap-1">
                          <span className="h-0.5 w-full bg-white/40" />
                          <Plane className="w-4 h-4 text-[#ED6029] transform rotate-90 flex-shrink-0" />
                          <span className="h-0.5 w-full bg-white/40" />
                        </div>
                        <span className="text-[10px] text-slate-300 mt-0.5">
                          {route.distance} mi
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-2xl font-black font-mono tracking-tight text-white drop-shadow">
                          {route.destIata}
                        </span>
                        <span className="block text-xs text-slate-200 font-medium">
                          {route.destCity}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {route.summary}
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Tarifas con agente: <strong className="text-emerald-600 font-bold">Descuentos Especiales</strong></span>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-4 sm:px-5 sm:pb-5 flex items-center justify-between gap-3">
                  <a
                    href={telHref}
                    className="text-xs font-bold text-[#2463A6] hover:text-[#152B49] inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-[#ED6029]" />
                    <span>Llamar al {phoneNumber}</span>
                  </a>

                  <a
                    href={telHref}
                    className="px-3.5 py-2 bg-[#152B49] hover:bg-[#2463A6] text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3 h-3 text-white" />
                    <span>Consultar Ruta</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL SECTION: WHY BOOK WITH A HUMAN AGENT */}
      <section id="ventajas" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80"
                  alt="Asientos de cabina de clase ejecutiva moderna y confort en vuelos de larga distancia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152B49]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-300">
                    Atención Asistida por Agentes
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    Acceso a Tarifas Aéreas Privadas y Confort Total
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 max-w-md">
                    Hable directamente con un especialista que conoce las configuraciones de cabina, franquicias de equipaje y ventajas de alianzas aéreas.
                  </p>
                </div>
              </div>

              {/* Floating Agent Badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-full bg-[#ED6029] text-white flex items-center justify-center font-bold flex-shrink-0">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#152B49]">Línea Directa de Reservas</div>
                  <div className="text-sm font-extrabold text-[#ED6029]">
                    {phoneNumber}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Editorial Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6]">
                  La Ventaja Humana
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#152B49] mt-2 tracking-tight leading-tight">
                  Por Qué los Viajeros Prefieren Llamarnos en Vez de Usar Bots
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Los motores de búsqueda automatizados utilizan algoritmos rígidos que con frecuencia omiten combinaciones complejas de itinerarios y ocultan tarifas restrictivas. Aervisto le conecta directamente con agentes de reservas de aviación profesionales.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#EBF5FB] text-[#2463A6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2463A6]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#152B49]">
                      Tarifas Aéreas Mayoristas No Publicadas
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Las principales compañías aéreas internacionales facilitan a agencias especializadas tarifas consolidadas que no están autorizadas para mostrarse en pantallas de pago web automáticas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#EBF5FB] text-[#2463A6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2463A6]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#152B49]">
                      Itinerarios Multiciudad y Combinaciones Complejas
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      ¿Viaja saliendo de Madrid a Nueva York y regresando desde Miami o Los Ángeles? Nuestros agentes estructuran itinerarios mixtos sin complicaciones entre aerolíneas asociadas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-[#EBF5FB] text-[#2463A6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2463A6]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#152B49]">
                      Asistencia Humana Directa ante Imprevistos
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Si una aerolínea modifica su horario o necesita cambiar de fecha, habla directamente con su asesor en español en lugar de esperar horas con un robot de chat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={telHref}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#152B49] hover:bg-[#2463A6] text-white font-bold text-sm sm:text-base transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#67B7E1]" />
                  <span>Llamar al {phoneNumber}</span>
                </a>

                <a
                  href="#buscar-vuelo"
                  className="text-xs sm:text-sm font-bold text-[#2463A6] hover:underline"
                >
                  Buscar y cotizar vuelo &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TOP AIRLINES WE QUOTE */}
      <section className="py-14 bg-[#F4F7FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Red Global de Aerolíneas
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-[#152B49] mt-1 mb-8">
            Aerolíneas Regulares que Cotizamos y Gestionamos
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {spanishAirlines.map((carrier) => (
              <a
                key={carrier.code}
                href={telHref}
                className="group p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#2463A6] hover:shadow-md transition-all text-left block"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-slate-100 rounded text-[#152B49] group-hover:bg-[#EBF5FB] group-hover:text-[#2463A6] transition-colors">
                    {carrier.code}
                  </span>
                  <Phone className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#ED6029] transition-all" />
                </div>
                <div className="text-sm font-bold text-[#152B49] group-hover:text-[#2463A6] transition-colors">
                  {carrier.name}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                  {carrier.hub}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={telHref}
              className="px-5 py-2.5 bg-white border border-slate-300 hover:border-[#2463A6] text-xs sm:text-sm font-bold text-[#152B49] hover:text-[#2463A6] rounded-xl shadow-sm transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#ED6029]" />
              <span>Consultar tarifas de aerolíneas por teléfono: {phoneNumber}</span>
            </a>
          </div>

          <p className="text-[11px] text-slate-400 mt-5">
            Los nombres de aerolíneas y códigos IATA se mencionan bajo uso legítimo de identificación. Aervisto es una agencia independiente de asistencia para reservas de vuelos.
          </p>
        </div>
      </section>

      {/* 6. VERIFIED TRAVELER EXPERIENCES */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6]">
              Experiencias de Clientes
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#152B49] mt-1">
              Lo que Opinan los Viajeros Sobre Nuestra Asistencia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spanishReviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F4F7FA] border border-slate-200 shadow-sm text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-[#2463A6] mb-1.5 uppercase font-mono">
                    {rev.route}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-sm text-[#152B49] block">{rev.name}</span>
                    <span className="text-xs text-slate-500 block">{rev.location}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMPACT FULL FLIGHT ENQUIRY SECTION */}
      <section id="formulario-consulta" className="py-16 sm:py-20 bg-[#F4F7FA] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2463A6]">
              Consulta Instantánea de Vuelos
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#152B49] mt-1">
              Consulte Horarios y Hable con un Especialista
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
              Seleccione los datos de su viaje para conectarse de inmediato con nuestros especialistas en reservas telefónicas y conocer tarifas en vivo.
            </p>
          </div>

          <FlightEnquiryFormSpanish
            title="Búsqueda y Consulta de Vuelos"
            subtitle="Cotización gratuita con un agente. Sin cargos por consultar. Comprobamos horarios verificados en las principales aerolíneas."
          />
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section id="preguntas" className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-[#152B49]">
              Preguntas Frecuentes
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Respuestas claras sobre cómo funciona nuestro servicio de asistencia para reservas aéreas.
            </p>
          </div>

          <FaqAccordion items={spanishFaqs} defaultOpenIndex={0} />

          <div className="text-center mt-8">
            <a
              href={telHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2463A6] hover:underline"
            >
              <Phone className="w-4 h-4 text-[#ED6029]" />
              <span>¿Tiene preguntas adicionales? Hable directamente con un agente: {phoneNumber}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. PROMINENT CONVERSION BANNER */}
      <section className="py-14 sm:py-18 bg-[#152B49] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            ¿Listo para hablar con un especialista en vuelos internacionales?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Nuestra mesa de reservas está abierta. Llame ahora para revisar opciones de horarios, clases de cabina y franquicias de equipaje con un especialista en español.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={telHref}
              className="w-full sm:w-auto px-8 py-4 bg-[#ED6029] hover:bg-[#D84E17] text-white font-extrabold text-lg rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>Llamar al {phoneNumber}</span>
            </a>

            <a
              href="#buscar-vuelo"
              className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-xl transition-all border border-white/20"
            >
              Buscar y Cotizar Vuelo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
