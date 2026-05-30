"use client"

import * as React from"react"
import { Monitor, Star, Plus, Camera, PlayCircle, Video, Store, Zap } from"lucide-react"
import { cn } from"@/lib/utils"
import { InstallationCta } from"./installation-cta"
import { ImageZoom } from"@/components/ui/image-zoom"

const StepList = ({ steps }: { steps: any[] }) => (
 <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200">
 {steps.map((step, i) => (
 <div key={i} className="flex items-start space-x-4 bg-white p-5">
 <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-iptv-green/10 text-[10px] font-black text-iptv-green mt-0.5">
 {i + 1}
 </span>
 <div className="flex-1">
 {step.tag && (
 <span className="mb-2 inline-block rounded bg-gray-100 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-gray-500">
 {step.tag}
 </span>
 )}
 <h6 className="text-sm font-bold text-gray-900">{step.title}</h6>
 {step.desc && <p className="mt-1 text-[11px] leading-relaxed text-gray-500">{step.desc}</p>}
 
 {step.bullets && (
 <ul className="mt-3 space-y-1.5 border-l-2 border-iptv-green/20 pl-4">
 {step.bullets.map((bullet: string, idx: number) => {
 const parts = bullet.split(":");
 if (parts.length > 1) {
 const label = parts.shift();
 const text = parts.join(":");
 return (
 <li key={idx} className="text-[11px] text-gray-600">
 <strong className="text-gray-900">{label}:</strong> {text}
 </li>
 );
 }
 return <li key={idx} className="text-[11px] text-gray-600">{bullet}</li>;
 })}
 </ul>
 )}

 {step.img && (
 <div className="mt-6 flex justify-center">
 <ImageZoom 
 src={step.img} 
 alt={step.title}
 className="w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-sm mt-4"
 />
 </div>
 )}
 </div>
 </div>
 ))}
 </div>
)


