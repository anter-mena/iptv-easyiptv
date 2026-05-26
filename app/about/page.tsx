import { AboutHero } from "@/components/about/about-hero"
import { Mission } from "@/components/about/about-mission"
import { Achievements } from "@/components/about/about-achievements"
import { Story } from "@/components/about/about-story"
import { Values } from "@/components/about/about-values"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Easy IPTV Story",
  description: "Learn about the mission, values, and journey of Easy IPTV. We're revolutionizing the streaming industry with cutting-edge technology.",
}

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <Mission />
      <Achievements />
      <Story />
      <Values />
    </main>
  )
}
