"use client";

import { useEffect, useState } from "react";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
}

const STORAGE_KEY = "aervisto_attribution";

/**
 * Sanitizes query string values to avoid script injection
 */
function sanitizeParam(val: string | null): string | undefined {
  if (!val) return undefined;
  return val.replace(/[<>'"/]/g, "").slice(0, 150);
}

export function useUtm(): UtmParams {
  const [params, setParams] = useState<UtmParams>({});

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      // 1. Read existing saved attribution from session
      let existing: UtmParams = {};
      const savedRaw = sessionStorage.getItem(STORAGE_KEY);
      if (savedRaw) {
        existing = JSON.parse(savedRaw);
      }

      // 2. Parse current URL params
      const searchParams = new URLSearchParams(window.location.search);
      const incoming: UtmParams = {
        utm_source: sanitizeParam(searchParams.get("utm_source")),
        utm_medium: sanitizeParam(searchParams.get("utm_medium")),
        utm_campaign: sanitizeParam(searchParams.get("utm_campaign")),
        utm_term: sanitizeParam(searchParams.get("utm_term")),
        utm_content: sanitizeParam(searchParams.get("utm_content")),
        gclid: sanitizeParam(searchParams.get("gclid")),
      };

      // 3. Merge: incoming non-empty params override or fill
      const merged: UtmParams = { ...existing };
      for (const [key, val] of Object.entries(incoming) as [keyof UtmParams, string | undefined][]) {
        if (val) {
          merged[key] = val;
        }
      }

      if (Object.keys(merged).length > 0) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        setParams(merged);
      } else {
        setParams(existing);
      }
    } catch {
      // Handle storage restrictions gracefully
    }
  }, []);

  return params;
}
