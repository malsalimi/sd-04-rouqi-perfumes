"use client";

import React from "react";
import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProductFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedPriceRange: number;
  setSelectedPriceRange: (maxPrice: number) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  onReset: () => void;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedPriceRange,
  setSelectedPriceRange,
  sortBy,
  setSortBy,
  onReset,
}) => {
  const { locale, t } = useLanguage();

  const categories = [
    { slug: "all", label: t("shop.all_categories") },
    { slug: "oriental", label: locale === "ar" ? "شرقية" : "Oriental" },
    { slug: "men", label: locale === "ar" ? "رجالية" : "Men" },
    { slug: "women", label: locale === "ar" ? "نسائية" : "Women" },
    { slug: "exclusive", label: locale === "ar" ? "خاصة" : "Exclusive" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#E8DDCF] shadow-xs space-y-6">
      <div className="flex items-center justify-between border-b border-[#E8DDCF]/60 pb-4">
        <div className="flex items-center gap-2 text-[#111111] font-serif font-bold text-base">
          <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />
          <span>{locale === "ar" ? "تصفية العطور" : "Filter Fragrances"}</span>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-[#666666] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t("shop.reset_filters")}</span>
        </button>
      </div>

      {/* Search Input */}
      <div>
        <label className="block text-xs font-semibold text-[#111111] mb-2">
          {t("shop.search_label")}
        </label>
        <div className="relative">
          <Search className="w-4 h-4 absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 text-[#666666]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("nav.search_placeholder")}
            className="w-full bg-[#FAF7F0] border border-[#E8DDCF] rounded-lg py-2.5 ltr:pl-9 ltr:pr-3 rtl:pr-9 rtl:pl-3 text-xs text-[#111111] placeholder-[#666666]/60 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div>
        <label className="block text-xs font-semibold text-[#111111] mb-2">
          {t("shop.filter_category")}
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.slug
                  ? "bg-[#111111] text-[#D4AF37] shadow-xs"
                  : "bg-[#FAF7F0] text-[#111111]/80 border border-[#E8DDCF] hover:border-[#D4AF37]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div>
        <div className="flex justify-between items-center text-xs font-semibold text-[#111111] mb-2">
          <span>{t("shop.filter_price")}</span>
          <span className="text-[#D4AF37]">${selectedPriceRange} USD</span>
        </div>
        <input
          type="range"
          min="50"
          max="200"
          step="5"
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
          className="w-full accent-[#D4AF37] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-[#666666] mt-1">
          <span>$50</span>
          <span>$200</span>
        </div>
      </div>

      {/* Sorting Dropdown */}
      <div>
        <label className="block text-xs font-semibold text-[#111111] mb-2">
          {t("shop.sort_by")}
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-[#FAF7F0] border border-[#E8DDCF] rounded-lg p-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#D4AF37]"
        >
          <option value="featured">{t("shop.sort_featured")}</option>
          <option value="price_low">{t("shop.sort_price_low")}</option>
          <option value="price_high">{t("shop.sort_price_high")}</option>
          <option value="rating">{t("shop.sort_rating")}</option>
          <option value="newest">{t("shop.sort_newest")}</option>
        </select>
      </div>
    </div>
  );
};
