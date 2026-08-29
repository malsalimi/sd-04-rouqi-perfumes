"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldAlert, CreditCard, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export const DemoCheckoutModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { cart, subtotal, clearCart } = useCart();
  const { locale, t } = useLanguage();

  const [step, setStep] = useState<"form" | "success">("form");
  const [orderRef, setOrderRef] = useState("");
  const [formData, setFormData] = useState({
    name: "سارة أحمد",
    email: "client@rouqiperfumes.com",
    phone: "+967 772 076 053",
    address: "شارع تعز",
    city: "إب",
    country: "اليمن",
    paymentMethod: "cod",
  });

  if (!isOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = Math.floor(100000 + Math.random() * 900000).toString();
    setOrderRef(randomRef);
    setStep("success");
    clearCart();
  };

  const handleClose = () => {
    setStep("form");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={handleClose} />

      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E8DDCF] z-10 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#111111] text-[#FAF7F0] p-5 flex items-center justify-between border-b border-[#D4AF37]/30">
          <div>
            <h2 className="font-serif text-lg font-bold text-[#D4AF37]">
              {t("checkout.title")}
            </h2>
            <p className="text-[11px] text-[#E8DDCF]/70">{t("checkout.subtitle")}</p>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === "form" ? (
          <form onSubmit={handleSubmitOrder} className="p-6 space-y-6">
            {/* Demo Notice Alert */}
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center gap-2 text-xs text-amber-800">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{t("checkout.demo_warning")}</span>
            </div>

            {/* Customer & Address Form */}
            <div>
              <h3 className="font-serif font-semibold text-sm text-[#111111] mb-3 flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#D4AF37]" />
                <span>{t("checkout.shipping_address")}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-gray-700 mb-1">{t("checkout.full_name")}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF7F0] border border-[#E8DDCF] rounded-lg p-2.5 text-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">{t("checkout.email")}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF7F0] border border-[#E8DDCF] rounded-lg p-2.5 text-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">{t("checkout.phone")}</label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF7F0] border border-[#E8DDCF] rounded-lg p-2.5 text-[#111111]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">{t("checkout.city")}</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#FAF7F0] border border-[#E8DDCF] rounded-lg p-2.5 text-[#111111]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-1">{t("checkout.address")}</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#FAF7F0] border border-[#E8DDCF] rounded-lg p-2.5 text-[#111111]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="font-serif font-semibold text-sm text-[#111111] mb-3 flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#D4AF37]" />
                <span>{t("checkout.payment_method")}</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <label
                  className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                    formData.paymentMethod === "cod"
                      ? "border-[#D4AF37] bg-[#FAF7F0] font-semibold text-[#111111]"
                      : "border-[#E8DDCF] text-gray-600"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={() => setFormData({ ...formData, paymentMethod: "cod" })}
                    className="accent-[#D4AF37]"
                  />
                  <span>{t("checkout.cod")}</span>
                </label>

                <label
                  className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                    formData.paymentMethod === "card"
                      ? "border-[#D4AF37] bg-[#FAF7F0] font-semibold text-[#111111]"
                      : "border-[#E8DDCF] text-gray-600"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={() => setFormData({ ...formData, paymentMethod: "card" })}
                    className="accent-[#D4AF37]"
                  />
                  <span>{t("checkout.credit_card")}</span>
                </label>
              </div>
            </div>

            {/* Order Total & Submit */}
            <div className="pt-4 border-t border-[#E8DDCF] flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500">{t("cart.grand_total")}</span>
                <p className="text-xl font-bold font-sans text-[#D4AF37]">${subtotal} USD</p>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#111111] text-[#D4AF37] font-semibold text-xs rounded-lg hover:bg-[#222222] transition-colors shadow-md"
              >
                {t("checkout.place_order")}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto" />
            <h3 className="font-serif font-bold text-2xl text-[#111111]">
              {t("checkout.success_title")}
            </h3>
            <p className="text-sm text-[#666666]">
              {t("checkout.success_desc")}
              <span className="font-bold text-[#111111]">{orderRef}</span>
            </p>
            <div className="p-4 bg-[#FAF7F0] border border-[#E8DDCF] rounded-xl max-w-md mx-auto text-xs text-[#666666]">
              <p>{t("checkout.demo_warning")}</p>
            </div>
            <button
              onClick={handleClose}
              className="mt-6 px-8 py-3 bg-[#111111] text-[#D4AF37] font-semibold text-xs rounded-lg hover:bg-[#222222] transition-colors"
            >
              {t("checkout.back_to_shop")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
