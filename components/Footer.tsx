"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Mail, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { locale, t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#111111] text-[#FAF7F0] pt-16 pb-8 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#FAF7F0]/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B59226] flex items-center justify-center text-[#111111]">
                <Sparkles className="w-4 h-4 fill-current" />
              </div>
              <span className="font-serif text-2xl font-bold text-[#D4AF37]">
                {locale === "ar" ? "رُقـــي" : "ROUQI"}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#E8DDCF]/70 max-w-sm">
              {t("brand.description")}
            </p>
            <div className="pt-2 text-xs text-[#D4AF37]/80">
              <span>{t("brand.slogan")}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-sm text-[#D4AF37] uppercase tracking-wider mb-4">
              {t("footer.quick_links")}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-[#FAF7F0]/70 hover:text-[#D4AF37] transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-[#FAF7F0]/70 hover:text-[#D4AF37] transition-colors">
                  {t("nav.shop")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#FAF7F0]/70 hover:text-[#D4AF37] transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#FAF7F0]/70 hover:text-[#D4AF37] transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-[#FAF7F0]/70 hover:text-[#D4AF37] transition-colors">
                  {t("nav.cart")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Scent Categories */}
          <div>
            <h3 className="font-serif font-semibold text-sm text-[#D4AF37] uppercase tracking-wider mb-4">
              {t("footer.categories")}
            </h3>
            <ul className="space-y-2 text-xs text-[#FAF7F0]/70">
              <li>
                <Link href="/shop?category=oriental" className="hover:text-[#D4AF37] transition-colors">
                  {locale === "ar" ? "عطور شرقية (Oriental)" : "Oriental Fragrances"}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=men" className="hover:text-[#D4AF37] transition-colors">
                  {locale === "ar" ? "عطور رجالية (Men)" : "Men's Fragrances"}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=women" className="hover:text-[#D4AF37] transition-colors">
                  {locale === "ar" ? "عطور نسائية (Women)" : "Women's Fragrances"}
                </Link>
              </li>
              <li>
                <Link href="/shop?category=exclusive" className="hover:text-[#D4AF37] transition-colors">
                  {locale === "ar" ? "مجموعات خاصة (Exclusive)" : "Exclusive Collections"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-semibold text-sm text-[#D4AF37] uppercase tracking-wider mb-4">
              {t("footer.newsletter_title")}
            </h3>
            <p className="text-xs text-[#E8DDCF]/70 mb-3 leading-relaxed">
              {t("footer.newsletter_desc")}
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-2.5 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-lg text-xs text-[#D4AF37]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{t("footer.subscribed_success")}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 text-[#FAF7F0]/40" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("footer.email_placeholder")}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 ltr:pl-9 ltr:pr-3 rtl:pr-9 rtl:pl-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2.5 bg-[#D4AF37] text-[#111111] rounded-lg text-xs font-semibold hover:bg-[#B59226] transition-colors shrink-0 flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5 rtl:rotate-180" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start text-xs text-[#E8DDCF]/60">
          <div>
            <p>{t("footer.rights")}</p>
            <p className="mt-1 text-[#D4AF37]/80 text-[11px]">
              {t("footer.collection_tag")}
            </p>
          </div>
          <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg text-[#D4AF37] max-w-md text-[11px] text-center">
            {t("footer.demo_disclaimer")}
          </div>
        </div>
      </div>
    </footer>
  );
};
