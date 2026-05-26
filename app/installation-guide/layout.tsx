import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Installation Guide - Easy IPTV Setup",
  description: "Learn how to install and set up Easy IPTV on your Firestick, Android TV, Smart TV, Apple devices, and more. Step-by-step tutorials included.",
}

export default function InstallationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
