"use client"

import * as React from "react"
import { PageHero } from "@/components/ui/page-hero"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { faqs } from "@/components/home/home-faq"
import { InstallationCta } from "@/components/installation/installation-cta"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <main className="flex-1 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      <PageHero 
        subtitle="Knowledge Base"
        title="FAQ" 
        description="Frequently asked questions about our IPTV service." 
      />
      
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-4 mb-20">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-gray-50 border border-gray-100 shadow-sm transition-all duration-300"
              >
                <button
                  id={`faq-page-btn-${index}`}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-page-content-${index}`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left focus:outline-none"
                >
                  <span className={cn("text-sm font-bold uppercase tracking-tight transition-colors duration-300", openIndex === index ? "text-iptv-green" : "text-gray-900")}>
                    {faq.question}
                  </span>
                  <span className="relative shrink-0 flex items-center justify-center h-4 w-4 ml-4 transition-transform duration-300">
                    <Plus 
                      className={cn(
                        "absolute h-4 w-4 text-iptv-green transition-all duration-300",
                        openIndex === index ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
                      )} 
                    />
                    <Minus 
                      className={cn(
                        "absolute h-4 w-4 text-iptv-green transition-all duration-300",
                        openIndex === index ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
                      )} 
                    />
                  </span>
                </button>
                <div
                  id={`faq-page-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-page-btn-${index}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openIndex === index ? "max-h-[500px]" : "max-h-0"
                  )}
                >
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed text-gray-500 font-medium">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Component */}
          <InstallationCta 
            subtitle="Still have questions?"
            title="Contact Support"
            buttonText="Reach Out"
          />

        </div>
      </section>
    </main>
  )
}
