"use client"

import * as React from"react"
import { cn } from"@/lib/utils"

interface InstallationCtaProps {
 title?: string
 subtitle?: string
 buttonText?: string
 href?: string
}

export function InstallationCta({
 title ="Our experts are standing by.",
 subtitle ="Still need help?",
 buttonText ="Contact Support",
 href ="/contact"
}: InstallationCtaProps) {
 return (
 <div className="text-center rounded-2xl bg-[#222222] p-10 text-white shadow-xl relative overflow-hidden">
 {/* Intense Top-Middle Glowing Orb - More Green */}
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[90%] rounded-full bg-iptv-green/40 blur-[90px] opacity-80 animate-pulse" />
 {/* Secondary subtle glow for extra green depth */}
 <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-32 w-1/2 rounded-full bg-iptv-green/30 blur-[40px] opacity-50" />
 </div>
 
 <div className="relative z-10">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-4">
 {subtitle}
 </p>
 <h4 className="text-2xl font-bold uppercase tracking-tight mb-6">
 {title}
 </h4>
 <a 
 href={href}
 className="inline-block rounded-md bg-iptv-green px-10 py-3 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-iptv-green-dark ring-4 ring-iptv-green/20"
 >
 {buttonText}
 </a>
 </div>
 </div>
 )
}
