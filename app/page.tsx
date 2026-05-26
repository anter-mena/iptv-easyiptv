import { Hero } from "@/components/home/home-hero"
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
