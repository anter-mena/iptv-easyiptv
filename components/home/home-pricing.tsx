"use client"

import * as React from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Plan {
  name: string
  price: string
  features: string[]
  popular: boolean
  connections?: string
}

const singlePlans: Plan[] = [
  {
    name: "BASIC",
    price: "$19.99",
    features: ["20,000+ Live Channels", "50,000+ VOD", "4K Quality", "24/7 Support"],
    popular: false,
  },
  {
    name: "STANDARD",
    price: "$24.99",
    features: ["20,000+ Live Channels", "50,000+ VOD", "4K Quality", "Premium Support"],
    popular: false,
  },
  {
    name: "PREMIUM",
    price: "$29.99",
    features: ["20,000+ Live Channels", "50,000+ VOD", "4K Quality", "Priority Support"],
    popular: true,
  },
  {
    name: "ULTIMATE",
    price: "$39.99",
    features: ["20,000+ Live Channels", "50,000+ VOD", "4K Quality", "VIP Support"],
    popular: false,
  },
]

const multiplePlans: Plan[] = [
  {
    name: "FAMILY",
    price: "$34.99",
    connections: "2 Connections",
    features: ["20,000+ Live Channels", "50,000+ VOD", "4K Quality", "Multi-Device Support"],
    popular: false,
  },
  {
    name: "BUSINESS",
    price: "$49.99",
    connections: "3 Connections",
    features: ["20,000+ Live Channels", "50,000+ VOD", "4K Quality", "Business Support"],
    popular: false,
  },
  {
    name: "ENTERPRISE",
    price: "$64.99",
    connections: "4 Connections",
    features: ["20,000+ Live Channels", "50,000+ VOD", "4K Quality", "VIP Support"],
    popular: true,
  },
  {
    name: "ULTIMATE",
    price: "$79.99",
    connections: "5 Connections",
    features: ["25,000+ Live Channels", "75,000+ VOD", "8K Quality", "VIP Support"],
    popular: false,
  },
]

const devices = ["windows", "ios", "lg", "android"]

export function Pricing() {
  const [tab, setTab] = React.useState<"single" | "multiple">("single")

  const currentPlans = tab === "single" ? singlePlans : multiplePlans

  return (
    <section id="pricing" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="mb-10 text-center px-4">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
            CHOOSE YOUR IPTV <span className="text-iptv-green">4K SUBSCRIPTION</span>
          </h2>
          <p className="mx-auto max-w-xl text-xs text-gray-500">
            Choose from our flexible plans and enjoy premium streaming at an unbeatable price. 
            All plans include free trial and money-back guarantee.
          </p>
        </div>

        {/* Pricing Tabs */}
        <div className="mb-8 flex justify-center">
          <div className="flex rounded-md bg-gray-200 p-1">
            <button
              onClick={() => setTab("single")}
              className={cn(
                "rounded-md px-6 py-2 text-xs font-bold transition-all duration-300",
                tab === "single" ? "bg-iptv-green text-white shadow-md" : "text-gray-500 hover:text-gray-700"
              )}
            >
              1 CONNECTION
            </button>
            <button
              onClick={() => setTab("multiple")}
              className={cn(
                "rounded-md px-6 py-2 text-xs font-bold transition-all duration-300",
                tab === "multiple" ? "bg-iptv-green text-white shadow-md" : "text-gray-500 hover:text-gray-700"
              )}
            >
              MULTI CONNECTIONS
            </button>
          </div>
        </div>

        {/* Plans Grid - Back to 1 column with tighter margins */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-2 sm:px-0">
          {currentPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-xl border p-6 text-center transition-all duration-500 w-full mx-auto max-w-sm lg:max-w-none",
                plan.popular 
                  ? "border-iptv-green shadow-xl scale-105 z-10 bg-white hover:scale-[1.08]" 
                  : "border-gray-200 bg-white shadow-sm hover:border-iptv-green hover:scale-[1.03]"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-iptv-green px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                    POPULAR
                  </span>
                </div>
              )}
              <div className="mb-4">
                <h3 className="mb-1 text-base font-bold text-gray-900 uppercase tracking-tight">{plan.name}</h3>
                <p className="text-[10px] font-bold text-iptv-green uppercase tracking-wide">{plan.connections || "1 Connection"}</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-xs text-gray-500">/mo</span>
              </div>
              <ul className="mb-6 flex-1 space-y-2.5 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 shrink-0 text-iptv-green" />
                    <span className="text-xs text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mb-5 w-full rounded-md bg-iptv-green py-2.5 px-4 text-xs font-bold text-white transition-all hover:bg-iptv-green-dark ring-4 ring-iptv-green/20">
                Get Started
              </button>
              
              {/* Device Icons */}
              <div className="grid grid-cols-4 gap-1 px-1">
                {devices.map((device) => (
                  <div
                    key={device}
                    className="flex h-16 items-center justify-center rounded p-1 transition-transform duration-300 hover:scale-110"
                  >
                    <Image
                      src={`https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models@4314925c1fc90e64e1c8a64c0e6cbef87ac719b6/iptv/tools/${device}.svg`}
                      alt={device}
                      width={40}
                      height={40}
                      className={cn(
                        "object-contain brightness-0 opacity-60 transition-all hover:opacity-100",
                        (device === "lg" || device === "android") ? "h-10" : "h-7"
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
