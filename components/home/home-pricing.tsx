"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { CurrencyFlag } from "@/components/home/currency-flag"
import {
  CURRENCIES,
  DEFAULT_CURRENCY,
  DEVICE_COUNTS,
  PLAN_DURATIONS,
  POPULAR_DURATION,
  PRICES,
  formatPrice,
  isCurrency,
  priceParts,
  type Currency,
  type DeviceCount,
} from "@/lib/pricing"

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

const devices = ["windows", "ios", "lg", "android"]

// The visitor's currency choice, remembered in localStorage. Held in memory too,
// so the switch still works when storage is blocked (private mode, disabled cookies).
const CURRENCY_STORAGE_KEY = "easyiptv-currency"
const currencyListeners = new Set<() => void>()
let selectedCurrency: Currency | null = null

function getCurrency(): Currency {
  if (selectedCurrency === null) {
    let stored: string | null = null
    try {
      stored = window.localStorage.getItem(CURRENCY_STORAGE_KEY)
    } catch {}
    selectedCurrency = isCurrency(stored) ? stored : DEFAULT_CURRENCY
  }
  return selectedCurrency
}

function setCurrency(currency: Currency) {
  selectedCurrency = currency
  try {
    window.localStorage.setItem(CURRENCY_STORAGE_KEY, currency)
  } catch {}
  currencyListeners.forEach((listener) => listener())
}

function subscribeToCurrency(listener: () => void) {
  currencyListeners.add(listener)
  return () => {
    currencyListeners.delete(listener)
  }
}

export function Pricing() {
  const [activeTab, setActiveTab] = React.useState<DeviceCount>(1)
  // Server render and hydration use CAD; a saved choice applies right after.
  const currency = React.useSyncExternalStore(subscribeToCurrency, getCurrency, () => DEFAULT_CURRENCY)

  const connections = `${activeTab} ${activeTab === 1 ? "Device" : "Devices"}`
  const currentPlans = PLAN_DURATIONS.map((name, index) => ({
    name,
    price: PRICES[currency][activeTab][index],
    popular: name === POPULAR_DURATION,
  }))

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
        <div className="mb-8 flex flex-col items-center gap-3 px-4 w-full">
          <div className="flex flex-nowrap overflow-x-auto justify-start sm:justify-center rounded-md bg-gray-200 p-1 gap-1 w-full sm:w-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {DEVICE_COUNTS.map((num) => (
              <button
                key={num}
                aria-label={`View pricing for ${num} device${num === 1 ? '' : 's'}`}
                aria-pressed={activeTab === num}
                onClick={() => setActiveTab(num)}
                className={cn(
                  "whitespace-nowrap rounded-md px-2.5 py-1.5 text-[11px] sm:px-5 sm:py-2 sm:text-xs font-bold transition-all duration-300 flex-1 sm:flex-none text-center",
                  activeTab === num ? "bg-iptv-green text-white shadow-md" : "text-gray-500 hover:text-gray-700"
                )}
              >
                {num} {num === 1 ? 'DEVICE' : 'DEVICES'}
              </button>
            ))}
          </div>

          {/* Currency Switch */}
          <div role="group" aria-label="Currency" className="flex rounded-md bg-gray-200 p-1 gap-1">
            {CURRENCIES.map((code) => (
              <button
                key={code}
                aria-label={`Show prices in ${code}`}
                aria-pressed={currency === code}
                onClick={() => setCurrency(code)}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] sm:text-xs font-bold transition-all duration-300",
                  currency === code ? "bg-white text-iptv-green shadow-sm" : "text-gray-500 hover:text-gray-700"
                )}
              >
                <CurrencyFlag currency={code} />
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 px-2 sm:px-0">
          {currentPlans.map((plan) => {
            const { amount, code } = priceParts(plan.price, currency)

            return (
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
                  <p className="text-[10px] font-bold text-iptv-green uppercase tracking-wide">{connections}</p>
                </div>
                <div className="mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">{amount}</span>
                  {code && <span className="ml-1 text-sm font-bold text-gray-500">{code}</span>}
                </div>
                <ul className="mb-6 flex-1 space-y-2.5 text-left">
                  {commonFeatures.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <Check className="h-3.5 w-3.5 shrink-0 text-iptv-green" />
                      <span className="text-xs text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`https://wa.me/212787736166?text=${encodeURIComponent(`Hello! I want to subscribe to *Easy IPTV*.\n\n*Plan:* ${plan.name}\n*Devices:* ${connections}\n*Price:* ${formatPrice(plan.price, currency)}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-5 block w-full rounded-md bg-iptv-green py-2.5 px-4 text-center text-xs font-bold text-white transition-all hover:bg-iptv-green-dark ring-4 ring-iptv-green/20"
                >
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
                        src={`/assets/devices/${device}.svg`}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
