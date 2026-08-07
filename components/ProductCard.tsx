"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, Check, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { locale, t } = useLanguage();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const name = product.name[locale];
  const categoryName = product.categoryName[locale];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 100);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden border border-[#E8DDCF]/80 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-3/4 bg-[#FAF7F0] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={name}
          fill
          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Badges */}
        <div className="absolute top-3 ltr:left-3 rtl:right-3 flex flex-col gap-1 z-10">
          {product.isNew && (
            <span className="px-2.5 py-1 bg-[#111111] text-[#D4AF37] text-[10px] font-bold tracking-wider uppercase rounded-sm shadow-xs border border-[#D4AF37]/30">
              {locale === "ar" ? "جديد" : "NEW"}
            </span>
          )}
          {product.originalPrice && (
            <span className="px-2.5 py-1 bg-[#D4AF37] text-[#111111] text-[10px] font-bold tracking-wider uppercase rounded-sm shadow-xs">
              {locale === "ar" ? "خصم خاص" : "SPECIAL OFFER"}
            </span>
          )}
        </div>

        {/* Quick Actions Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Link
            href={`/shop/${product.slug}`}
            className="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-lg hover:bg-[#D4AF37] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            title={t("product.description_tab")}
          >
            <Eye className="w-4 h-4" />
          </Link>
          <button
            onClick={handleAddToCart}
            className="w-10 h-10 rounded-full bg-[#111111] text-[#D4AF37] flex items-center justify-center shadow-lg hover:bg-[#D4AF37] hover:text-[#111111] transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
            title={t("product.add_to_cart")}
          >
            {added ? <Check className="w-4 h-4 text-green-400" /> : <ShoppingBag className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider">
            {categoryName}
          </span>
          <Link href={`/shop/${product.slug}`} className="block mt-1">
            <h3 className="font-serif font-bold text-base text-[#111111] hover:text-[#D4AF37] transition-colors line-clamp-1">
              {name}
            </h3>
          </Link>
          <p className="text-xs text-[#666666] mt-1.5 line-clamp-2 leading-relaxed">
            {product.description[locale]}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#E8DDCF]/50 flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-semibold text-[#111111]">{product.rating}</span>
            <span className="text-[10px] text-[#666666]">({product.reviewsCount})</span>
          </div>

          <div className="flex items-baseline gap-1.5">
            {product.originalPrice && (
              <span className="text-xs text-[#666666] line-through">${product.originalPrice}</span>
            )}
            <span className="text-base font-bold text-[#111111] font-sans">
              ${product.price} <span className="text-[10px] text-[#666666] font-normal">USD</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
