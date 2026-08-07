import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "رُقي للعطور الفاخرة | Rouqi Perfumes Demo",
  description:
    "علامة عطور تجريبية تقدم روائح فاخرة تجمع بين الأصالة والأناقة. A fictional luxury fragrance brand creating elegant scents inspired by sophistication and individuality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="bg-[#FAF7F0] text-[#111111] flex flex-col min-h-screen antialiased">
        <LanguageProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
