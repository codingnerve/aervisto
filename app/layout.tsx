import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { AttributionTracker } from "@/components/analytics/AttributionTracker";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aervisto.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aervisto | International Airline Ticket Enquiry & Reservation Assistance",
    template: "%s | Aervisto Flight Assistance",
  },
  description:
    "Aervisto provides dedicated international flight enquiry and agent-assisted reservation support for travelers in the United States, United Kingdom, and Canada. Connect with real booking specialists.",
  keywords: [
    "airline ticket enquiry",
    "agent assisted flight booking",
    "international flight reservations",
    "flight enquiry US UK Canada",
    "transatlantic flights enquiry",
    "human booking agent",
  ],
  authors: [{ name: "Aervisto Reservation Desk" }],
  creator: "Aervisto",
  publisher: "Aervisto",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aervisto",
    title: "Aervisto | International Airline Ticket Enquiry & Reservation Assistance",
    description:
      "Your next flight starts with a conversation. Speak with dedicated booking agents to research verified international flight itineraries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aervisto | International Airline Ticket Enquiry & Reservation Assistance",
    description:
      "Agent-assisted international flight enquiries and reservations for US, UK, and Canadian travelers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F4F7FA] text-[#172335]">
        <AttributionTracker />
        <AnalyticsScripts />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
        <CookieBanner />
      </body>
    </html>
  );
}
