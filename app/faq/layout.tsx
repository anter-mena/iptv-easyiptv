import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "IPTV FAQ: Installation, Billing & Devices",
  description:
    "Have questions about Easy IPTV? Read our comprehensive FAQ for answers regarding installation, billing, subscriptions, and supported devices.",
  path: "/faq",
})

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
