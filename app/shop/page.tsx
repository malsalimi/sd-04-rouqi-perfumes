"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductFilter } from "@/components/ProductFilter";
import { ProductGrid } from "@/components/ProductGrid";
import { productsData } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { PackageSearch } from "lucide-react";

function ShopContent() {
  const { locale, t } = useLanguage();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState(200);
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((p) => {
        // Category Filter
        if (selectedCategory !== "all" && p.category !== selectedCategory) {
          return false;
        }

        // Price Filter
        if (p.price > selectedPriceRange) {
          return false;
        }

        // Search Filter
        if (searchQuery.trim() !== "") {
          const q = searchQuery.toLowerCase();
          const nameAr = p.name.ar.toLowerCase();
          const nameEn = p.name.en.toLowerCase();
          const descAr = p.description.ar.toLowerCase();
          const descEn = p.description.en.toLowerCase();
          const tags = p.tags.join(" ").toLowerCase();

          return (
            nameAr.includes(q) ||
            nameEn.includes(q) ||
            descAr.includes(q) ||
            descEn.includes(q) ||
            tags.includes(q)
          );
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price_low") return a.price - b.price;
        if (sortBy === "price_high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "newest") return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        return 0; // featured default
      });
  }, [searchQuery, selectedCategory, selectedPriceRange, sortBy]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedPriceRange(200);
    setSortBy("featured");
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        title={t("shop.title")}
        subtitle={t("shop.subtitle")}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Filters */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <ProductFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onReset={handleReset}
          />
        </div>

        {/* Product Grid Area */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between text-xs text-[#666666] bg-white px-4 py-3 rounded-xl border border-[#E8DDCF]">
            <span>
              {locale === "ar"
                ? `إجمالي العطور المتاحة: ${filteredProducts.length}`
                : `Showing ${filteredProducts.length} Fragrances`}
            </span>
            {(selectedCategory !== "all" || searchQuery || selectedPriceRange < 200) && (
              <span className="text-[#D4AF37] font-semibold">
                {locale === "ar" ? "تصفية نشطة" : "Filtered View"}
              </span>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="bg-white p-12 rounded-2xl border border-[#E8DDCF] text-center space-y-4">
              <PackageSearch className="w-16 h-16 text-[#D4AF37]/50 mx-auto" />
              <h3 className="font-serif font-bold text-xl text-[#111111]">
                {t("shop.no_products")}
              </h3>
              <p className="text-xs text-[#666666]">
                {locale === "ar"
                  ? "جرّب تغيير معايير البحث أو نطاق السعر للعثور على العطر المناسب."
                  : "Try clearing filters or adjusting your price limit to find available scents."}
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#111111] text-[#D4AF37] rounded-lg text-xs font-semibold hover:bg-[#222222] transition-colors"
              >
                {t("shop.reset_filters")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-[#D4AF37]">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
