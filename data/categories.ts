export interface Category {
  id: string;
  slug: string;
  name: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  image: string;
  count: number;
}

export const categoriesData: Category[] = [
  {
    id: "cat-1",
    slug: "oriental",
    name: {
      ar: "عطور شرقية",
      en: "Oriental Fragrances",
    },
    description: {
      ar: "تركيبات عميقة من العود الملكي، العنبر النادر، والمسك الفاخر.",
      en: "Deep compositions of royal oud, rare amber, and opulent musk.",
    },
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800",
    count: 6,
  },
  {
    id: "cat-2",
    slug: "men",
    name: {
      ar: "عطور رجالية",
      en: "Men's Collection",
    },
    description: {
      ar: "عطور تمنحك حضوراً واثقاً وقوياً بنفحات خشبية وحارة.",
      en: "Fragrances of confidence and strength with woody and spicy accords.",
    },
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
    count: 5,
  },
  {
    id: "cat-3",
    slug: "women",
    name: {
      ar: "عطور نسائية",
      en: "Women's Collection",
    },
    description: {
      ar: "أناقة الأنوثة الطاغية مع أزهار جراس والفانيلا والمسك الأبيض.",
      en: "Timeless feminine elegance with Grasse florals, vanilla, and white musk.",
    },
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    count: 5,
  },
  {
    id: "cat-4",
    slug: "exclusive",
    name: {
      ar: "مجموعات خاصة",
      en: "Exclusive Collections",
    },
    description: {
      ar: "اصدارات محدودة وعطور نادرة تُصنع بطلبيات خاصة لعشاق التميز.",
      en: "Limited edition and rare scents handcrafted for fragrance connoisseurs.",
    },
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
    count: 4,
  },
];
