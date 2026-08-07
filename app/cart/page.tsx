"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/SectionTitle";
import { DemoCheckoutModal } from "@/components/DemoCheckoutModal";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, subtotal, totalItemsCount } = useCart();
  const { locale, dir, t } = useLanguage();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <SectionTitle
        title={t("cart.title")}
        subtitle={locale === "ar" ? "راجع عطرك المفضل قبل الانتقال لإتمام الطلب." : "Review your selected luxury fragrances before completing demo checkout."}
      />

      {cart.length === 0 ? (
        <div className="bg-white p-12 md:p-16 rounded-2xl border border-[#E8DDCF] text-center space-y-4 max-w-xl mx-auto">
          <ShoppingBag className="w-20 h-20 text-[#D4AF37]/50 mx-auto" />
          <h3 className="font-serif font-bold text-2xl text-[#111111]">
            {t("cart.empty_title")}
          </h3>
          <p className="text-xs text-[#666666] leading-relaxed">
            {t("cart.empty_desc")}
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#111111] text-[#D4AF37] rounded-xl font-bold text-xs hover:bg-[#222222] transition-colors shadow-md"
          >
            <span>{t("cart.continue_shopping")}</span>
            {dir === "rtl" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart Line Items */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-2xl border border-[#E8DDCF] shadow-xs overflow-hidden">
              <div className="p-4 bg-[#FAF7F0] border-b border-[#E8DDCF] flex items-center justify-between">
                <span className="font-serif font-bold text-sm text-[#111111]">
                  {t("cart.item")} ({totalItemsCount})
                </span>
                <button
                  onClick={clearCart}
                  className="text-xs text-red-500 hover:underline"
                >
                  {t("cart.clear_cart")}
                </button>
              </div>

              <div className="divide-y divide-[#E8DDCF]/60 p-4">
                {cart.map((item) => {
                  const name = item.product.name[locale];
                  return (
                    <div
                      key={`${item.product.id}-${item.selectedVolume}`}
                      className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-[#FAF7F0] shrink-0 border border-[#E8DDCF]">
                          <Image
                            src={item.product.images[0]}
                            alt={name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <Link
                            href={`/shop/${item.product.slug}`}
                            className="font-serif font-bold text-base text-[#111111] hover:text-[#D4AF37] transition-colors"
                          >
                            {name}
                          </Link>
                          <p className="text-xs text-[#666666] mt-0.5">
                            {t("product.size")}: {item.selectedVolume} {t("product.ml")} | {item.product.concentration}
                          </p>
                          <p className="text-xs font-bold text-[#D4AF37] mt-1">
                            ${item.price} USD
                          </p>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-between sm:justify-end gap-6">
                        <div className="flex items-center border border-[#E8DDCF] rounded-lg bg-white">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.selectedVolume,
                                item.quantity - 1
                              )
                            }
                            className="p-1.5 text-gray-600 hover:text-black"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-bold text-[#111111]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.selectedVolume,
                                item.quantity + 1
                              )
                            }
                            className="p-1.5 text-gray-600 hover:text-black"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="font-bold text-sm font-sans text-[#111111] w-20 text-end">
                          ${item.price * item.quantity} USD
                        </span>

                        <button
                          onClick={() =>
                            removeFromCart(item.product.id, item.selectedVolume)
                          }
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <Link
                href="/shop"
                className="text-xs font-bold text-[#111111] hover:text-[#D4AF37] flex items-center gap-1.5"
              >
                {dir === "rtl" ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{t("cart.continue_shopping")}</span>
              </Link>
            </div>
          </div>

          {/* Cart Summary Card */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#E8DDCF] shadow-md space-y-6">
            <h3 className="font-serif font-bold text-lg text-[#111111] border-b border-[#E8DDCF] pb-3">
              {locale === "ar" ? "ملخص الطلب" : "Order Summary"}
            </h3>

            <div className="space-y-3 text-xs text-[#666666]">
              <div className="flex justify-between">
                <span>{t("cart.subtotal")}</span>
                <span className="font-bold text-[#111111]">${subtotal} USD</span>
              </div>
              <div className="flex justify-between">
                <span>{t("cart.shipping")}</span>
                <span className="text-[#D4AF37] font-bold">{t("cart.free")}</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span>{t("cart.tax_inclusive")}</span>
                <span>$0 USD</span>
              </div>
            </div>

            <div className="border-t border-[#E8DDCF] pt-4 flex justify-between items-baseline">
              <span className="font-serif font-bold text-base text-[#111111]">
                {t("cart.grand_total")}
              </span>
              <span className="text-2xl font-bold font-sans text-[#D4AF37]">
                ${subtotal} USD
              </span>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#B59226] text-[#111111] font-bold text-sm rounded-xl hover:brightness-110 transition-all shadow-lg gold-glow"
            >
              {t("cart.proceed_to_checkout")}
            </button>

            <div className="p-3 bg-[#FAF7F0] border border-[#E8DDCF] rounded-xl flex items-center gap-2 text-[11px] text-[#666666]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{t("cart.demo_notice")}</span>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      <DemoCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}
