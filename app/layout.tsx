import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});


import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ChatBot } from "@/components/chatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://easyiptv.ca"),
  title: {
    default: "Easy IPTV - Premium Streaming Experience",
    template: "%s | Easy IPTV",
  },
  description: "The ultimate platform for easy and high-quality IPTV streaming. Access your favorite channels anywhere, anytime.",
  keywords: ["IPTV", "streaming", "live tv", "easy iptv", "premium streaming"],
  authors: [{ name: "Easy IPTV Team" }],
  creator: "Easy IPTV Team",
  openGraph: { images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
    url: "/", 
    title: "Easy IPTV - Premium Streaming Experience",
    description: "The ultimate platform for easy and high-quality IPTV streaming.",
    siteName: "Easy IPTV",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy IPTV - Premium Streaming Experience",
    description: "The ultimate platform for easy and high-quality IPTV streaming.",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: { canonical: "https://easyiptv.ca/" },
  themeColor: "#7fa409",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Easy IPTV",
                  "url": "https://easyiptv.ca",
                  "logo": "https://easyiptv.ca/logo.svg",
                  "description": "Premium IPTV streaming service providing thousands of live channels, movies, and TV shows in 4K quality."
                },
                {
                  "@type": "WebSite",
                  "name": "Easy IPTV",
                  "url": "https://easyiptv.ca"
                }
              ]
            })
          }}
        />
      </head>
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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-931ZQHP0C9" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-931ZQHP0C9');
        `}
      </Script>
    </html>
  );
}
