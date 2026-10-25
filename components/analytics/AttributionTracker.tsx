"use client";

import { useUtm } from "@/hooks/use-utm";

export function AttributionTracker() {
  // Actively initializes UTM & gclid session tracking
  useUtm();
  return null;
}
