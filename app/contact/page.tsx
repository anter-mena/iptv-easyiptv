import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactMethods } from "@/components/contact/contact-methods"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Easy IPTV Support | 24/7 Customer Service Team",
  description: "Get in touch with Easy IPTV support. We are here 24/7 to help you with installation, billing, technical questions, and choosing the right plan.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: { images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    title: "Contact Easy IPTV Support | 24/7 Customer Service Team",
    description: "Get in touch with Easy IPTV support. We are here 24/7 to help you with installation, billing, technical questions, and choosing the right plan.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ContactHero />
      
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <ContactInfo />
            </div>
            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
