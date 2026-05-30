"use client"

import * as React from "react"
import Link from "next/link"
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

const commonFeatures = [
  "4K Ultra HD Streaming Quality",
  "25,000+ Live Channels Worldwide",
  "120,000+ Movies & TV Shows",
  "Premium PPV Events Included",
  "Instant VOD Access",
  "Smart EPG & Catch-Up TV",
  "24/7 Canadian Support",
  "Multi-Device Compatibility"
]

const plansData: Record<number, Plan[]> = {
  1: [
    { name: "1 Month", price: "29", features: commonFeatures, popular: false, connections: "1 Device" },
    { name: "3 Month", price: "49", features: commonFeatures, popular: false, connections: "1 Device" },
    { name: "6 Month", price: "89", features: commonFeatures, popular: true, connections: "1 Device" },
    { name: "12 Month", price: "129", features: commonFeatures, popular: false, connections: "1 Device" },
  ],
  2: [
    { name: "1 Month", price: "39", features: commonFeatures, popular: false, connections: "2 Devices" },
    { name: "3 Month", price: "69", features: commonFeatures, popular: false, connections: "2 Devices" },
    { name: "6 Month", price: "119", features: commonFeatures, popular: true, connections: "2 Devices" },
    { name: "12 Month", price: "179", features: commonFeatures, popular: false, connections: "2 Devices" },
  ],
  3: [
    { name: "1 Month", price: "49", features: commonFeatures, popular: false, connections: "3 Devices" },
    { name: "3 Month", price: "89", features: commonFeatures, popular: false, connections: "3 Devices" },
    { name: "6 Month", price: "129", features: commonFeatures, popular: true, connections: "3 Devices" },
    { name: "12 Month", price: "199", features: commonFeatures, popular: false, connections: "3 Devices" },
  ],
  4: [
    { name: "1 Month", price: "59", features: commonFeatures, popular: false, connections: "4 Devices" },
    { name: "3 Month", price: "109", features: commonFeatures, popular: false, connections: "4 Devices" },
    { name: "6 Month", price: "159", features: commonFeatures, popular: true, connections: "4 Devices" },
    { name: "12 Month", price: "219", features: commonFeatures, popular: false, connections: "4 Devices" },
  ],
}

const devices = ["windows", "ios", "lg", "android"]

export function Pricing() {
  const [activeTab, setActiveTab] = React.useState<number>(1)

  const currentPlans = plansData[activeTab]

  return (
    <section id="pricing" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="mb-10 text-center px-4">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
            CHOOSE YOUR IPTV <span className="text-iptv-green">4K SUBSCRIPTION</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-gray-500">
            Choose from our flexible plans and enjoy premium streaming at an unbeatable price. 
            All plans include free trial and money-back guarantee.
          </p>
        </div>

        {/* Pricing Tabs */}
        <div className="mb-8 flex justify-center px-4 w-full">
          <div className="flex flex-nowrap overflow-x-auto justify-start sm:justify-center rounded-md bg-gray-200 p-1 gap-1 w-full sm:w-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                aria-label={`View pricing for ${num} device${num === 1 ? '' : 's'}`}
                aria-pressed={activeTab === num}
                onClick={() => setActiveTab(num)}
                className={cn(
                  "whitespace-nowrap rounded-md px-6 py-3 text-sm sm:px-8 font-bold transition-all duration-300 flex-1 sm:flex-none text-center",
                  activeTab === num ? "bg-iptv-green text-white shadow-md" : "text-gray-500 hover:text-gray-700"
                )}
              >
                {num} {num === 1 ? 'DEVICE' : 'DEVICES'}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-2 sm:px-0">
          {currentPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-xl border p-6 text-center transition-all duration-500 w-full mx-auto max-w-sm lg:max-w-none bg-white",
                plan.popular 
                  ? "border-gray-200 md:border-iptv-green shadow-sm hover:scale-[1.03] md:shadow-xl md:scale-105 md:z-10 md:hover:scale-[1.08]" 
                  : "border-gray-200 shadow-sm hover:border-iptv-green hover:scale-[1.03]"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 hidden md:block">
                  <span className="rounded-full bg-iptv-green px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                    POPULAR
                  </span>
                </div>
              )}
              <div className="mb-4">
                <h3 className="mb-1 text-base font-bold text-gray-900 uppercase tracking-tight">{plan.name}</h3>
                <p className="text-[10px] font-bold text-iptv-green uppercase tracking-wide">{plan.connections}</p>
              </div>
              <div className="mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="ml-1 text-sm font-bold text-gray-500">$CA</span>
              </div>
              <ul className="mb-6 flex-1 space-y-2.5 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <Check className="h-3.5 w-3.5 shrink-0 text-iptv-green" />
                    <span className="text-xs text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mb-5 block w-full rounded-md bg-iptv-green py-2.5 px-4 text-center text-xs font-bold text-white transition-all hover:bg-iptv-green-dark ring-4 ring-iptv-green/20">
                Get Started
              </Link>
              
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
