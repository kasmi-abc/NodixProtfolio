import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NODIX Systems — Mister Wael | AI Automation & Systems Builder",
  description:
    "I build AI systems that automate businesses. AI Agents, Customer Support, Sales Automation and Business Workflows for companies, stores and business owners.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "NODIX Systems — AI Automation & Systems Builder",
    description:
      "I build AI systems that automate businesses. AI Agents, Customer Support, Sales Automation and Business Workflows.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "NODIX Systems — AI Automation & Systems Builder",
    description: "I build AI systems that automate businesses.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f14",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
