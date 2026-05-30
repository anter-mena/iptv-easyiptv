"use client"

import * as React from "react"
import Link from "next/link"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export const faqs = [
  {
    question: "Can I use my subscription on multiple devices at once?",
    answer: "Yes — multi-device plans let you stream simultaneously on 2, 3, or 4 screens at the same time. Use the device toggle on the pricing table to select the right option for your household.",
  },
  {
    question: "How does the 7-day guarantee work exactly?",
    answer: "If our service fails to work correctly on your end within the first 7 days — technical issues, connection problems, or anything on our side — we'll fix it or refund you in full. Contact us via email or WhatsApp to open a request.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Interac e-Transfer for Canadian customers, cryptocurrency, and other methods. Contact us on WhatsApp before purchasing to confirm your preferred payment option.",
  },
  {
    question: "Can I upgrade my plan after purchasing?",
    answer: "Absolutely. You can upgrade to a longer duration or add more devices at any time. Contact our support team and we'll adjust your subscription accordingly.",
  },
  {
    question: "Is there a free trial available before I buy?",
    answer: "Yes — we offer a free 24-hour trial so you can test the service on your devices before committing. Visit our Free Trial page or contact us on WhatsApp to get yours activated instantly.",
  },
  {
    question: "Do plans include Canadian channels and sports?",
    answer: "Yes. Every plan includes all major Canadian channels (CBC, CTV, Sportsnet, TSN, RDS, and more), NHL, CFL, NBA, MLB, and international sports — fully covered with no extra cost.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
            FREQUENTLY ASKED <span className="text-iptv-green">QUESTIONS</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-gray-500">
            Get answers to the most common questions about our IPTV service.
            Cannot find what you are looking for? Contact our 24/7 support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300"
            >
              <button
                id={`faq-home-btn-${index}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-home-content-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-5 py-3.5 text-left focus:outline-none"
              >
                <span className={cn("text-sm font-bold transition-colors duration-300", openIndex === index ? "text-iptv-green" : "text-gray-900")}>
                  {faq.question}
                </span>
                <span className="relative shrink-0 flex items-center justify-center h-4 w-4 transition-transform duration-300">
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
                id={`faq-home-content-${index}`}
                role="region"
                aria-labelledby={`faq-home-btn-${index}`}
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                )}
              >
                <div className="px-5 pb-4">
                  <p className="text-sm leading-relaxed text-gray-500">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-sm text-gray-500">Still have questions?</p>
          <Link href="/contact" className="inline-block rounded-md bg-iptv-green px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-iptv-green-dark ring-4 ring-iptv-green/20">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  )
}
