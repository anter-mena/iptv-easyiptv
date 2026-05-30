import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Easy IPTV Support",
  description: "Have questions about Easy IPTV? Read our comprehensive FAQ for answers regarding installation, billing, subscriptions, and supported devices.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | Easy IPTV Support",
    description: "Have questions about Easy IPTV? Read our comprehensive FAQ for answers regarding installation, billing, subscriptions, and supported devices.",
    url: "/faq",
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
