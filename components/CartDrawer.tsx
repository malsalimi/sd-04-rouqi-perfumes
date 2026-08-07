"use client";

import React from "react";
import Link from "next/link";
import { X, ShoppingBag, ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { CartItem } from "./CartItem";

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, subtotal, totalItemsCount } = useCart();
  const { locale, dir, t } = useLanguage();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 max-w-full flex ltr:right-0 rtl:left-0">
        <div className="w-screen max-w-md bg-[#FAF7F0] shadow-2xl flex flex-col border-l border-[#E8DDCF]">
          {/* Header */}
          <div className="p-5 bg-[#111111] text-[#FAF7F0] flex items-center justify-between border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="font-serif text-lg font-bold text-[#D4AF37]">
                {t("cart.title")} ({totalItemsCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full text-[#FAF7F0]/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-16 h-16 text-[#D4AF37]/40 mx-auto mb-4" />
                <h3 className="text-lg font-serif font-bold text-[#111111] mb-2">
                  {t("cart.empty_title")}
                </h3>
                <p className="text-xs text-[#666666] mb-6">
                  {t("cart.empty_desc")}
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#111111] text-[#D4AF37] rounded-full text-xs font-semibold hover:bg-[#222222] transition-colors"
                >
                  {t("cart.continue_shopping")}
                </button>
              </div>
            ) : (
              <div className="space-y-1">
                {cart.map((item) => (
                  <CartItem
                    key={`${item.product.id}-${item.selectedVolume}`}
                    item={item}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer Summary */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-[#E8DDCF] shadow-lg">
              <div className="flex justify-between items-center text-sm mb-2 text-[#666666]">
                <span>{t("cart.subtotal")}</span>
                <span className="font-bold text-[#111111]">${subtotal} USD</span>
              </div>
              <div className="flex justify-between items-center text-sm mb-4 text-[#666666]">
                <span>{t("cart.shipping")}</span>
                <span className="text-[#D4AF37] font-semibold">{t("cart.free")}</span>
              </div>
              <div className="border-t border-[#E8DDCF] pt-3 mb-4 flex justify-between items-center text-base font-bold text-[#111111]">
                <span>{t("cart.grand_total")}</span>
                <span className="text-lg text-[#D4AF37]">${subtotal} USD</span>
              </div>

              <div className="space-y-2">
                <Link
                  href="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 bg-[#111111] text-[#D4AF37] rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#222222] transition-all shadow-md"
                >
                  <span>{t("cart.proceed_to_checkout")}</span>
                  {dir === "rtl" ? (
                    <ArrowLeft className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </Link>
              </div>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#666666]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t("cart.demo_notice")}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
