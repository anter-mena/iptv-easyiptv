"use client"

import * as React from"react"
import { Tv, Clock, Plus, Camera } from"lucide-react"
import { cn } from"@/lib/utils"
import { InstallationCta } from"./installation-cta"
import { ImageZoom } from"@/components/ui/image-zoom"

export function InstallationBuzzTv() {
 const [openFaq, setOpenFaq] = React.useState<number | null>(null)

 const faqs = [
 {
 q:"What's the difference between XC API Login and MAC Server?",
 a:"XC API Login uses username/password (Xtream Codes), while MAC Server uses your device's MAC address. XC API Login is more flexible and recommended.",
 },
 {
 q:"Which method should I use?",
 a:"Use XC API Login if your provider gave you a username and password. Use MAC Server only if specifically required.",
 },
 {
 q:"Why won't my channels load?",
 a:"Verify your credentials, ensure stable internet, check the connection method, and try restarting the BuzzTV app.",
 },
 {
 q:"Can I use multiple IPTV services on BuzzTV?",
 a:"Yes, you can configure multiple connections in Server Settings and switch between them easily.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-3">Box Ecosystem</p>
 <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
 BuzzTV <span className="text-iptv-green">Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-xs uppercase tracking-widest text-gray-500 font-bold leading-relaxed">
 BuzzTV XPL 3000, XRS 4000, XRS 4500, E2000, and all BuzzTV Android boxes
 </p>
 </div>

 {/* Setup Info */}
 <div className="mb-16">
 <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
 <div className="flex items-center space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-200">
 <Clock className="h-5 w-5 text-gray-600" />
 </div>
 <div>
 <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900">Setup Time</h4>
 <p className="text-xs font-bold text-gray-500 mt-0.5">5-8 Minutes • Xtream Codes Login</p>
 </div>
 </div>
 </div>
 </div>

 {/* Technical Workflow */}
 <div className="space-y-12 mb-16">
 {/* Method 1 */}
 <div className="space-y-4">
 <div className="flex items-center space-x-3 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-900 text-[10px] font-bold text-white tracking-widest whitespace-nowrap min-w-[70px]">METHOD 01</span>
 <h5 className="text-sm font-black uppercase tracking-tight text-gray-900">XC API Login</h5>
 </div>
 <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200">
 {[
 {
 title:"From your BuzzTV home screen, navigate to Server Settings",
 desc:"Access the main settings menu and locate Server Settings option",
 tag:"Step 1 - Server Settings",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/buzzTV%20box/01.png"
 },
 {
 title:"Select XC API Login → Add XC API Login",
 desc:"Choose the XC API Login option and then select Add XC API Login to create a new connection",
 tag:"Step 2 - Add XC API Login",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/buzzTV%20box/02.png"
 },
 {
 title:"Configure your Xtream Codes connection",
 desc:"",
 tag:"Step 3 - Configure Connection",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/buzzTV%20box/03.png",
 bullets: [
"Portal Name: Enter any name (e.g., \"My IPTV\")",
"Portal URL: Enter your server URL",
"User name: Enter your IPTV username",
"Password: Enter your IPTV password"
 ]
 },
 {
 title:"Press \"Connect\" or \"Save\" to establish the connection",
 desc:"Save your configuration and test the connection to your IPTV service"
 },
 {
 title:"Return to home screen and select Live TV to start watching!",
 desc:"Setup complete! Go back to the main screen and enjoy your IPTV service"
 }
 ].map((step, i) => (
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
 <h6 className="text-xs font-bold text-gray-900">{step.title}</h6>
 {step.desc && <p className="mt-1 text-[11px] leading-relaxed text-gray-500">{step.desc}</p>}
 
 {step.bullets && (
 <ul className="mt-3 space-y-1.5 border-l-2 border-iptv-green/20 pl-4">
 {step.bullets.map((bullet, idx) => {
 const [label, text] = bullet.split(":");
 return (
 <li key={idx} className="text-[11px] text-gray-600">
 <strong className="text-gray-900">{label}:</strong> {text}
 </li>
 );
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
 <span className="text-xs font-bold text-gray-900 uppercase tracking-tight">{faq.q}</span>
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
 <p className="text-xs leading-relaxed text-gray-500 font-medium">{faq.a}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* CTA Component */}
 <InstallationCta />
 </div>
 )
}
