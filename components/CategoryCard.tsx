"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Category } from "@/data/categories";
import { useLanguage } from "@/context/LanguageContext";

export const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  const { locale, dir } = useLanguage();

  const name = category.name[locale];
  const description = category.description[locale];

  return (
    <Link
      href={`/shop?category=${category.slug}`}
      className="group relative block aspect-4/5 rounded-2xl overflow-hidden shadow-md border border-[#E8DDCF]"
    >
      <Image
        src={category.image}
        alt={name}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent group-hover:via-[#111111]/60 transition-colors duration-300" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <span className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase mb-1">
          {category.count} {locale === "ar" ? "عطور فاخرة" : "Perfumes"}
        </span>
        <h3 className="font-serif font-bold text-xl md:text-2xl text-white group-hover:text-[#D4AF37] transition-colors">
          {name}
        </h3>
        <p className="text-xs text-[#E8DDCF]/80 mt-1 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#D4AF37] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
          <span>{locale === "ar" ? "استكشف المجموعة" : "Explore Category"}</span>
          {dir === "rtl" ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
        </div>
      </div>
    </Link>
  );
};
