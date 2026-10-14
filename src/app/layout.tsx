import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nodix-portfolio.vercel.app";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "NODIX Systems — Mister Wael | AI Automation & Systems Builder",
    template: "%s | NODIX Systems",
  },
  description:
    "I build AI systems that automate businesses. AI Agents, Customer Support, Sales Automation and Business Workflows for companies, stores and business owners. نبني أنظمة ذكاء اصطناعي تؤتمت المتاجر والشركات.",
  keywords: [
    "AI automation",
    "AI agents",
    "WhatsApp automation",
    "Telegram bot",
    "n8n",
    "NODIX",
    "Mister Wael",
    "أتمتة",
    "ذكاء اصطناعي",
  ],
  authors: [{ name: "Mister Wael — NODIX Systems" }],
  creator: "NODIX Systems",
  alternates: { canonical: SITE },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/nodixlogo.jpg" },
  openGraph: {
    title: "NODIX Systems — AI Automation & Systems Builder",
    description:
      "AI Agents, Customer Support, Sales Automation and Business Workflows for stores and companies.",
    url: SITE,
    siteName: "NODIX Systems",
    locale: "en_US",
    alternateLocale: ["ar_DZ", "ar"],
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NODIX Systems — AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NODIX Systems — AI Automation & Systems Builder",
    description: "I build AI systems that automate businesses.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f14",
};

// 5) Structured data so Google understands who you are
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NODIX Systems — Mister Wael",
  url: SITE,
  description:
    "AI automation and systems builder: AI agents, WhatsApp/Telegram automation, sales and support systems.",
  sameAs: ["https://www.instagram.com/nodix.core/"],
  areaServed: ["DZ", "MENA"],
  priceRange: "$$",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <Script
          id="nodix-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* 6) Optional GA — set NEXT_PUBLIC_GA_ID in Vercel to enable */}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="nodix-ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        ) : null}
        {/* Optional Plausible — set NEXT_PUBLIC_PLAUSIBLE_DOMAIN to enable */}
        {PLAUSIBLE_DOMAIN ? (
          <Script
            src="https://plausible.io/js/script.js"
            data-domain={PLAUSIBLE_DOMAIN}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
