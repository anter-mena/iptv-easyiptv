"use client"

import * as React from"react"
import { Smartphone, Clock, Plus, Camera, Wifi } from"lucide-react"
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


export function InstallationApple() {
 const [openFaq, setOpenFaq] = React.useState<number | null>(null)

 const faqs = [
 {
 q:"Which app is best for iOS devices?",
 a:"iMPlayer is our recommended choice for its simplicity and reliability. Smarters Player Lite is also excellent for beginners. Both work perfectly with IPTV subscriptions.",
 },
 {
 q:"Do I need to jailbreak my Apple TV?",
 a:"No, all recommended apps are available directly from the App Store. No jailbreak required.",
 },
 {
 q:"Can I use these apps on Apple TV?",
 a:"Yes! iMPlayer and other IPTV apps support Apple TV. You can also use AirPlay to stream from your iPhone/iPad to Apple TV.",
 },
 {
 q:"Why is EPG not loading?",
 a:"Make sure \"Auto-update EPG\" is enabled in app settings. Some providers may take a few minutes to load the full guide.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-3">Apple Ecosystem</p>
 <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
 iPhone <span className="text-iptv-green">& iPad Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-gray-500 font-bold leading-relaxed">
 Compatible with: All iPhone and iPad devices running iOS 12.0 or later
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
 <p className="text-sm font-bold text-gray-500 mt-0.5">Quick Setup - 3 minutes</p>
 </div>
 </div>
 <div className="mt-4 pt-4 border-t border-gray-100 flex items-start space-x-3">
 <Smartphone className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
 <p className="text-sm text-gray-500 font-medium">Available from App Store - No jailbreak required</p>
 </div>
 </div>
 </div>

 {/* Method 1: iMPlayer */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex items-center space-x-2 mb-2">
 <span className="flex h-5 px-2 items-center justify-center rounded bg-yellow-400 text-[9px] font-black uppercase tracking-widest text-yellow-950">RECOMMENDED METHOD</span>
 </div>
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-900 text-[10px] font-bold text-white tracking-widest whitespace-nowrap min-w-[70px]">METHOD 01</span>
 <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-2">iMPlayer Setup</h4>
 </div>
 <p className="text-sm text-gray-500 font-medium">The most reliable and user-friendly IPTV app for iPhone and iPad devices.</p>
 </div>
 
 <StepList steps={[
 {
 title:"Download iMPlayer - IPTV Player from App Store",
 desc:"Search for \"iMPlayer\" in the App Store and download the official app",
 tag:"Step 1 - Download iMPlayer",
 img:"/assets/installationGuide/apple/01.png"
 },
 {
 title:"Open the app and click on \"Add a Playlist\"",
 desc:"Launch the iMPlayer app and select the option to add a new playlist"
 },
 {
 title:"Select playlist type \"XC API\"",
 desc:"Choose XC API as your playlist type for Xtream Codes compatibility"
 },
 {
 title:"Fill in your details",
 desc:"",
 bullets: [
"Playlist Name: Choose any name you want",
"Portal URL: Enter the server URL we sent you by email",
"Username & Password: Use the credentials provided in the email"
 ]
 },
 {
 title:"Click \"Add Playlist\" wait until contents finish downloading and enjoy streaming!",
 desc:"Setup complete! Wait for the content to load and start watching your favorite channels"
 }
 ]} />

 
 </div>

 {/* Method 2: Smarters Player Lite */}
 <div className="space-y-6 mb-16">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-900 text-[10px] font-bold text-white tracking-widest whitespace-nowrap min-w-[70px]">METHOD 02</span>
 <h4 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-2">Smarters Player Lite Setup</h4>
 </div>
 <p className="text-sm text-gray-500 font-medium">Alternative IPTV app with excellent features for iPhone and iPad users.</p>
 </div>

 <StepList steps={[
 {
 title:"Open app and tap Add User, select Login with Xtream Codes API",
 desc:"Launch Smarters Player Lite and choose the Xtream Codes login option",
 tag:"Step 1 - Login with Xtream Codes",
 img:"/assets/installationGuide/apple/02.png"
 },
 {
 title:"Use the login details provided to you after subscribing. Then click on \"ADD USER\" to continue",
 desc:"Enter your IPTV credentials and add the user profile"
 },
 {
 title:"Wait a few seconds for the app to process your details",
 desc:"Allow the app time to connect to your IPTV service and load content"
 },
 {
 title:"Tap the \"Live TV\" icon to start watching",
 desc:"Navigate to the Live TV section to access your channels",
 tag:"Step 4 - Live TV Access",
 img:"/assets/installationGuide/apple/03.png"
 },
 {
 title:"Select the channel category you want to browse and tap a channel name to play it",
 desc:"Browse categories and start streaming your favorite content!"
 }
 ]} />

 
 </div>

 {/* Tips */}
 <div className="mb-16">
 <div className="rounded-2xl border border-iptv-green/20 bg-iptv-green/5 p-6 shadow-sm">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-iptv-green/10 text-iptv-green">
 <Wifi className="h-5 w-5" />
 </div>
 <div>
 <h5 className="text-sm font-black uppercase tracking-tight text-gray-900 mb-2">Performance Tip</h5>
 <p className="text-sm text-gray-600 leading-relaxed font-medium">For better performance on iOS devices, ensure you're connected to a stable WiFi network. Cellular data may cause buffering issues.</p>
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
 subtitle="Need help with your iPhone or iPad setup?"
 title="Contact Support"
 />
 </div>
 )
}
