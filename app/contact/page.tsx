"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  const { locale, t } = useLanguage();

  const faqs = [
    {
      q: locale === "ar" ? "هل المنتجات والخدمات حقيقية؟" : "Are the products and checkout real?",
      a: locale === "ar" ? "هذا مشروع عرض أعمال تجريبي (Portfolio Project). جميع المنتجات والبيانات افتراضية." : "This is a fictional demo portfolio project. All products and data are fictional.",
    },
    {
      q: locale === "ar" ? "كيف يمكنني تجربة إتمام الطلب؟" : "How do I test the order process?",
      a: locale === "ar" ? "يمكنك إضافة العطور للحقيبة والانتقال لصفحة الطلب لمشاهدة الدفع التجريبي والتأكيد التفاعلي." : "Add any fragrance to your shopping bag and proceed to demo checkout to simulate full ordering.",
    },
    {
      q: locale === "ar" ? "ما هي لغات الموقع المتاحة؟" : "Which languages are supported?",
      a: locale === "ar" ? "يدعم الموقع اللغة العربية بشكل افتراضي (RTL) بالإضافة إلى اللغة الإنجليزية (LTR)." : "The website supports Arabic as default (RTL) and English (LTR) with instant switching.",
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <SectionTitle
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      {/* Demo Warning Banner */}
      <div className="p-4 bg-[#111111] text-[#D4AF37] rounded-xl border border-[#D4AF37]/40 flex items-center justify-center gap-3 text-xs text-center shadow-md">
        <ShieldAlert className="w-5 h-5 shrink-0" />
        <span>{t("footer.demo_disclaimer")}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Information & Store Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#E8DDCF] shadow-xs space-y-6">
            <h3 className="font-serif font-bold text-xl text-[#111111] border-b border-[#E8DDCF] pb-3">
              {locale === "ar" ? "معلومات التواصل التجريبية" : "Demo Contact Info"}
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF7F0] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#111111] block mb-0.5">
                    {t("contact.info_email_title")}
                  </span>
                  <span className="text-[#666666] font-mono">{t("contact.info_email")}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF7F0] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#111111] block mb-0.5">
                    {t("contact.info_phone_title")}
                  </span>
                  <span className="text-[#666666] font-mono">{t("contact.info_phone")}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF7F0] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#111111] block mb-0.5">
                    {t("contact.info_address_title")}
                  </span>
                  <span className="text-[#666666]">{t("contact.info_address")}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FAF7F0] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-[#111111] block mb-0.5">
                    {locale === "ar" ? "ساعات العمل التجريبية" : "Demo Boutique Hours"}
                  </span>
                  <span className="text-[#666666]">
                    {locale === "ar" ? "السبت - الخميس: 10:00 ص - 10:00 م" : "Sat - Thu: 10:00 AM - 10:00 PM"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="pt-8 space-y-6">
        <h3 className="font-serif font-bold text-2xl text-[#111111] text-center">
          {t("contact.faq_title")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E8DDCF] shadow-xs space-y-2">
              <h4 className="font-serif font-bold text-sm text-[#111111]">{faq.q}</h4>
              <p className="text-xs text-[#666666] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
