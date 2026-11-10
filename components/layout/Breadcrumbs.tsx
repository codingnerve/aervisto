import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  /** Use "dark" when the breadcrumb sits on a dark (navy) background. */
  tone?: "light" | "dark";
}

export function Breadcrumbs({ items, className = "", tone = "light" }: BreadcrumbsProps) {
  const isDark = tone === "dark";

  // Build JSON-LD structured data for BreadcrumbList
  const schemaList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://aervisto.com",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href ? { "item": `https://aervisto.com${item.href}` } : {}),
      })),
    ],
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-xs ${isDark ? "text-slate-300" : "text-[#637083]"} ${className}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaList) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link
            href="/"
            className={`flex items-center gap-1 transition-colors ${
              isDark ? "text-slate-300 hover:text-white" : "text-[#637083] hover:text-[#2463A6]"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <li aria-hidden="true">
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </li>
              <li>
                {isLast || !item.href ? (
                  <span
                    className={`font-semibold ${isDark ? "text-white" : "text-[#172335]"}`}
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      isDark ? "hover:text-white" : "hover:text-[#2463A6]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
