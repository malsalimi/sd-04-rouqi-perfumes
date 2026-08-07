"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import arLocale from "@/locales/ar.json";
import enLocale from "@/locales/en.json";

type Language = "ar" | "en";

interface LanguageContextType {
  locale: Language;
  dir: "rtl" | "ltr";
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (path: string, fallback?: string) => string;
}

const translations: Record<Language, any> = {
  ar: arLocale,
  en: enLocale,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Language>("ar");

  useEffect(() => {
    const saved = localStorage.getItem("rouqi_language") as Language | null;
    if (saved === "ar" || saved === "en") {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = locale;
    localStorage.setItem("rouqi_language", locale);
  }, [locale]);

  const setLanguage = (lang: Language) => {
    setLocaleState(lang);
  };

  const toggleLanguage = () => {
    setLocaleState((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const t = (path: string, fallback = ""): string => {
    const keys = path.split(".");
    let current = translations[locale];

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to English if key missing in Arabic
        let fallbackVal = translations["en"];
        for (const fk of keys) {
          if (fallbackVal && typeof fallbackVal === "object" && fk in fallbackVal) {
            fallbackVal = fallbackVal[fk];
          } else {
            return fallback || path;
          }
        }
        return typeof fallbackVal === "string" ? fallbackVal : fallback || path;
      }
    }

    return typeof current === "string" ? current : fallback || path;
  };

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ locale, dir, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
