"use client";

import React from "react";
import Image from "next/image";
import { Star, CheckCircle } from "lucide-react";
import { Review } from "@/data/reviews";
import { useLanguage } from "@/context/LanguageContext";

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const { locale } = useLanguage();

  const name = review.name[locale];
  const role = review.role[locale];
  const productName = review.productName[locale];
  const comment = review.comment[locale];

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#E8DDCF] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? "fill-current" : "text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-[#666666]">{review.date}</span>
        </div>

        <p className="text-xs sm:text-sm text-[#111111] italic leading-relaxed mb-6 font-serif">
          &ldquo;{comment}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-[#E8DDCF]/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/50 shrink-0">
            <Image src={review.avatar} alt={name} fill className="object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-serif font-bold text-xs sm:text-sm text-[#111111]">{name}</h4>
              {review.verified && (
                <span title="Verified Client">
                  <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                </span>
              )}
            </div>
            <p className="text-[10px] text-[#666666]">{role}</p>
          </div>
        </div>

        <span className="text-[10px] px-2.5 py-1 bg-[#FAF7F0] border border-[#E8DDCF] rounded-full text-[#D4AF37] font-semibold">
          {productName}
        </span>
      </div>
    </div>
  );
};
