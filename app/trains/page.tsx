import type { Metadata } from "next";
import { TrainsPageContent } from "@/components/trains/TrainsPageContent";

const title = "Train Tickets & Rail Booking Guides";
const description =
  "Browse rail booking guides for trusted train operators, see popular corridors, and send a rail request to our team. Fares and schedules are confirmed with you before anything is booked.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/trains",
  },
  openGraph: {
    title,
    description,
    url: "/trains",
  },
};

export default function TrainsPage() {
  return <TrainsPageContent />;
}
