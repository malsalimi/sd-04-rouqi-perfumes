"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitcher: React.FC = () => {
  const { locale, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-[#FAF7F0] border border-[#E8DDCF] rounded-full p-1 shadow-xs">
      <button
        onClick={() => setLanguage("ar")}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
          locale === "ar"
            ? "bg-[#111111] text-[#D4AF37] shadow-xs"
            : "text-[#111111]/70 hover:text-[#111111]"
        }`}
      >
        العربية
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
          locale === "en"
            ? "bg-[#111111] text-[#D4AF37] shadow-xs"
            : "text-[#111111]/70 hover:text-[#111111]"
        }`}
      >
        English
      </button>
    </div>
  );
};
