import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { InstallationDeviceSelection } from "@/components/installation/installation-device-selection"
import { InstallationHashRedirect } from "@/components/installation/installation-hash-redirect"
import { InstallationHero } from "@/components/installation/installation-hero"
import { JsonLd } from "@/components/seo/json-ld"
import { DEVICE_GUIDES, GUIDES_PATH, deviceGuideHref } from "@/lib/installation-guides"
import { BASE_URL, breadcrumbJsonLd, buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "IPTV Setup Guides: Firestick, Smart TV, Android",
  description:
    "Learn how to install and set up Easy IPTV on your Firestick, Android TV, Smart TV, Apple devices and more. Step-by-step tutorials included.",
  path: GUIDES_PATH,
})

const guidesListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: DEVICE_GUIDES.map((guide, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: guide.heading,
    url: `${BASE_URL}${deviceGuideHref(guide.slug)}`,
  })),
}

export default function InstallationGuidePage() {
  return (
    <div className="flex-1">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Installation Guide", path: GUIDES_PATH },
          ]),
          guidesListJsonLd,
        ]}
      />
      <InstallationHashRedirect />
      <InstallationHero
        title="Installation Guide"
        description="Easy step-by-step installation instructions for all your devices. Get up and streaming in minutes with our comprehensive setup guides."
      />
      <InstallationDeviceSelection />

      <section aria-labelledby="all-guides" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 id="all-guides" className="text-2xl font-bold uppercase tracking-tight text-gray-900 md:text-3xl">
            All setup <span className="text-iptv-green">guides</span>
          </h2>
          <p className="mt-3 text-gray-600">
            Not sure which one you need? Start with the device you watch TV on most. Your Easy IPTV
            login works on every guide, so you can add more devices later.
          </p>
          <ul className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
            {DEVICE_GUIDES.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={deviceGuideHref(guide.slug)}
                  className="group flex items-start justify-between gap-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iptv-green"
                >
                  <span>
                    <span className="font-semibold text-gray-900 group-hover:text-iptv-green-dark">
                      {guide.heading}
                    </span>
                    <span className="mt-1 block text-sm text-gray-600">{guide.description}</span>
                  </span>
                  <ArrowRight
                    className="mt-1 size-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-iptv-green motion-reduce:transition-none"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
