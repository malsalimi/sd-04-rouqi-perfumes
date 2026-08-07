"use client";

import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  light = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <div className={`inline-flex items-center gap-2 mb-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-[#D4AF37]"></span>
        <span className="text-xs tracking-widest uppercase font-semibold text-[#D4AF37]">
          ROUQI PERFUMES
        </span>
        <span className="h-px w-8 bg-[#D4AF37]"></span>
      </div>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight ${
          light ? "text-[#FAF7F0]" : "text-[#111111]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm md:text-base max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-[#E8DDCF]/80" : "text-[#666666]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
