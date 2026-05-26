"use client"

import * as React from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What is IPTV and how does it work?",
    answer: "IPTV (Internet Protocol Television) delivers television content through internet networks instead of traditional cable or satellite. Our service streams high-quality content directly to your device using your internet connection, providing access to thousands of live channels and on-demand content.",
  },
  {
    question: "What devices are supported?",
    answer: "Our IPTV service works on virtually all devices including Smart TVs, Android/iOS devices, Amazon Firestick, Apple TV, MAG boxes, computers, and more. We provide detailed installation guides for each device type.",
  },
  {
    question: "How many devices can I use simultaneously?",
    answer: "The number of simultaneous connections depends on your subscription plan. Our plans range from 1 connection to 5 connections, allowing multiple family members to watch different content at the same time.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a free trial period for all new customers. You can test our service and explore all features without any commitment. No credit card required for the trial period.",
  },
  {
    question: "What internet speed do I need?",
    answer: "For optimal viewing experience, we recommend a minimum internet speed of 10 Mbps for HD content and 25 Mbps for 4K content. A stable internet connection ensures smooth streaming without buffering.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. We also offer a 7-day money-back guarantee if you are not completely satisfied with our service.",
  },
  {
    question: "Do you provide customer support?",
    answer: "Absolutely! We provide 24/7 customer support through live chat, email, and our support ticket system. Our expert team is always ready to help you with installation, troubleshooting, or any questions you may have.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees whatsoever! The price you see is the price you pay. Our transparent pricing includes all features, channels, and support. No setup fees, no equipment rental, no surprise charges.",
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
          <p className="mx-auto max-w-xl text-xs text-gray-500">
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
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-5 py-3.5 text-left focus:outline-none"
              >
                <span className={cn("text-sm font-bold transition-colors duration-300", openIndex === index ? "text-iptv-green" : "text-gray-900")}>
                  {faq.question}
                </span>
                <span className="shrink-0 transition-transform duration-300">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4 text-iptv-green" />
                  ) : (
                    <Plus className="h-4 w-4 text-iptv-green" />
                  )}
                </span>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                )}
              >
                <div className="px-5 pb-4">
                  <p className="text-xs leading-relaxed text-gray-500">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-xs text-gray-500">Still have questions?</p>
          <button className="rounded-md bg-iptv-green px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-iptv-green-dark ring-4 ring-iptv-green/20">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
