"use client"

import * as React from"react"


import { InstallationAndroid } from"./installation-android"
import { InstallationAndroidTv } from"./installation-android-tv"
import { InstallationApple } from"./installation-apple"
import { InstallationBuzzTv } from"./installation-buzztv"
import { InstallationFirestick } from"./installation-firestick"
import { InstallationFormuler } from"./installation-formuler"
import { InstallationMag } from"./installation-mag"
import { InstallationRoku } from"./installation-roku"
import { InstallationSmartTv } from"./installation-smart-tv"
import { InstallationPc } from"./installation-pc"

interface InstallationContentProps {
 selectedId: string
}

export function InstallationContent({ selectedId }: InstallationContentProps) {
 // Format the ID for display
 const deviceName = selectedId.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("")

 if (selectedId ==="android-phone") {
 return (
 <section className="bg-white py-20">
 <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
 <InstallationAndroid />
 </div>
 </section>
 )
 }

 if (selectedId ==="android-tv") {
 return (
 <section className="bg-white py-20">
 <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
 <InstallationAndroidTv />
 </div>
 </section>
 )
 }

 if (selectedId ==="apple") {
 return (
 <section className="bg-white py-20">
 <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
 <InstallationApple />
 </div>
 </section>
 )
 }

 if (selectedId ==="buzztv") {
 return (
 <section className="bg-white py-20">
 <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
 <InstallationBuzzTv />
 </div>
 </section>
 )
 }

 if (selectedId ==="fire-tv") {
 return (
 <section className="bg-white py-20">
 <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
 <InstallationFirestick />
 </div>
 </section>
 )
 }

 if (selectedId ==="formuler") {
 return (
 <section className="bg-white py-20">
 <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
 <InstallationFormuler />
 </div>
 </section>
 )
 }

 if (selectedId ==="mag") {
 return (
 <section className="bg-white py-20">
 <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
 <InstallationMag />
 </div>
 </section>
 )
 }

 if (selectedId ==="roku") {
 return (
 <section className="bg-white py-20">
 <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
 <InstallationRoku />
 </div>
 </section>
 )
 }

 if (selectedId ==="smart-tv") {
 return (
 <section className="bg-white py-20">
 <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
 <InstallationSmartTv />
 </div>
 </section>
 )
 }

 if (selectedId ==="windows") {
 return (
 <section className="bg-white py-20">
 <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
 <InstallationPc />
 </div>
 </section>
 )
 }

 return null
}
