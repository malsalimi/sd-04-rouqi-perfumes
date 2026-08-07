"use client";

import React, { useState } from "react";
import { ProductNotes } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Wind, Heart, Shield } from "lucide-react";

export const OlfactoryPyramid: React.FC<{ notes: ProductNotes }> = ({ notes }) => {
  const { locale, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"top" | "heart" | "base">("top");

  const levels = [
    {
      id: "top" as const,
      title: t("home.top_notes"),
      desc: t("home.top_notes_desc"),
      icon: Wind,
      notes: notes.top[locale],
      time: locale === "ar" ? "0 - 15 دقيقة" : "0 - 15 mins",
      bg: "border-amber-400/40 bg-amber-400/5",
    },
    {
      id: "heart" as const,
      title: t("home.heart_notes"),
      desc: t("home.heart_notes_desc"),
      icon: Heart,
      notes: notes.heart[locale],
      time: locale === "ar" ? "15 - 120 دقيقة" : "15 - 120 mins",
      bg: "border-rose-400/40 bg-rose-400/5",
    },
    {
      id: "base" as const,
      title: t("home.base_notes"),
      desc: t("home.base_notes_desc"),
      icon: Shield,
      notes: notes.base[locale],
      time: locale === "ar" ? "2 - 24+ ساعة" : "2 - 24+ hours",
      bg: "border-[#D4AF37]/50 bg-[#D4AF37]/10",
    },
  ];

  return (
    <div className="bg-[#111111] text-[#FAF7F0] p-6 md:p-8 rounded-2xl border border-[#D4AF37]/30 shadow-xl">
      <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
        <Sparkles className="w-5 h-5 text-[#D4AF37]" />
        <h3 className="font-serif font-bold text-xl text-[#D4AF37]">
          {t("product.notes_pyramid")}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {levels.map((level) => {
          const Icon = level.icon;
          const isActive = activeTab === level.id;
          return (
            <button
              key={level.id}
              onClick={() => setActiveTab(level.id)}
              className={`p-4 rounded-xl border text-start transition-all duration-300 ${
                isActive
                  ? `${level.bg} border-2 text-white shadow-md`
                  : "border-white/10 hover:border-white/20 text-white/70"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-5 h-5 ${isActive ? "text-[#D4AF37]" : "text-white/50"}`} />
                <span className="text-[10px] text-[#D4AF37] font-semibold uppercase px-2 py-0.5 rounded bg-white/5">
                  {level.time}
                </span>
              </div>
              <h4 className="font-serif font-bold text-sm text-white mb-1">
                {level.title}
              </h4>
              <p className="text-[11px] text-[#E8DDCF]/70 line-clamp-2">
                {level.desc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Level Notes Display */}
      {levels.find((l) => l.id === activeTab) && (
        <div className="p-5 rounded-xl bg-white/5 border border-[#D4AF37]/20 flex flex-wrap gap-2.5 items-center">
          <span className="text-xs font-semibold text-[#D4AF37] ltr:mr-2 rtl:ml-2">
            {locale === "ar" ? "المكونات العطرية:" : "Olfactory Accord:"}
          </span>
          {levels
            .find((l) => l.id === activeTab)
            ?.notes.map((note, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full bg-[#111111] border border-[#D4AF37]/40 text-xs font-medium text-[#FAF7F0] shadow-xs"
              >
                🌿 {note}
              </span>
            ))}
        </div>
      )}
    </div>
  );
};
