"use client"

import * as React from"react"
import { MonitorPlay, Clock, Star, Plus, Camera, AlertTriangle, ShieldCheck, Info } from"lucide-react"
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
 <h6 className="text-xs font-bold text-gray-900">{step.title}</h6>
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

 {step.alert && (
 <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4">
 <div className="flex items-center space-x-2 text-orange-600 mb-1">
 <AlertTriangle className="h-4 w-4" />
 <span className="text-[10px] font-bold uppercase tracking-widest">Very Important</span>
 </div>
 <p className="text-[11px] font-medium text-orange-800">{step.alert}</p>
 </div>
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


export function InstallationAndroidTv() {
 const [openFaq, setOpenFaq] = React.useState<number | null>(null)

 const faqs = [
 {
 q:"What is V12Mate and how does it work?",
 a:"V12Mate is an IPTV player that enables users to stream live TV channels and on-demand content. It connects to an IPTV provider's servers and displays content on your Android TV device.",
 },
 {
 q:"Is V12Mate compatible with my Android TV device?",
 a:"V12Mate is compatible with most Android TV devices running Android 5.0 or higher. Check your system version in Settings → About.",
 },
 {
 q:"Benefits of upgrading to TiviMate Premium?",
 a:"TiviMate Premium unlocks features like Catch-up, manual recording, VOD, and playlist management. However, our V12Mate app already includes VOD and Catch-up for free without any additional license fees.",
 },
 {
 q:"Can I use V12Mate with any IPTV provider?",
 a:"V12Mate only works with our service because it is our own dedicated player, and it's completely free with your subscription.",
 },
 {
 q:"Is TiviMate owned by IPTVV Canada?",
 a:"No, TiviMate is not owned by us. We support our own player, V12Mate. TiviMate is a popular third-party player which requires a premium license to unlock all features.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-3">Google Ecosystem</p>
 <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
 Android TV/Box <span className="text-iptv-green">Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-xs uppercase tracking-widest text-gray-500 font-bold leading-relaxed">
 Compatible devices: Sony, TCL, Hisense, Philips, Nvidia Shield, Chromecast with Google TV, Mi Box, and most Android TV boxes
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
 <p className="text-xs font-bold text-gray-500 mt-0.5">Quick Setup - 3-5 minutes</p>
 </div>
 </div>
 <div className="mt-4 pt-4 border-t border-gray-100 flex items-start space-x-3">
 <MonitorPlay className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
 <p className="text-xs text-gray-500 font-medium">Using our custom V12Mate Player for easy setup</p>
 </div>
 </div>
 </div>

 {/* Method 1 */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-900 text-[10px] font-bold text-white tracking-widest whitespace-nowrap min-w-[70px]">METHOD 01</span>
 <h4 className="text-2xl font-bold text-gray-900 mb-2">Using Downloader App</h4>
 </div>
 <p className="text-gray-600 mb-6 text-sm">The easiest way to install V12Mate on your Android TV device.</p>
 </div>
 
 <StepList steps={[
 {
 title:"Search for Downloader in the Play Store and tap Install",
 desc:"Open Google Play Store on your Android TV and search for \"Downloader\" app"
 },
 {
 title:"Press Allow when prompted",
 desc:"Grant necessary permissions for the Downloader app to function properly"
 },
 {
 title:"Click OK to confirm and proceed",
 desc:"Confirm the installation and setup process"
 },
 {
 title:"Downloader is ready — now install V12Mate",
 desc:"Launch the Downloader app to begin installing V12Mate"
 },
 {
 title:"Enter the Downloader code for V12Mate: 2494311 → press GO",
 desc:"Type the code exactly as shown and press GO to download V12Mate",
 tag:"Step 5 - Enter Code",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/android%20TV/01.png"
 },
 {
 title:"Accept Privacy Policy → Install → confirm Install again if asked",
 desc:"Accept the privacy policy and proceed with installation",
 tag:"Step 6 - Accept Policy",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/android%20TV/02.png"
 },
 {
 title:"Press Install → wait until installed",
 desc:"Complete the installation process and wait for it to finish",
 tag:"Step 7 - Installing",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/android%20TV/03.png"
 },
 {
 title:"When complete, press OPEN",
 desc:"Launch V12Mate for the first time",
 tag:"Step 8 - Press Open",
 alert:"If you already have TiviMate installed, please uninstall it first — otherwise V12Mate will not install.",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/android%20TV/04.png"
 },
 {
 title:"Press Add playlist",
 desc:"Start the setup process by adding your IPTV playlist",
 tag:"Step 9 - Add Playlist",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/android%20TV/05.png"
 },
 {
 title:"Press V12MATE",
 desc:"Select the V12MATE option for automatic configuration. If you only see \"Cancel\", click it to fix it.",
 tag:"Step 10 - Press V12MATE",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/android%20TV/06.png"
 },
 {
 title:"Enter your Credentials - (No server URL is needed since it's our player.)",
 desc:"Input your username and password - no server URL required for V12Mate",
 tag:"Step 11 - Enter Credentials",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/android%20TV/07.png"
 },
 {
 title:"Press Next, Make sure to keep VOD and TV channels selected",
 desc:"Ensure both live TV and video-on-demand options are enabled",
 tag:"Step 12 - VOD and TV Selection",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/android%20TV/08.png"
 },
 {
 title:"Wait for it to process, (about 1 minute)",
 desc:"Allow the app to configure your IPTV settings",
 tag:"Step 13 - Processing",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/android%20TV/09.png"
 },
 {
 title:"Press Done, wait few seconds. You're ready to watch!",
 desc:"Setup complete! Start enjoying your IPTV service on Android TV",
 tag:"Step 14 - Setup Complete",
 img:"https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models/iptv/installation-guide/android%20TV/10.png"
 }
 ]} />

 
 </div>

 {/* Troubleshooting Boxes */}
 <div className="space-y-4 mb-16">
 <div className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
 <AlertTriangle className="h-5 w-5" />
 </div>
 <div>
 <h5 className="text-sm font-black uppercase tracking-tight text-red-900 mb-2">Troubleshooting Login Issues</h5>
 <p className="text-xs text-red-800 leading-relaxed font-bold mb-2">If No Channels Load And Content Count Doesn't Show: Your login details are wrong.</p>
 <p className="text-xs text-red-700 leading-relaxed font-medium">Go to Settings → Playlists → V12Mate → Xtream Codes Parameters and double-check your username and password, including capital letters. If they're incorrect, no channels will appear.</p>
 </div>
 </div>
 </div>

 <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
 <Clock className="h-5 w-5" />
 </div>
 <div>
 <h5 className="text-sm font-black uppercase tracking-tight text-gray-900 mb-2">EPG (Program Guide) Information</h5>
 <p className="text-xs text-gray-800 leading-relaxed font-medium">The EPG (guide information) loads in the background. Please give it some time, and you can view it in Settings → EPG.</p>
 </div>
 </div>
 </div>

 <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
 <ShieldCheck className="h-5 w-5" />
 </div>
 <div>
 <h5 className="text-sm font-black uppercase tracking-tight text-yellow-900 mb-2">Security Settings Note</h5>
 <p className="text-xs text-yellow-800 leading-relaxed font-medium">You should go to Settings &gt; Security &amp; Restrictions, select the app, and toggle"Allow unknown apps" if installing from outside Play Store.</p>
 </div>
 </div>
 </div>
 </div>

 {/* Method 2 */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-900 text-[10px] font-bold text-white tracking-widest whitespace-nowrap min-w-[70px]">METHOD 02</span>
 <h4 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">Google Play Store (If V12Mate doesn't work)</h4>
 </div>
 <p className="text-gray-600 mb-6 text-sm">Alternative setup using TiviMate from Google Play Store.</p>
 </div>

 <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6 mb-6">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 shadow-sm ring-1 ring-gray-200">
 <Info className="h-5 w-5 text-gray-600" />
 </div>
 <div>
 <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900">Very Important</h4>
 <p className="text-xs font-bold text-gray-700 mt-0.5 leading-relaxed">VOD on TiviMate only works with their Premium. Our service (trial & subscription) already has VOD built in using V12Mate.</p>
 </div>
 </div>
 </div>
 
 <StepList steps={[
 {
 title:"Open Google Play Store on your Android TV",
 desc:"Access the Play Store from your Android TV home screen"
 },
 {
 title:"Search for TiviMate IPTV Player and click Install",
 desc:"Find and install the official TiviMate application"
 },
 {
 title:"Open TiviMate, select Add Playlist, choose Xtream Codes",
 desc:"Launch TiviMate and configure it for Xtream Codes authentication"
 },
 {
 title:"Enter your IPTVV credentials (Server URL, Username, Password)",
 desc:"Input your complete IPTV credentials to connect to the service"
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
 <InstallationCta 
 subtitle="Need help with your Android TV setup?"
 title="Contact Support"
 />
 </div>
 )
}
