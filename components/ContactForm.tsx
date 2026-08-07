"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#E8DDCF] shadow-sm">
      <div className="flex items-center gap-2 mb-2 p-2.5 rounded-lg bg-[#FAF7F0] border border-[#E8DDCF] text-[11px] text-[#666666]">
        <ShieldAlert className="w-4 h-4 text-[#D4AF37] shrink-0" />
        <span>{t("checkout.demo_warning")}</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div>
          <label className="block text-xs font-semibold text-[#111111] mb-1.5">
            {t("contact.form_name")} *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Laila Sami"
            className="w-full bg-[#FAF7F0] border border-[#E8DDCF] rounded-lg p-3 text-xs text-[#111111] focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#111111] mb-1.5">
            {t("contact.form_email")} *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="contact@example.com"
            className="w-full bg-[#FAF7F0] border border-[#E8DDCF] rounded-lg p-3 text-xs text-[#111111] focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#111111] mb-1.5">
            {t("contact.form_subject")}
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="Fragrance inquiry"
            className="w-full bg-[#FAF7F0] border border-[#E8DDCF] rounded-lg p-3 text-xs text-[#111111] focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#111111] mb-1.5">
            {t("contact.form_message")} *
          </label>
          <textarea
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="..."
            className="w-full bg-[#FAF7F0] border border-[#E8DDCF] rounded-lg p-3 text-xs text-[#111111] focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-[#111111] text-[#D4AF37] font-semibold text-sm rounded-lg hover:bg-[#222222] transition-colors flex items-center justify-center gap-2 shadow-md"
        >
          <span>{t("contact.form_submit")}</span>
          <Send className="w-4 h-4 rtl:rotate-180" />
        </button>

        {submitted && (
          <div className="p-3.5 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-xs text-green-800">
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <span>{t("contact.form_success")}</span>
          </div>
        )}
      </form>
    </div>
  );
};
