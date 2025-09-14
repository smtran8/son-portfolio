import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Son Tran — Portfolio",
  description:
    "I’m a data-driven builder who enjoys turning messy real-world signals into clean systems and useful products. I’ve shipped analytics pipelines, LLM-powered reporting, forecasting tools, and UI that people actually use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mont.variable} font-sans`}> 
        <div className="mx-auto max-w-3xl px-6">
          <Nav />
        </div>
        <main className="mx-auto max-w-3xl px-6 py-10">
          {children}
        </main>
        <div className="mx-auto max-w-3xl px-6">
          <Footer />
        </div>
      </body>
    </html>
  );
}
