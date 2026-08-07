"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Sparkles, Feather, ShieldCheck, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { HeroSection } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { ReviewCard } from "@/components/ReviewCard";
import { OlfactoryPyramid } from "@/components/OlfactoryPyramid";
import { productsData } from "@/data/products";
import { categoriesData } from "@/data/categories";
import { reviewsData } from "@/data/reviews";

export default function HomePage() {
  const { locale, dir, t } = useLanguage();

  const featuredProducts = productsData.filter((p) => p.featured);
  const sampleNotes = productsData[0].scentProfile;

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t("home.featured_title")}
          subtitle={t("home.featured_subtitle")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#111111] text-[#D4AF37] border border-[#D4AF37]/50 rounded-lg text-sm font-semibold hover:bg-[#222222] transition-colors shadow-md"
          >
            <span>{t("home.view_all")}</span>
            {dir === "rtl" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>
        </div>
      </section>

      {/* 3. About Brand Quote & Story Section */}
      <section className="relative bg-[#111111] text-[#FAF7F0] py-20 border-y border-[#D4AF37]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/40">
                <Image
                  src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1000"
                  alt="Rouqi Brand Story Perfume Craft"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#D4AF37]">
                <Feather className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {t("home.about_title")}
                </span>
              </div>

              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-snug gold-gradient-text">
                &ldquo;{t("home.about_quote")}&rdquo;
              </blockquote>

              <p className="text-sm md:text-base text-[#E8DDCF]/80 leading-relaxed">
                {t("home.about_desc")}
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                  <span>{locale === "ar" ? "زيوت عطرية 100% نقية" : "100% Pure Botanical Oils"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Heart className="w-5 h-5 text-[#D4AF37]" />
                  <span>{locale === "ar" ? "صُنعت بحرفية وشغف" : "Crafted with Passion"}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] hover:underline"
                >
                  <span>{t("home.discover_story")}</span>
                  {dir === "rtl" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t("home.categories_title")}
          subtitle={t("home.categories_subtitle")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* 5. Olfactory Pyramid & Craft Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t("home.craft_title")}
          subtitle={t("home.craft_subtitle")}
        />
        <OlfactoryPyramid notes={sampleNotes} />
      </section>

      {/* 6. Customer Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t("home.reviews_title")}
          subtitle={t("home.reviews_subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
    </div>
  );
}
