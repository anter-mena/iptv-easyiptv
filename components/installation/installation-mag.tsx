"use client"

import * as React from"react"
import { Ban, AlertCircle, Tv, Router, Plus } from"lucide-react"
import { cn } from"@/lib/utils"
import { InstallationCta } from"./installation-cta"

export function InstallationMag() {
 const [openFaq, setOpenFaq] = React.useState<number | null>(null)

 const faqs = [
 {
 q:"Why don't you support MAG Box devices?",
 a:"MAG Boxes use Stalker Portal middleware, which is incompatible with our Xtream Codes platform. They require different server configurations.",
 },
 {
 q:"What's the best alternative to a MAG Box?",
 a:"Amazon Fire TV Stick is the most popular alternative. For premium features, consider Formuler Z series or BuzzTV boxes.",
 },
 {
 q:"Can I get a refund if I have a MAG Box?",
 a:"Yes! If you purchased our service for a MAG Box, contact our support team for a full refund or help choosing an alternative.",
 },
 {
 q:"Will MAG Box support be added in the future?",
 a:"Currently, there are no plans to add MAG Box support due to technical limitations. We recommend upgrading to a supported device.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-600 mb-3">Legacy Hardware</p>
 <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
 MAG Box <span className="text-red-600">Not Supported</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-gray-500 font-bold leading-relaxed">
 MAG Box Models: MAG 250, MAG 254, MAG 256, MAG 322, MAG 324, MAG 349, MAG 351, MAG 410, MAG 420, and other MAG devices
 </p>
 </div>

 {/* Notice Banner */}
 <div className="mb-16">
 <div className="rounded-2xl border border-red-200 bg-red-50/50 p-8 shadow-sm text-center">
 <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 shadow-sm ring-1 ring-red-200">
 <AlertCircle className="h-6 w-6 text-red-600" />
 </div>
 <h4 className="mb-4 text-lg font-black uppercase tracking-tight text-red-900">Devices Incompatible</h4>
 <p className="mb-8 text-sm font-medium leading-relaxed text-red-800 max-w-lg mx-auto">
 Unfortunately, MAG Box devices use the Stalker Portal system which is incompatible with our high-speed Xtream Codes infrastructure.
 </p>
 
 <div className="grid gap-px overflow-hidden rounded-2xl border border-red-100 bg-red-100 sm:grid-cols-2">
 {[
"MAG devices use Stalker Portal protocol",
"Our service uses Xtream Codes API",
"Different authentication methods",
"MAC address-based authentication required",
"Server middleware incompatibility",
"No cross-platform support available"
 ].map((reason, i) => (
 <div key={i} className="bg-white p-4">
 <p className="text-[10px] font-black uppercase tracking-widest text-red-600">{reason}</p>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Alternatives Grid */}
 <div className="mb-16">
 <div className="mb-10 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-3">Upgrade Path</p>
 <h4 className="text-2xl font-bold text-gray-900 md:text-3xl uppercase tracking-tight">
 Recommended <span className="text-iptv-green">Alternatives</span>
 </h4>
 </div>
 <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-3">
 {[
 { icon: Tv, title:"Fire TV Stick", desc:"Most popular choice", tag:"01" },
 { icon: Router, title:"Formuler Z Series", desc:"Professional grade", tag:"02" },
 { icon: Router, title:"BuzzTV Boxes", desc:"Reliable & Fast", tag:"03" }
 ].map((device, i) => (
 <div key={i} className="bg-white p-6 text-center">
 <div className="flex items-center justify-between mb-4">
 <span className="text-[8px] font-bold text-gray-400">#{device.tag}</span>
 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-iptv-green/10">
 <device.icon className="h-4 w-4 text-iptv-green" />
 </div>
 </div>
 <h5 className="text-[11px] font-black uppercase tracking-tight text-gray-900 mb-1">{device.title}</h5>
 <p className="text-[10px] text-gray-500 font-medium">{device.desc}</p>
 </div>
 ))}
 </div>
 </div>

 {/* FAQs */}
 <div className="mb-16">
 <div className="mb-10 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400 mb-3">Knowledge Base</p>
 <h4 className="text-2xl font-bold text-gray-900 md:text-3xl uppercase tracking-tight">
 Common <span className="text-iptv-green">Questions</span>
 </h4>
 </div>
 <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200">
 {faqs.map((faq, i) => (
 <div key={i} className="bg-white group">
 <button
 onClick={() => setOpenFaq(openFaq === i ? null : i)}
 className="flex w-full items-center justify-between px-6 py-4 text-left"
 >
 <span className="text-sm font-bold text-gray-900 uppercase tracking-tight">{faq.q}</span>
 <Plus className={cn(
"h-4 w-4 text-iptv-green transition-transform duration-300",
 openFaq === i &&"rotate-45"
 )} />
 </button>
 <div className={cn(
"overflow-hidden transition-all duration-300",
 openFaq === i ?"max-h-40" :"max-h-0"
 )}>
 <div className="px-6 pb-6">
 <p className="text-sm leading-relaxed text-gray-500 font-medium">{faq.a}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* CTA Component */}
 <InstallationCta 
 subtitle="Need a new device?"
 title="Our experts can help you choose."
 />
 </div>
 )
}
