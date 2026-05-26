import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});


import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ChatBot } from "@/components/chatbot";

export const metadata: Metadata = {
  title: {
    default: "Easy IPTV - Premium Streaming Experience",
    template: "%s | Easy IPTV",
  },
  description: "The ultimate platform for easy and high-quality IPTV streaming. Access your favorite channels anywhere, anytime.",
  keywords: ["IPTV", "streaming", "live tv", "easy iptv", "premium streaming"],
  authors: [{ name: "Easy IPTV Team" }],
  creator: "Easy IPTV Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://easyiptv.com", // Placeholder
    title: "Easy IPTV - Premium Streaming Experience",
    description: "The ultimate platform for easy and high-quality IPTV streaming.",
    siteName: "Easy IPTV",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy IPTV - Premium Streaming Experience",
    description: "The ultimate platform for easy and high-quality IPTV streaming.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body 
        className={`${inter.variable} relative flex min-h-screen flex-col bg-background font-sans antialiased`}
        suppressHydrationWarning
      >
        <div className="relative flex min-h-screen flex-col" suppressHydrationWarning>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <ChatBot />
      </body>
    </html>
  );
}
