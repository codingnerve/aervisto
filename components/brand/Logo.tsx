import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "navy";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  asLink?: boolean;
}

export function Logo({
  variant = "navy",
  showTagline = true,
  size = "md",
  className = "",
  asLink = true,
}: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const taglineSizes = {
    sm: "text-[9px] tracking-wider",
    md: "text-[10px] tracking-widest",
    lg: "text-xs tracking-widest",
  };

  const isLight = variant === "light";
  const primaryTextColor = isLight ? "text-white" : "text-[#152B49]";
  const secondaryTextColor = isLight ? "text-blue-200" : "text-[#2463A6]";
  const taglineColor = isLight ? "text-slate-300" : "text-[#637083]";

  const content = (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Aviation Wing / Compass SVG Icon */}
      <svg
        className={`${iconSizes[size]} flex-shrink-0 transition-transform duration-200 group-hover:scale-105`}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background shield/circle element */}
        <rect
          width="44"
          height="44"
          rx="10"
          fill={isLight ? "rgba(255,255,255,0.12)" : "#152B49"}
        />
        {/* Aerodynamic wing sweep (Sky Blue) */}
        <path
          d="M8 29C15 29 23 23 27 12L31 12C28 20 20 32 8 32V29Z"
          fill="#67B7E1"
        />
        {/* Main supersonic jet delta wing (Aviation Blue & White) */}
        <path
          d="M22 8L36 29H28L22 17L16 29H8L22 8Z"
          fill={isLight ? "#FFFFFF" : "#2463A6"}
        />
        {/* Dynamic accent contrail vector (Orange) */}
        <circle cx="34" cy="11" r="3" fill="#ED6029" />
        <path
          d="M26 15C30 13.5 32 12.5 34 11"
          stroke="#ED6029"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className={`font-extrabold tracking-tight font-sans ${textSizes[size]} ${primaryTextColor} flex items-center`}
        >
          AER<span className={secondaryTextColor}>VISTO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ED6029] ml-1 inline-block" />
        </span>
        {showTagline && (
          <span
            className={`font-semibold uppercase font-sans mt-0.5 ${taglineSizes[size]} ${taglineColor}`}
          >
            Airline Ticket Enquiries
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2463A6] rounded-md p-0.5"
        aria-label="Aervisto - Back to Homepage"
      >
        {content}
      </Link>
    );
  }

  return content;
}
