import React from "react";
import Link from "next/link";
import Image from "next/image";

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
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-10",
    lg: "h-11 sm:h-12",
  };

  const content = (
    <div
      className={`inline-flex items-center transition-all ${
        isLight
          ? "bg-white/95 px-3 py-1.5 rounded-xl shadow-xs hover:bg-white"
          : "mix-blend-multiply"
      } ${className}`}
    >
      <Image
        src="/brand-logo.png"
        alt="Aervisto - Flight Reservations & Enquiries"
        width={180}
        height={90}
        priority
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2463A6] rounded-md shrink-0 transition-transform active:scale-95"
        aria-label="Aervisto - Back to Homepage"
      >
        {content}
      </Link>
    );
  }

  return content;
}
