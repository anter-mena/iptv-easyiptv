import { AboutHero } from "@/components/about/about-hero"
import { Mission } from "@/components/about/about-mission"
import { Achievements } from "@/components/about/about-achievements"
import { Story } from "@/components/about/about-story"
import { Values } from "@/components/about/about-values"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Easy IPTV - The Best Premium Streaming Service Provider",
  description: "Learn about the mission, values, and journey of Easy IPTV. We are revolutionizing the streaming industry with cutting-edge technology and 24/7 support.",
  alternates: {
    canonical: "/about",
  },
  openGraph: { images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "About Easy IPTV - The Best Premium Streaming Service Provider",
    description: "Learn about the mission, values, and journey of Easy IPTV. We are revolutionizing the streaming industry with cutting-edge technology and 24/7 support.",
    url: "/about",
  },
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
