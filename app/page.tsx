import { Metadata } from "next"
import { Hero } from "@/components/home/home-hero"

export const metadata: Metadata = {
  title: "Easy IPTV | Premium Live TV, Sports & VOD Streaming Service",
  description: "Experience the ultimate IPTV streaming service. Access 20,000+ live TV channels, sports, and 50,000+ VOD movies in 4K quality with no buffering.",
  alternates: {
    canonical: "/",
  },
}
import { Features } from "@/components/home/home-features"
import { Experience } from "@/components/home/home-experience"
import { Pricing } from "@/components/home/home-pricing"
import { ContentLibrary } from "@/components/home/home-content-library"
import { AppFeatures } from "@/components/home/home-app-features"
import { HowItWorks } from "@/components/home/home-how-it-works"
import { FAQ } from "@/components/home/home-faq"
import { Reviews } from "@/components/home/home-reviews"
import { CTA } from "@/components/home/home-cta"

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Easy IPTV Subscription",
            "description": "Premium IPTV subscription featuring thousands of live channels, VOD, movies, and TV shows in 4K/HD.",
            "brand": {
              "@type": "Brand",
              "name": "Easy IPTV"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://easyiptv.ca/#pricing",
              "priceCurrency": "USD",
              "price": "14.99",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
      <Hero />
      <Features />
      <Experience />
      <Pricing />
      <ContentLibrary />
      <AppFeatures />
      <HowItWorks />
      <FAQ />
      <Reviews />
      <CTA />
    </>
  )
}
