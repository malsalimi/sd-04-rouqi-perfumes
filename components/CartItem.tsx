"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";
import { CartItem as CartItemType, useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export const CartItem: React.FC<{ item: CartItemType }> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { locale, t } = useLanguage();

  const productName = item.product.name[locale];

  return (
    <div className="flex items-center gap-4 py-4 border-b border-[#E8DDCF]/60">
      <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-[#FAF7F0] shrink-0 border border-[#E8DDCF]">
        <Image
          src={item.product.images[0]}
          alt={productName}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <Link
          href={`/shop/${item.product.slug}`}
          className="font-serif font-bold text-sm text-[#111111] hover:text-[#D4AF37] transition-colors line-clamp-1"
        >
          {productName}
        </Link>
        <p className="text-xs text-[#666666] mt-0.5">
          {t("product.size")}: {item.selectedVolume} {t("product.ml")} | {item.product.concentration}
        </p>
        <p className="text-sm font-semibold text-[#D4AF37] mt-1">
          ${item.price} USD
        </p>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border border-[#E8DDCF] rounded-md bg-white">
            <button
              onClick={() =>
                updateQuantity(item.product.id, item.selectedVolume, item.quantity - 1)
              }
              className="p-1 text-[#111111]/70 hover:text-[#111111] transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="px-3 text-xs font-semibold text-[#111111]">
              {item.quantity}
            </span>
            <button
              onClick={() =>
                updateQuantity(item.product.id, item.selectedVolume, item.quantity + 1)
              }
              className="p-1 text-[#111111]/70 hover:text-[#111111] transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.product.id, item.selectedVolume)}
            className="text-red-500/80 hover:text-red-600 p-1 transition-colors"
            title="Remove item"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
