import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Son Tran — Data Science & ML Engineer",
    template: "%s | Son Tran"
  },
  description:
    "Data Science student at University of Florida. Building analytics pipelines, LLM-powered reporting, forecasting tools, and ML models. Passionate about turning data into actionable insights.",
  keywords: ["data science", "machine learning", "python", "analytics", "ML engineer", "University of Florida"],
  authors: [{ name: "Son Tran" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Son Tran — Data Science & ML Engineer",
    description: "Data Science student at University of Florida. Building analytics pipelines, LLM-powered reporting, forecasting tools, and ML models.",
    type: "website",
    siteName: "Son Tran Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Son Tran — Data Science & ML Engineer",
    description: "Data Science student at University of Florida. Building analytics pipelines, LLM-powered reporting, forecasting tools, and ML models.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mont.variable} font-sans`}> 
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-4xl px-6">
            <Nav />
          </div>
          <main className="mx-auto max-w-4xl px-6 py-10">
            {children}
          </main>
          <div className="mx-auto max-w-4xl px-6">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
