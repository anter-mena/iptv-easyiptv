import { Metadata } from "next"

export const metadata: Metadata = {
  title: "IPTV Setup & Installation Guides for Firestick, Smart TV, Android",
  description: "Learn how to easily install and set up Easy IPTV on your Firestick, Android TV, Smart TV, Apple devices, and more. Step-by-step tutorials included.",
  alternates: {
    canonical: "/installation-guide",
  },
  openGraph: {
    title: "IPTV Setup & Installation Guides for Firestick, Smart TV, Android",
    description: "Learn how to easily install and set up Easy IPTV on your Firestick, Android TV, Smart TV, Apple devices, and more. Step-by-step tutorials included.",
    url: "/installation-guide",
  },
}

export default function InstallationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
