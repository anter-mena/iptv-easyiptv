import { AboutHero } from "@/components/about/about-hero"
import { Mission } from "@/components/about/about-mission"
import { Achievements } from "@/components/about/about-achievements"
import { Story } from "@/components/about/about-story"
import { Values } from "@/components/about/about-values"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "About Us: Our Mission & Story",
  description:
    "Learn about the mission, values, and journey of Easy IPTV. We are revolutionizing the streaming industry with cutting-edge technology and 24/7 support.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <div className="flex-1">
      <AboutHero />
      <Mission />
      <Achievements />
      <Story />
      <Values />
    </div>
  )
}
