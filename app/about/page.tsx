"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Award, Heart, Lightbulb, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/SectionTitle";

export default function AboutPage() {
  const { locale, t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t("about.value_quality"),
      desc: t("about.value_quality_desc"),
    },
    {
      icon: Sparkles,
      title: t("about.value_elegance"),
      desc: t("about.value_elegance_desc"),
    },
    {
      icon: Lightbulb,
      title: t("about.value_creativity"),
      desc: t("about.value_creativity_desc"),
    },
    {
      icon: ShieldCheck,
      title: t("about.value_excellence"),
      desc: t("about.value_excellence_desc"),
    },
  ];

  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Hero Banner */}
      <section className="bg-[#111111] text-[#FAF7F0] py-20 border-b border-[#D4AF37]/30 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F0]/5 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ROUQI PERFUMES</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            {t("about.hero_title")}
          </h1>
          <p className="text-sm sm:text-base text-[#E8DDCF]/80 max-w-2xl mx-auto leading-relaxed">
            {t("about.hero_subtitle")}
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000"
                alt="Rouqi Perfumery Heritage"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
              {locale === "ar" ? "الفلسفة والهوية" : "PHILOSOPHY & IDENTITY"}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              {t("about.story_heading")}
            </h2>
            <p className="text-sm text-[#666666] leading-relaxed">
              {t("about.story_p1")}
            </p>
            <p className="text-sm text-[#666666] leading-relaxed">
              {t("about.story_p2")}
            </p>

            <div className="p-6 bg-[#111111] text-[#FAF7F0] rounded-2xl border border-[#D4AF37]/30 shadow-md">
              <blockquote className="font-serif text-lg font-semibold text-[#D4AF37] italic">
                &ldquo;{t("home.about_quote")}&rdquo;
              </blockquote>
              <span className="block text-xs text-[#E8DDCF]/70 mt-2">
                — {locale === "ar" ? "خبير العطور لدى رُقي" : "Master Perfumer at Rouqi"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t("about.values_title")}
          subtitle={locale === "ar" ? "الركائز الأساسية التي تصوغ كل قطرة في عالم رُقي." : "The fundamental pillars shaping every drop in the universe of Rouqi."}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-[#E8DDCF] shadow-xs text-center space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF7F0] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[#111111]">
                  {v.title}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
