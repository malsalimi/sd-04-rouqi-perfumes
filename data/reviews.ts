export interface Review {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  role: {
    ar: string;
    en: string;
  };
  avatar: string;
  rating: number;
  date: string;
  productName: {
    ar: string;
    en: string;
  };
  comment: {
    ar: string;
    en: string;
  };
  verified: boolean;
}

export const reviewsData: Review[] = [
  {
    id: "rev-1",
    name: {
      ar: "ليلى سامي",
      en: "Laila Sami",
    },
    role: {
      ar: "عميلة مميزة",
      en: "VIP Client",
    },
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "2026-02-10",
    productName: {
      ar: "عود الإمبراطور",
      en: "Imperial Oud",
    },
    comment: {
      ar: "رائحة مميزة وتصميم المتجر رائع. عود الإمبراطور ثباته خيالي ويستحق كل ريال.",
      en: "Beautiful fragrance and elegant shopping experience. Imperial Oud has incredible sillage and is worth every dollar.",
    },
    verified: true,
  },
  {
    id: "rev-2",
    name: {
      ar: "طارق المنصوري",
      en: "Tariq Al-Mansouri",
    },
    role: {
      ar: "جامع عطور",
      en: "Fragrance Collector",
    },
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "2026-02-04",
    productName: {
      ar: "المخمل الملكي",
      en: "Royal Velvet Oud",
    },
    comment: {
      ar: "تجربة تسوق فاخرة بحق. العبوة الملكية والاهتمام بالتفاصيل يثبت احترافية رُقي في عالم العطور.",
      en: "Truly a luxury shopping experience. The royal packaging and attention to detail showcase Rouqi's mastery in fine perfumery.",
    },
    verified: true,
  },
  {
    id: "rev-3",
    name: {
      ar: "ريم الخليفة",
      en: "Reem Al-Khalifa",
    },
    role: {
      ar: "مصممة أزياء",
      en: "Fashion Designer",
    },
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "2026-01-28",
    productName: {
      ar: "زهرة الليل",
      en: "Night Blossom",
    },
    comment: {
      ar: "عطر زهرة الليل أصبح بصمتي الخاصة في المناسبات. التغليف أنيق والعطر ثابت ومبهج.",
      en: "Night Blossom has become my signature scent for evening galas. Elegant packaging and long-lasting joyful sillage.",
    },
    verified: true,
  },
  {
    id: "rev-4",
    name: {
      ar: "فهد العتيبي",
      en: "Fahad Al-Otaibi",
    },
    role: {
      ar: "عميل",
      en: "Verified Buyer",
    },
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "2026-01-15",
    productName: {
      ar: "نسمة العنبر",
      en: "Amber Breeze",
    },
    comment: {
      ar: "تركيبة العنبر دافئة جداً ومريحة للأعصاب. سرعة الشحن الفاخر وتغليف الهدية ممتازان.",
      en: "The amber blend is warm and incredibly comforting. Luxury fast shipping and gift wrapping were superb.",
    },
    verified: true,
  },
];
