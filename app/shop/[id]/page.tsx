"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, Check, ShieldCheck, Truck, Sparkles, ArrowLeft, ArrowRight } from "lucide-react";
import { productsData } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { OlfactoryPyramid } from "@/components/OlfactoryPyramid";
import { ProductCard } from "@/components/ProductCard";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.id as string;
  const { locale, dir, t } = useLanguage();
  const { addToCart } = useCart();

  const product = productsData.find((p) => p.slug === slug || p.id === slug);

  if (!product) {
    return (
      <div className="pt-36 pb-20 text-center space-y-4 max-w-md mx-auto px-4">
        <h2 className="font-serif font-bold text-2xl text-[#111111]">
          {locale === "ar" ? "العطر غير موجود" : "Fragrance Not Found"}
        </h2>
        <p className="text-xs text-[#666666]">
          {locale === "ar"
            ? "عذراً، لم نتمكن من العثور على العطر المطلوبة في مجموعتنا."
            : "Sorry, we could not locate the requested perfume in our catalog."}
        </p>
        <Link
          href="/shop"
          className="inline-block px-6 py-2.5 bg-[#111111] text-[#D4AF37] font-semibold text-xs rounded-lg"
        >
          {t("cart.continue_shopping")}
        </Link>
      </div>
    );
  }

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVolume, setSelectedVolume] = useState(100);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Price adjustment formula for volumes
  let volumeMultiplier = 1;
  if (selectedVolume === 50) volumeMultiplier = 0.8;
  if (selectedVolume === 200) volumeMultiplier = 1.6;
  const currentPrice = Math.round(product.price * volumeMultiplier);

  const name = product.name[locale];
  const categoryName = product.categoryName[locale];
  const description = product.description[locale];
  const ingredients = product.ingredients[locale];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVolume);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-[#666666]">
        <Link href="/" className="hover:text-[#D4AF37]">
          {t("nav.home")}
        </Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-[#D4AF37]">
          {t("nav.shop")}
        </Link>
        <span>/</span>
        <span className="text-[#111111] font-semibold">{name}</span>
      </div>

      {/* Main Product Display Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Product Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-white border border-[#E8DDCF] shadow-lg">
            <Image
              src={product.images[activeImageIndex] || product.images[0]}
              alt={name}
              fill
              priority
              className="object-cover transition-all duration-500"
            />
          </div>

          {/* Image Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-24 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    activeImageIndex === idx
                      ? "border-[#D4AF37] shadow-md scale-105"
                      : "border-[#E8DDCF] opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`${name} ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Purchase Form */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
              {categoryName}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] mt-1">
              {name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#111111]">{product.rating}</span>
              <span className="text-xs text-[#666666]">({product.reviewsCount} {t("product.reviews_tab")})</span>
            </div>
          </div>

          {/* Price */}
          <div className="p-4 bg-white rounded-xl border border-[#E8DDCF] flex items-baseline gap-3">
            <span className="text-3xl font-bold font-sans text-[#111111]">
              ${currentPrice} <span className="text-xs font-normal text-[#666666]">USD</span>
            </span>
            {product.originalPrice && (
              <span className="text-sm text-[#666666] line-through">
                ${Math.round(product.originalPrice * volumeMultiplier)} USD
              </span>
            )}
            <span className="ltr:ml-auto rtl:mr-auto px-2.5 py-1 bg-green-100 text-green-800 text-[11px] font-semibold rounded-full">
              {t("product.in_stock")}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-[#666666] leading-relaxed">
            {description}
          </p>

          {/* Volume Selection */}
          <div>
            <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
              {t("product.size")}
            </label>
            <div className="flex gap-3">
              {product.volumeOptions.map((vol) => (
                <button
                  key={vol}
                  onClick={() => setSelectedVolume(vol)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                    selectedVolume === vol
                      ? "bg-[#111111] text-[#D4AF37] border-[#111111] shadow-md"
                      : "bg-white text-[#111111] border-[#E8DDCF] hover:border-[#D4AF37]"
                  }`}
                >
                  {vol} {t("product.ml")}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center border border-[#E8DDCF] rounded-xl bg-white px-3 py-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2 text-base font-bold text-[#111111]/70 hover:text-[#111111]"
              >
                -
              </button>
              <span className="px-4 text-sm font-bold text-[#111111]">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2 text-base font-bold text-[#111111]/70 hover:text-[#111111]"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#B59226] text-[#111111] rounded-xl font-bold text-sm hover:brightness-110 transition-all shadow-lg gold-glow flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check className="w-5 h-5 text-[#111111]" />
                  <span>{t("product.added_to_cart")}</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5 text-[#111111]" />
                  <span>{t("product.add_to_cart")}</span>
                </>
              )}
            </button>
          </div>

          {/* Key Ingredients Chips */}
          <div className="pt-4 border-t border-[#E8DDCF]">
            <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
              {t("product.ingredients")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {ingredients.map((ing, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white border border-[#E8DDCF] rounded-full text-xs font-semibold text-[#111111]"
                >
                  🍃 {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Guarantees */}
          <div className="p-4 bg-[#FAF7F0] rounded-xl border border-[#E8DDCF] space-y-2 text-xs text-[#666666]">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#D4AF37]" />
              <span>{t("product.free_shipping_notice")}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>{t("product.authentic_guarantee")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Olfactory Pyramid Section */}
      <div className="pt-8">
        <OlfactoryPyramid notes={product.scentProfile} />
      </div>

      {/* Specifications Table */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#E8DDCF] shadow-xs">
        <h3 className="font-serif font-bold text-xl text-[#111111] mb-6 border-b border-[#E8DDCF] pb-3">
          {t("product.specifications")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E8DDCF]">
            <span className="text-[#666666] block mb-1">{t("product.fragrance_concentration")}</span>
            <span className="font-bold text-[#111111] text-sm">{product.concentration}</span>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E8DDCF]">
            <span className="text-[#666666] block mb-1">{t("product.country_origin")}</span>
            <span className="font-bold text-[#111111] text-sm">{t("product.france_uae")}</span>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E8DDCF]">
            <span className="text-[#666666] block mb-1">{t("hero.feature_2")}</span>
            <span className="font-bold text-[#111111] text-sm">24+ Hours</span>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6">
          <h3 className="font-serif font-bold text-2xl text-[#111111]">
            {t("product.related_products")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
