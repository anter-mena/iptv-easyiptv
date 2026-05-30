"use client"

import * as React from"react"
import { Router, Clock, Plus, Camera, Info, Star } from"lucide-react"
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


export function InstallationFormuler() {
 const [openFaq, setOpenFaq] = React.useState<number | null>(null)

 const faqs = [
 {
 q:"What's the difference between MyTVOnline 1 and 2?",
 a:"MyTVOnline 2 is the newer version with improved interface and better Xtream Codes support. We recommend using MyTVOnline 2 for better performance.",
 },
 {
 q:"Do I need to register MAC address for Formuler?",
 a:"No, Formuler boxes use Xtream Codes login method, so you only need username and password from your IPTV provider.",
 },
 {
 q:"Why won't my channels load?",
 a:"Check that \"Login Required\" is enabled, verify your credentials are correct, ensure stable internet connection, and try restarting the app.",
 },
 {
 q:"Can I use multiple IPTV services on Formuler?",
 a:"Yes, you can configure multiple portals in MyTVOnline and switch between different IPTV providers easily.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-3">Android Ecosystem</p>
 <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
 Formuler Z/<span className="text-iptv-green">Dreamlink Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-gray-500 font-bold leading-relaxed">
 Compatible with: All Formuler Z series and Dreamlink T series devices
 </p>
 </div>

 {/* Info Banner */}
 <div className="mb-16">
 <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 shadow-sm ring-1 ring-gray-200">
 <Info className="h-5 w-5 text-gray-600" />
 </div>
 <div>
 <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900">Two Setup Methods Available</h4>
 <p className="text-sm font-bold text-gray-700 mt-0.5 leading-relaxed">Choose the method based on your device type - Formuler or Dreamlink</p>
 </div>
 </div>
 </div>
 </div>

 {/* Method 1 */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-900 text-[10px] font-bold text-white tracking-widest whitespace-nowrap min-w-[70px]">METHOD 01</span>
 <h4 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">Formuler Z: MyTVOnline 2 & 3</h4>
 </div>
 <p className="text-gray-600 mb-6 text-sm">For all Formuler Z series devices using MyTVOnline application.</p>
 </div>
 
 <StepList steps={[
 {
 title:"Open MyTVOnline 2 or 3 from your Formuler home screen",
 desc:"Navigate to your apps and launch MyTVOnline 2 or 3 application"
 },
 {
 title:"Navigate to Menu → Connections → Add Portal",
 desc:"Access the main menu, go to Connections, then select Add Portal",
 tag:"Step 2 - Add Portal",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/Formuler-Dreamlink/01.png"
 },
 {
 title:"Configure your Xtream Codes connection",
 desc:"Enter your server details and login information",
 bullets: [
"Portal Name: Enter any name (e.g., \"My IPTV\")",
"Portal URL: Enter your server URL",
"Login Required: Enable this option",
"Username: Enter your IPTV username",
"Password: Enter your IPTV password"
 ]
 },
 {
 title:"Press \"Connect\" to establish the connection",
 desc:"Click the Connect button to test your credentials and establish connection"
 },
 {
 title:"Your channels should now load and you're ready to watch!",
 desc:"Setup complete! Start enjoying your IPTV service on your Formuler device"
 }
 ]} />

 
 </div>

 {/* Method 2 */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-900 text-[10px] font-bold text-white tracking-widest whitespace-nowrap min-w-[70px]">METHOD 02</span>
 <h4 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">Dreamlink: DOL2 App</h4>
 </div>
 <p className="text-gray-600 mb-6 text-sm">For all Dreamlink T series devices using DOL2 application.</p>
 </div>
 
 <StepList steps={[
 {
 title:"Open DOL2 App from your Dreamlink home screen",
 desc:"Navigate to your apps and launch the DOL2 application"
 },
 {
 title:"Go to Menu → Portals → Edit Portal",
 desc:"Access the main menu, navigate to Portals, then select Edit Portal",
 tag:"Step 2 - Edit Portal",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/Formuler-Dreamlink/02.png"
 },
 {
 title:"Enter your portal configuration",
 desc:"Input your server details and login information",
 tag:"Step 3 - Portal Configuration",
 bullets: [
"Portal Title: Any name you prefer",
"Portal URL: Your IPTV server URL",
"Login Required: Yes, activate this",
"Username: Your credentials",
"Password: Your credentials"
 ],
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/Formuler-Dreamlink/03.png"
 },
 {
 title:"Save the configuration and restart the app to connect",
 desc:"Save your settings and restart the DOL2 app to complete the setup"
 }
 ]} />

 
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
 subtitle="Need help with your Formuler or Dreamlink setup?"
 title="Contact Support"
 />
 </div>
 )
}
