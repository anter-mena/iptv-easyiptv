"use client"

import * as React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { InstallationHero } from "@/components/installation/installation-hero"
import { InstallationDeviceSelection } from "@/components/installation/installation-device-selection"
import { InstallationContent } from "@/components/installation/installation-content"

export default function InstallationGuidePage() {
  const router = useRouter()
  const [selectedDevice, setSelectedDevice] = React.useState("fire-tv")
  const [isInitialMount, setIsInitialMount] = React.useState(true)

  React.useEffect(() => {
    const updateDeviceFromHash = () => {
      const hash = window.location.hash.split('#').pop()
      if (hash && hash !== "") {
        setSelectedDevice(hash)
      }
    }

    updateDeviceFromHash()
    setIsInitialMount(false)

    window.addEventListener('hashchange', updateDeviceFromHash)
    return () => window.removeEventListener('hashchange', updateDeviceFromHash)
  }, [])

  if (isInitialMount) {
    return (
      <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white">
        <div className="relative flex h-12 w-12 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-gray-100" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-iptv-green border-t-transparent" />
          <Image src="/logo.svg" alt="Logo Icon" width={16} height={16} className="h-4 w-4 opacity-10" />
        </div>
      </div>
    )
  }

  return (
    <main className="flex-1 animate-in fade-in duration-700">
      <InstallationHero />
      <InstallationDeviceSelection 
        selectedId={selectedDevice} 
        onSelect={(id) => {
          setSelectedDevice(id)
          router.push(`#${id}`, { scroll: false })
        }} 
      />
      <InstallationContent selectedId={selectedDevice} />
    </main>
  )
}
