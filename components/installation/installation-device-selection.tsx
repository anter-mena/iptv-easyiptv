"use client"

import * as React from"react"
import { 
 Tv, 
 Monitor, 
 MonitorPlay, 
 LayoutGrid, 
 Smartphone,
 HardDrive,
 Router,
 Ban
} from"lucide-react"
import { cn } from"@/lib/utils"

const devices = [
 { id:"fire-tv", icon: Tv, title:"Fire TV Stick", subtitle:"Firestick, Fire Cube", color:"green", tag:"01 / Amazon" },
 { id:"android-tv", icon: MonitorPlay, title:"Android TV/Box", subtitle:"Chromecast, Nvidia Shield", color:"green", tag:"02 / Google" },
 { id:"formuler", icon: HardDrive, title:"Formuler Z", subtitle:"Formuler & Dreamlink", color:"green", tag:"03 / Box" },
 { id:"smart-tv", icon: Tv, title:"Smart TV", subtitle:"Samsung, LG, Vizio", color:"green", tag:"04 / TV" },
 { id:"roku", icon: LayoutGrid, title:"Roku Device", subtitle:"Roku TV, Ultra", color:"green", tag:"05 / Roku" },
 { id:"apple", icon: Smartphone, title:"Apple/iOS", subtitle:"iPhone, iPad, Apple TV", color:"green", tag:"06 / Apple" },
 { id:"windows", icon: Monitor, title:"Windows/Mac", subtitle:"PC & Laptops", color:"green", tag:"07 / Desktop" },
 { id:"android-phone", icon: Smartphone, title:"Android Phone", subtitle:"Samsung, Pixel, etc.", color:"green", tag:"08 / Mobile" },
 { id:"buzztv", icon: Router, title:"BuzzTV Box", subtitle:"All models", color:"green", tag:"09 / Box" },
 { id:"mag", icon: Ban, title:"MAG Box", subtitle:"Not Supported", color:"red", tag:"10 / Legacy" },
]

interface DeviceSelectionProps {
 selectedId: string
 onSelect: (id: string) => void
}

export function InstallationDeviceSelection({ selectedId, onSelect }: DeviceSelectionProps) {
 return (
 <section id="devices" className="bg-gray-50 py-16">
 <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
 <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-end mb-12">
 <div className="text-center lg:text-left">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green">Device Ecosystem</p>
 <h2 className="mt-3 text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 md:text-4xl uppercase">
 Select your <span className="text-iptv-green">Device</span>
 </h2>
 </div>
 <p className="text-xs leading-relaxed text-gray-500 lg:max-w-md lg:justify-self-end text-center lg:text-left">
 Choose your device below to get started with the installation process. 
 All guides include step-by-step tutorials and troubleshooting tips.
 </p>
 </div>

 <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
 {devices.map((device) => (
 <button
 key={device.id}
 onClick={() => onSelect(device.id)}
 className={cn(
"group relative flex flex-col gap-4 p-6 text-left transition-all duration-500",
 selectedId === device.id 
 ? (device.color ==="red" ?"bg-red-50" :"bg-iptv-green text-white") 
 : (device.color ==="red" ?"bg-red-50/50" :"bg-white hover:bg-gray-50")
 )}
 >
 <div className="flex items-center justify-between">
 <span
 className={cn(
"text-[8px] font-bold uppercase tracking-[0.18em]",
 selectedId === device.id 
 ? (device.color ==="red" ?"text-red-900/40" :"text-white/80") 
 : (device.color ==="red" ?"text-red-900/40" :"text-gray-400")
 )}
 >
 {device.tag}
 </span>
 <div
 className={cn(
"grid h-8 w-8 place-items-center rounded-lg transition-transform duration-500 group-hover:-rotate-6",
 selectedId === device.id 
 ? (device.color ==="red" ?"bg-red-100 text-red-600" :"bg-white/20 text-white") 
 : (device.color ==="red" ?"bg-red-100 text-red-500" :"bg-iptv-green/10 text-iptv-green")
 )}
 >
 <device.icon className="h-4 w-4" strokeWidth={2.2} />
 </div>
 </div>
 <div className={selectedId === device.id && device.color ==="red" ?"text-red-950" :""}>
 <h3 className={cn(
"text-xs font-black uppercase tracking-tight mb-1",
 device.color ==="red" ?"text-red-900" :""
 )}>{device.title}</h3>
 <p className={cn(
"text-[10px] leading-tight font-bold",
 selectedId === device.id 
 ? (device.color ==="red" ?"text-red-700" :"text-white/80") 
 : (device.color ==="red" ?"text-red-700/60" :"text-gray-500")
 )}>
 {device.subtitle}
 </p>
 </div>
 </button>
 ))}
 </div>
 </div>
 </section>
 )
}
