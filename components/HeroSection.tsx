"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, ShieldCheck, Clock, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const HeroSection: React.FC = () => {
  const { locale, dir, t } = useLanguage();

  return (
    <section className="relative bg-[#111111] text-[#FAF7F0] pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden border-b border-[#D4AF37]/30">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 ltr:-left-32 rtl:-right-32 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 ltr:right-0 rtl:left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:ltr:text-left lg:rtl:text-right"
          >
            {/* Luxury Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F0]/5 border border-[#D4AF37]/40 backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
                {t("hero.badge")}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="block text-white">{t("hero.title")}</span>
              <span className="block gold-gradient-text mt-2">
                {locale === "ar" ? "رُقيٌ يترك أثراً لا يُنسى" : "Crafted for Distinction"}
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#E8DDCF]/80 max-w-2xl leading-relaxed">
              {t("hero.subtitle")}
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:ltr:justify-start lg:rtl:justify-end gap-4">
              <Link
                href="/shop"
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B59226] text-[#111111] rounded-lg font-semibold text-sm hover:brightness-110 transition-all shadow-lg gold-glow flex items-center gap-2"
              >
                <span>{t("hero.shop_now")}</span>
                {dir === "rtl" ? (
                  <ArrowLeft className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 bg-transparent text-[#FAF7F0] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 rounded-lg font-semibold text-sm transition-all"
              >
                {t("hero.explore_collection")}
              </Link>
            </div>

            {/* Luxury Feature Badges */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:ltr:text-left lg:rtl:text-right">
              <div className="space-y-1">
                <div className="flex items-center justify-center lg:ltr:justify-start lg:rtl:justify-end gap-1.5 text-[#D4AF37]">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">{locale === "ar" ? "أصالة" : "Authentic"}</span>
                </div>
                <p className="text-[11px] text-[#E8DDCF]/70">{t("hero.feature_1")}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center lg:ltr:justify-start lg:rtl:justify-end gap-1.5 text-[#D4AF37]">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">{locale === "ar" ? "ثبات" : "Longevity"}</span>
                </div>
                <p className="text-[11px] text-[#E8DDCF]/70">{t("hero.feature_2")}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center lg:ltr:justify-start lg:rtl:justify-end gap-1.5 text-[#D4AF37]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">{locale === "ar" ? "حرفية" : "Artisanal"}</span>
                </div>
                <p className="text-[11px] text-[#E8DDCF]/70">{t("hero.feature_3")}</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto w-full max-w-md aspect-3/4 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 gold-glow">
              <Image
                src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000"
                alt="Rouqi Perfumes Hero Bottle"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />

              {/* Floating Product Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-dark-panel border border-[#D4AF37]/40 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#D4AF37] uppercase font-bold tracking-wider">
                    {locale === "ar" ? "العطر الأيقوني" : "Iconic Fragrance"}
                  </span>
                  <h3 className="font-serif font-bold text-base text-white">
                    {locale === "ar" ? "عود الإمبراطور" : "Imperial Oud"}
                  </h3>
                  <p className="text-xs text-[#E8DDCF]/80">$120 USD</p>
                </div>
                <Link
                  href="/shop/imperial-oud"
                  className="px-4 py-2 bg-[#D4AF37] text-[#111111] font-bold text-xs rounded-lg hover:bg-[#B59226] transition-colors"
                >
                  {t("hero.shop_now")}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
