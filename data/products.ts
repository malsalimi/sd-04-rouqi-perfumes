export interface ProductNotes {
  top: { ar: string[]; en: string[] };
  heart: { ar: string[]; en: string[] };
  base: { ar: string[]; en: string[] };
}

export interface Product {
  id: string;
  slug: string;
  name: {
    ar: string;
    en: string;
  };
  category: "oriental" | "men" | "women" | "exclusive";
  categoryName: {
    ar: string;
    en: string;
  };
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  featured: boolean;
  isNew?: boolean;
  description: {
    ar: string;
    en: string;
  };
  scentProfile: ProductNotes;
  ingredients: {
    ar: string[];
    en: string[];
  };
  concentration: "Eau de Parfum" | "Extrait de Parfum";
  volumeOptions: number[]; // in ml
  images: string[];
  tags: string[];
}

export const productsData: Product[] = [
  {
    id: "prod-1",
    slug: "imperial-oud",
    name: {
      ar: "عود الإمبراطور",
      en: "Imperial Oud",
    },
    category: "oriental",
    categoryName: {
      ar: "عطور شرقية",
      en: "Oriental",
    },
    price: 120,
    originalPrice: 145,
    rating: 4.9,
    reviewsCount: 48,
    featured: true,
    isNew: true,
    description: {
      ar: "عطر فاخر بتركيبة شرقية عميقة تجمع بين أنقى نفحات العود الكمبودي المعتق والعنبر الملكي مع لمسات دافئة من المسك الخالص.",
      en: "A luxurious oriental fragrance with a rich character combining aged Cambodian oud, royal amber, and soft musk accents.",
    },
    scentProfile: {
      top: {
        ar: ["الهيل الهندي", "البرغموت الصقلي", "الزعفران المعتّق"],
        en: ["Indian Cardamom", "Sicilian Bergamot", "Aged Saffron"],
      },
      heart: {
        ar: ["خشب العود الكمبودي", "ورد الجوري", "الجلد الفاخر"],
        en: ["Cambodian Oud", "Damask Rose", "Fine Leather"],
      },
      base: {
        ar: ["العنبر الأسود", "المسك الخالص", "خشب الصندل"],
        en: ["Black Amber", "Pure Musk", "Sandalwood"],
      },
    },
    ingredients: {
      ar: ["العود", "العنبر", "المسك", "الزعفران"],
      en: ["Oud", "Amber", "Musk", "Saffron"],
    },
    concentration: "Extrait de Parfum",
    volumeOptions: [50, 100, 200],
    images: [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1000",
    ],
    tags: ["عود", "شرقي", "ملكي", "ثبات قوي"],
  },
  {
    id: "prod-2",
    slug: "amber-breeze",
    name: {
      ar: "نسمة العنبر",
      en: "Amber Breeze",
    },
    category: "oriental",
    categoryName: {
      ar: "عطر دافئ",
      en: "Warm Fragrance",
    },
    price: 95,
    rating: 4.8,
    reviewsCount: 36,
    featured: true,
    description: {
      ar: "عبق دافئ ينساب كالنسيم الشرقي الهادئ، يحمل نفحات دافئة من العنبر الذهبي، الفانيلا الاستوائية، والتوابل الثمينة.",
      en: "A warm aura that glides like a gentle oriental breeze, featuring golden amber, Madagascar vanilla, and exotic spices.",
    },
    scentProfile: {
      top: {
        ar: ["الزنجبيل الفوار", "الفلفل الوردي", "القرفة المخملية"],
        en: ["Sparkling Ginger", "Pink Pepper", "Velvet Cinnamon"],
      },
      heart: {
        ar: ["العنبر الذهبي", "البنزوين", "زهرة الأوركيد"],
        en: ["Golden Amber", "Benzoin", "Orchid Blossom"],
      },
      base: {
        ar: ["فانيلا مدغشقر", "خشب الأرز", "مسك الكشمير"],
        en: ["Madagascar Vanilla", "Cedarwood", "Cashmere Musk"],
      },
    },
    ingredients: {
      ar: ["العنبر الذهبي", "فانيلا مدغشقر", "الفلفل الوردي"],
      en: ["Golden Amber", "Madagascar Vanilla", "Pink Pepper"],
    },
    concentration: "Eau de Parfum",
    volumeOptions: [50, 100],
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1000",
    ],
    tags: ["عنبر", "دافئ", "فانيلا"],
  },
  {
    id: "prod-3",
    slug: "night-blossom",
    name: {
      ar: "زهرة الليل",
      en: "Night Blossom",
    },
    category: "women",
    categoryName: {
      ar: "عطور نسائية",
      en: "Floral",
    },
    price: 85,
    originalPrice: 110,
    rating: 4.7,
    reviewsCount: 29,
    featured: true,
    description: {
      ar: "باقة مخملية ساحرة من أزهار الياسمين النادرة وزهور الياقوتية التي تتفتح فقط تحت ضوء القمر، يكتمل سحرها بنفحات المسك الأبيض.",
      en: "A mesmerizing velvet bouquet of rare night-blooming jasmine and hyacinth, perfectly balanced with white silk musk.",
    },
    scentProfile: {
      top: {
        ar: ["الياسمين الليلي", "زهر البرتقال", "التوت الأسود"],
        en: ["Night Jasmine", "Neroli", "Blackberry"],
      },
      heart: {
        ar: ["الورد البيضاء", "أزهار الياقوتية", "الزنبق"],
        en: ["White Rose", "Hyacinth", "Lily"],
      },
      base: {
        ar: ["المسك الأبيض", "العنبر البلوري", "نجيل الهند"],
        en: ["White Musk", "Crystal Amber", "Vetiver"],
      },
    },
    ingredients: {
      ar: ["الياسمين الليلي", "المسك الأبيض", "زهر البرتقال"],
      en: ["Night Jasmine", "White Musk", "Neroli"],
    },
    concentration: "Eau de Parfum",
    volumeOptions: [50, 100],
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000",
    ],
    tags: ["زهور", "أنثوي", "مسك أبيض"],
  },
  {
    id: "prod-4",
    slug: "royal-velvet-oud",
    name: {
      ar: "المخمل الملكي",
      en: "Royal Velvet Oud",
    },
    category: "exclusive",
    categoryName: {
      ar: "مجموعات خاصة",
      en: "Exclusive",
    },
    price: 155,
    originalPrice: 180,
    rating: 5.0,
    reviewsCount: 52,
    featured: true,
    isNew: true,
    description: {
      ar: "شاهكار عطري من التشكيلة الملكية المحدودة، يجسد الفخامة في أنقى صورها بمزيج العود الهندي المعتق والبنفسج الإيطالي.",
      en: "A royal masterpiece from our limited series, embodying ultimate luxury through rare Indian oud and Italian violet.",
    },
    scentProfile: {
      top: {
        ar: ["الورود النادرة", "أوراق البنفسج", "البرغموت الملكي"],
        en: ["Rare Roses", "Violet Leaves", "Royal Bergamot"],
      },
      heart: {
        ar: ["العود الهندي المعتّق", "العنبر الروماني", "البتشولي"],
        en: ["Aged Indian Oud", "Roman Amber", "Patchouli"],
      },
      base: {
        ar: ["المسك الملكي", "الفانيلا السوداء", "خشب البقس"],
        en: ["Royal Musk", "Black Vanilla", "Boxwood"],
      },
    },
    ingredients: {
      ar: ["العود الهندي", "العنبر الروماني", "البنفسج"],
      en: ["Indian Oud", "Roman Amber", "Violet"],
    },
    concentration: "Extrait de Parfum",
    volumeOptions: [100, 200],
    images: [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000",
    ],
    tags: ["حصري", "ملكي", "عود هندي"],
  },
  {
    id: "prod-5",
    slug: "desert-saffron",
    name: {
      ar: "زعفران الصحراء",
      en: "Desert Saffron",
    },
    category: "men",
    categoryName: {
      ar: "عطور رجالية",
      en: "Men",
    },
    price: 110,
    rating: 4.8,
    reviewsCount: 31,
    featured: false,
    description: {
      ar: "عطر رجالي متألق يروي قصة الأصالة العربية بأريج الزعفران الأحمر، الجلود الإسبانية، والبتشولي الدافئ.",
      en: "A distinguished masculine scent narrating Arabian heritage with red saffron, Spanish leather, and warm patchouli.",
    },
    scentProfile: {
      top: {
        ar: ["الزعفران الأحمر", "الجريب فروت", "الكزبرة"],
        en: ["Red Saffron", "Grapefruit", "Coriander"],
      },
      heart: {
        ar: ["الجلد الإسباني", "البتشولي الإندونيسي", "جوزة الطيب"],
        en: ["Spanish Leather", "Indonesian Patchouli", "Nutmeg"],
      },
      base: {
        ar: ["خشب الصندل", "العنبر الكهرومغناطيسي", "التبغ الفاخر"],
        en: ["Sandalwood", "Ambergris", "Fine Tobacco"],
      },
    },
    ingredients: {
      ar: ["الزعفران", "الجلد", "البتشولي"],
      en: ["Saffron", "Leather", "Patchouli"],
    },
    concentration: "Eau de Parfum",
    volumeOptions: [50, 100],
    images: [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1000",
    ],
    tags: ["رجالي", "زعفران", "جلد"],
  },
  {
    id: "prod-6",
    slug: "golden-musk",
    name: {
      ar: "المسك الذهبي",
      en: "Golden Musk",
    },
    category: "exclusive",
    categoryName: {
      ar: "مجموعات خاصة",
      en: "Exclusive",
    },
    price: 130,
    rating: 4.9,
    reviewsCount: 41,
    featured: true,
    description: {
      ar: "عطر خالي من الكحول يعتمد على النقاء المطلق لمسك الغزال الذهبي والزنابق النادرة ليمنحك ثباتاً هادئاً وراقياً.",
      en: "A pure composition centering on golden musk and rare lilies, delivering serene sophistication with sublime sillage.",
    },
    scentProfile: {
      top: {
        ar: ["الزنابق البيضاء", "الخزامى الناعمة", "المندرين"],
        en: ["White Lilies", "Soft Lavender", "Mandarin"],
      },
      heart: {
        ar: ["المسك الذهبي النقي", "خشب أرز الأطلس", "أوراق الشاي"],
        en: ["Pure Golden Musk", "Atlas Cedar", "Tea Leaves"],
      },
      base: {
        ar: ["العنبر الأبيض", "مسك الغزال النادر", "الفانيلا البيضاء"],
        en: ["White Amber", "Rare Deer Musk", "White Vanilla"],
      },
    },
    ingredients: {
      ar: ["المسك الذهبي", "الزنابق البيضاء", "العنبر الأبيض"],
      en: ["Golden Musk", "White Lilies", "White Amber"],
    },
    concentration: "Extrait de Parfum",
    volumeOptions: [50, 100, 200],
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000",
    ],
    tags: ["مسك", "نقي", "ناعم"],
  },
  {
    id: "prod-7",
    slug: "french-rose-guitare",
    name: {
      ar: "ورد جراس الفرنسي",
      en: "Grasse French Rose",
    },
    category: "women",
    categoryName: {
      ar: "عطور نسائية",
      en: "Women",
    },
    price: 105,
    originalPrice: 125,
    rating: 4.7,
    reviewsCount: 38,
    featured: false,
    description: {
      ar: "مستخلص نقي من حقول أزهار جراس الفرنسية الشهيرة، ممزوج مع نفحات الفراولة الباريسية والفاوانيا.",
      en: "Pure essence harvested from Grasse rose fields, combined with Parisian wild berries and peony notes.",
    },
    scentProfile: {
      top: {
        ar: ["الفراولة الوردية", "التوت الأبيض", "البرغموت"],
        en: ["Pink Strawberry", "White Raspberry", "Bergamot"],
      },
      heart: {
        ar: ["ورد جراس الفرنسي", "الفاوانيا الناعمة", "المغنوليا"],
        en: ["Grasse French Rose", "Soft Peony", "Magnolia"],
      },
      base: {
        ar: ["المسك الكشميري", "خشب الصندل الأبيض", "العنبر الروزي"],
        en: ["Cashmere Musk", "White Sandalwood", "Rose Amber"],
      },
    },
    ingredients: {
      ar: ["ورد جراس", "المغنوليا", "المسك"],
      en: ["Grasse Rose", "Magnolia", "Musk"],
    },
    concentration: "Eau de Parfum",
    volumeOptions: [50, 100],
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000",
    ],
    tags: ["ورد فرنسي", "زهري", "باريسي"],
  },
  {
    id: "prod-8",
    slug: "smoke-and-leather",
    name: {
      ar: "الدخان والجلد",
      en: "Smoke & Leather",
    },
    category: "men",
    categoryName: {
      ar: "عطور رجالية",
      en: "Men",
    },
    price: 115,
    rating: 4.8,
    reviewsCount: 27,
    featured: false,
    isNew: true,
    description: {
      ar: "عطر رجالي قوي وجريء يعبر عن الهيبة بعبق الحطب المشتعل والجلود المدبوغة والأخشاب النادرة.",
      en: "A bold masculine fragrance expressing power through smoldering woods, tanned leather, and rare resin accords.",
    },
    scentProfile: {
      top: {
        ar: ["الفلفل الأسود", "أخشاب البتولا", "البخور الفاخر"],
        en: ["Black Pepper", "Birch Wood", "Fine Incense"],
      },
      heart: {
        ar: ["الجلد المعتق", "النجيل الهندي", "خشب القياق"],
        en: ["Aged Leather", "Vetyver", "Guaiac Wood"],
      },
      base: {
        ar: ["العنبر الأسود", "أخشاب الأرز", "المسك المظلم"],
        en: ["Black Amber", "Cedarwood", "Dark Musk"],
      },
    },
    ingredients: {
      ar: ["الجلد", "البخور", "خشب البتولا"],
      en: ["Leather", "Incense", "Birch Wood"],
    },
    concentration: "Eau de Parfum",
    volumeOptions: [50, 100],
    images: [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000",
    ],
    tags: ["جلد", "دخان", "رجالي"],
  },
];