export function InstallationPc() {
 const [openFaq, setOpenFaq] = React.useState<number | null>(null)

 const faqs = [
 {
 q:"Which app works best on Windows/Mac?",
 a:"IPTV Smarters Pro offers the most features and works on both Windows and Mac. MyIPTV Player is great for Windows 10/11 users who prefer Microsoft Store apps.",
 },
 {
 q:"Can I use VLC Player for IPTV?",
 a:"Yes, VLC can play M3U playlists. Go to Media > Open Network Stream and paste your M3U URL. However, dedicated IPTV apps offer better features.",
 },
 {
 q:"System requirements for IPTV apps?",
 a:"Windows 7 or newer, Mac OS X 10.10 or newer. At least 4GB RAM and a stable internet connection (25+ Mbps recommended).",
 },
 {
 q:"Can I record shows on PC/Mac?",
 a:"Some apps like IPTV Smarters Pro support recording features. Check your IPTV provider's terms of service regarding recording content.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-3">Desktop Ecosystem</p>
 <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
 Windows <span className="text-iptv-green">& Mac Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-gray-500 font-bold leading-relaxed">
 Compatible with: Windows PC & Mac computers - all versions
 </p>
 </div>

 {/* Recommended Apps Grid */}
 <div className="mb-16">
 <div className="mb-10 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400 mb-3">Software Choice</p>
 <h4 className="text-2xl font-bold text-gray-900 md:text-3xl uppercase tracking-tight">
 Recommended <span className="text-iptv-green">Applications</span>
 </h4>
 <p className="mt-2 text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
 Choose from these top-rated IPTV applications for the best streaming experience on your computer.
 </p>
 </div>
 <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-3">
 {[
 { icon: Star, title:"IPTV Smarters Pro", desc:"Most popular choice", tag:"01" },
 { icon: PlayCircle, title:"MyIPTV Player", desc:"Windows 10/11 optimized", tag:"02" },
 { icon: Video, title:"VLC Player", desc:"Universal compatibility", tag:"03" }
 ].map((app, i) => (
 <div key={i} className="bg-white p-6 text-center">
 <div className="flex items-center justify-between mb-4">
 <span className="text-[8px] font-bold text-gray-400">#{app.tag}</span>
 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-iptv-green/10">
 <app.icon className="h-4 w-4 text-iptv-green" />
 </div>
 </div>
 <h5 className="text-[11px] font-black uppercase tracking-tight text-gray-900 mb-1">{app.title}</h5>
 <p className="text-[10px] text-gray-500 font-medium">{app.desc}</p>
 </div>
 ))}
 </div>
 </div>

 {/* Method 1: Smarters Pro */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex items-center space-x-2 mb-2">
 <span className="flex h-5 px-2 items-center justify-center rounded bg-yellow-400 text-[9px] font-black uppercase tracking-widest text-yellow-950">RECOMMENDED METHOD</span>
 </div>
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-900 text-[10px] font-bold text-white tracking-widest whitespace-nowrap min-w-[70px]">METHOD 01</span>
 <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-2">IPTV Smarters Pro Setup</h4>
 </div>
 <p className="text-sm text-gray-500 font-medium">The most popular and feature-rich IPTV application for Windows and Mac.</p>
 </div>
 
 <StepList steps={[
 {
 title:"Open your web browser",
 desc:"Open a browser and type \"IPTV Smarters Pro\" into the search bar"
 },
 {
 title:"Visit the official website",
 desc:"Go to the official website: https://www.iptvsmarters.com"
 },
 {
 title:"Navigate to Downloads",
 desc:"Click on the \"Downloads\" section in the website menu",
 tag:"Step 3 - Downloads section",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/windows/01.png"
 },
 {
 title:"Download the application",
 desc:"Download the Windows or Mac version of IPTV Smarters Pro",
 tag:"Step 4 - Download application",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/windows/02.png"
 },
 {
 title:"Run the installer",
 desc:"Once the download completes, open the installer by clicking on the downloaded file"
 },
 {
 title:"Grant permissions",
 desc:"If Windows asks for permission, click \"Yes\" to allow the app to install"
 },
 {
 title:"Complete installation",
 desc:"The installation will now begin. It typically takes under 2 minutes"
 },
 {
 title:"Launch the application",
 desc:"Once installed, launch the IPTV Smarters app. Click Add New User, then choose \"Login with Xtream Codes API\""
 },
 {
 title:"Enter your account details",
 desc:"Enter your IPTV account details: Username, Password, and Portal URL"
 },
 {
 title:"Start streaming!",
 desc:"That's it! You're ready to start streaming with IPTV Smarters Pro"
 }
 ]} />

 
 </div>

 {/* Method 2: MyIPTV Player */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-900 text-[10px] font-bold text-white tracking-widest whitespace-nowrap min-w-[70px]">METHOD 02</span>
 <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-2">MyIPTV Player (Windows 10/11)</h4>
 </div>
 <p className="text-sm text-gray-500 font-medium mb-4">A powerful media player with built-in EPG support for Windows 10, Windows Phone, and Xbox One.</p>
 <div className="inline-flex items-center space-x-2 rounded-lg bg-gray-100 px-3 py-1.5 border border-gray-200">
 <Store className="h-4 w-4 text-gray-600" />
 <span className="text-[11px] font-bold text-gray-700">Available on Microsoft Store</span>
 </div>
 <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-iptv-green">Download directly from Windows Store for best compatibility</p>
 </div>

 <StepList steps={[
 {
 title:"Access Settings",
 desc:"Go to the Settings tab, then click on \"Add new playlist and EPG source\"",
 tag:"MyIPTV Settings",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/windows/03.png"
 },
 {
 title:"Add your M3U playlist",
 desc:"Configure your playlist with these details:",
 tag:"Add M3U playlist",
 bullets: [
"Name: Give your playlist a name (e.g. \"IPTV\")",
"URL: Paste the M3U link you received from your IPTV provider",
"Click on \"Add remote list\""
 ],
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/windows/04.png"
 },
 {
 title:"Select your playlist",
 desc:"Go back to Settings and choose your playlist from the Select Channel Playlist dropdown",
 tag:"Select playlist",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/windows/05.png"
 },
 {
 title:"Start watching",
 desc:"Done! Go to the Channels tab, choose your country, and start watching your favorite TV and VOD content",
 tag:"Start watching",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/windows/06.png"
 }
 ]} />

 
 </div>

 {/* Tips */}
 <div className="mb-16">
 <div className="rounded-2xl border border-iptv-green/20 bg-iptv-green/5 p-6 shadow-sm">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-iptv-green/10 text-iptv-green">
 <Zap className="h-5 w-5" />
 </div>
 <div>
 <h5 className="text-sm font-black uppercase tracking-tight text-gray-900 mb-2">Performance Tip</h5>
 <p className="text-sm text-gray-600 leading-relaxed font-medium">For best performance on PC/Mac, use a wired ethernet connection when possible. WiFi may cause buffering during HD/4K streams.</p>
 </div>
 </div>
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
 subtitle="Need help with setup?"
 title="Contact Support"
 />
 </div>
 )
}
