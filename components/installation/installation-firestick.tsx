"use client"

import * as React from"react"
import { Clock, Star, Plus, Camera, AlertTriangle, ShieldCheck, Info, PlayCircle, Download, Settings, Smartphone, Video } from"lucide-react"
import { cn } from"@/lib/utils"
import { InstallationCta } from"./installation-cta"
import { ImageZoom } from"@/components/ui/image-zoom"
import { VideoZoom } from"@/components/ui/video-zoom"

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


export function InstallationFirestick() {
 const [openFaq, setOpenFaq] = React.useState<number | null>(null)

 const faqs = [
 {
 q:"What is V12Mate, and how does it work on Firestick?",
 a:"V12Mate is a media player app for IPTV on Firestick, organizing channels/playlists with an EPG (Electronic Program Guide). It requires a subscription from us.",
 },
 {
 q:"Is V12Mate compatible with all Firestick models?",
 a:"Yes, V12Mate works with most Firestick models. Ensure you have enough storage space and a solid Wi-Fi connection for optimal performance.",
 },
 {
 q:"How do I add IPTV services to V12Mate?",
 a:"Add your provider's M3U URL or Xtream Codes details in V12Mate's playlist section. You'll need username, and password from IPTVV CANADA.",
 },
 {
 q:"No content showing on V12Mate?",
 a:"Delete or edit the playlist and re-add it — it may have been entered incorrectly. Please check your credentials.",
 },
 {
 q:"Troubleshooting tips?",
 a:"Re-enable unknown sources/ADB if needed, clear cache if app is slow, reinstall for major issues, or use a VPN if your ISP blocks streaming.",
 },
 ]

 return (
 <div className="animate-fade-up">
 {/* Header */}
 <div className="mb-12 text-center">
 <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-3">Amazon Ecosystem</p>
 <h3 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
 Fire TV Stick <span className="text-iptv-green">Setup</span>
 </h3>
 <p className="mx-auto max-w-xl text-sm uppercase tracking-widest text-gray-500 font-bold leading-relaxed">
 Compatible with: Amazon Fire TV Stick, Fire TV Stick 4K, Fire TV Cube, Fire TV devices
 </p>
 </div>

 {/* Setup Info & Important Notice */}
 <div className="grid grid-cols-1 gap-4 mb-16 sm:grid-cols-2">
 <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
 <div className="flex items-center space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 shadow-sm">
 <Clock className="h-5 w-5 text-white" />
 </div>
 <div>
 <h4 className="text-[10px] font-black uppercase tracking-widest text-orange-900">Setup Time - 5-10 minutes</h4>
 <p className="text-sm font-bold text-orange-700 mt-0.5 leading-relaxed">Our V12Mate Player - Beginner friendly</p>
 </div>
 </div>
 </div>

 <div className="rounded-xl border border-red-200 bg-red-50 p-6">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500 shadow-sm">
 <AlertTriangle className="h-5 w-5 text-white" />
 </div>
 <div>
 <h4 className="text-[10px] font-black uppercase tracking-widest text-red-900">Very Important</h4>
 <p className="text-sm font-bold text-red-700 mt-0.5 leading-relaxed">If you already have TiviMate installed, please uninstall it first — otherwise V12Mate will not install.</p>
 </div>
 </div>
 </div>
 </div>

 {/* Method 1: Video Guide */}
 <div className="mb-16">
 <div className="mb-8 text-center">
 <div className="inline-flex items-center space-x-2 bg-gray-600 text-white px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest mb-4">
 <PlayCircle className="h-3 w-3" />
 <span>VIDEO TUTORIAL</span>
 </div>
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-900 text-[10px] font-bold text-white tracking-widest whitespace-nowrap min-w-[70px]">METHOD 01</span>
 <h4 className="text-2xl font-bold text-gray-900 mb-2">Watch Video Guide</h4>
 </div>
 <p className="text-gray-600 mb-6 text-sm">Follow along with our complete video tutorial for Fire TV Stick setup.</p>
 </div>

 <div className="mb-8 overflow-hidden rounded-2xl bg-black shadow-2xl border-4 border-black ring-4 ring-black/5">
 <VideoZoom 
 sources={[
 { src:"https://cdn.jsdelivr.net/gh/anter-mena/antermena-assets@main/Iptv/assets/video.webm", type:"video/webm" },
 { src:"https://cdn.jsdelivr.net/gh/anter-mena/antermena-assets@main/Iptv/assets/video.mp4", type:"video/mp4" }
 ]}
 />
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <div className="bg-white p-6 text-center rounded-xl border border-gray-100 shadow-sm">
 <div className="flex items-center justify-between mb-4">
 <span className="text-[10px] font-bold text-gray-400">PART 1</span>
 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-iptv-green/10">
 <Download className="text-iptv-green h-5 w-5" />
 </div>
 </div>
 <h5 className="text-sm font-black uppercase tracking-tight text-gray-900 mb-2 text-left">Downloader App</h5>
 <p className="text-sm text-gray-500 font-medium text-left">Install the Downloader app from Fire TV App Store</p>
 </div>
 <div className="bg-white p-6 text-center rounded-xl border border-gray-100 shadow-sm">
 <div className="flex items-center justify-between mb-4">
 <span className="text-[10px] font-bold text-gray-400">PART 2</span>
 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-iptv-green/10">
 <Settings className="text-iptv-green h-5 w-5" />
 </div>
 </div>
 <h5 className="text-sm font-black uppercase tracking-tight text-gray-900 mb-2 text-left">Enable Settings</h5>
 <p className="text-sm text-gray-500 font-medium text-left">Allow unknown sources and developer options</p>
 </div>
 <div className="bg-white p-6 text-center rounded-xl border border-gray-100 shadow-sm">
 <div className="flex items-center justify-between mb-4">
 <span className="text-[10px] font-bold text-gray-400">PART 3</span>
 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-iptv-green/10">
 <Video className="text-iptv-green h-5 w-5" />
 </div>
 </div>
 <h5 className="text-sm font-black uppercase tracking-tight text-gray-900 mb-2 text-left">Install V12Mate</h5>
 <p className="text-sm text-gray-500 font-medium text-left">Set up V12Mate and configure your IPTV service</p>
 </div>
 </div>
 </div>

 {/* Method 2: Written Guide */}
 <div className="mb-16 bg-gray-50 rounded-3xl p-8 border border-gray-200">
 <div className="text-center mb-12">
 
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-900 text-[10px] font-bold text-white tracking-widest whitespace-nowrap min-w-[70px]">METHOD 02</span>
 <h4 className="text-2xl font-bold text-gray-900 mb-2">Step-by-Step Instructions</h4>
 </div>
 <p className="text-gray-600 mb-6 text-sm">Detailed written instructions with screenshots for each step.</p>
 </div>

 {/* Part 1 */}
 <div className="space-y-6 mb-12">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-100 text-[10px] font-bold text-gray-600 tracking-widest whitespace-nowrap min-w-[70px] border border-gray-200">PART 1</span>
 <h5 className="text-xl font-bold text-gray-900 uppercase tracking-tight">Install Downloader App</h5>
 </div>
 </div>
 <StepList steps={[
 { title:"Go to My Apps from Fire TV home screen", desc:"Navigate to the My Apps section on your Fire TV main menu" },
 { title:"Select Get more apps", desc:"Choose the option to browse and download additional applications" },
 { title:"Choose Search, press Down, then OK. Type Downloader", desc:"Use the search function to find the Downloader application" },
 { title:"When results show, select Downloader and press OK", desc:"Choose the official Downloader app from the search results" },
 { title:"Choose Downloader → Download", desc:"Proceed to download the Downloader application" },
 { title:"Wait for it to download and install", desc:"Allow the Fire TV to complete the download and installation process" },
 { title:"Do not open it yet. Press Back to the Home screen", desc:"Return to the home screen without launching Downloader yet" }
 ]} />
 </div>

 {/* Part 2 */}
 <div className="space-y-6 mb-12">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-100 text-[10px] font-bold text-gray-600 tracking-widest whitespace-nowrap min-w-[70px] border border-gray-200">PART 2</span>
 <h5 className="text-xl font-bold text-gray-900 uppercase tracking-tight">Enable Developer Options & Unknown Sources</h5>
 </div>
 </div>
 <StepList steps={[
 { title:"Go to Settings → My Fire TV", desc:"Navigate to the Fire TV settings and select the My Fire TV option" },
 { title:"Open About and click Fire TV Stick 7 times to enable Developer Options", desc:"Tap the Fire TV Stick option repeatedly to unlock developer settings" },
 { title:"Press Back → Developer Options → enable ADB debugging", desc:"Access the developer options and turn on ADB debugging" },
 { title:"Confirm ADB debugging is On", desc:"Verify that ADB debugging has been successfully enabled" },
 { title:"Select Install Unknown Apps → give Downloader permission (press OK)", desc:"Allow the Downloader app to install applications from unknown sources" },
 { title:"Press the Home button to return home", desc:"Go back to the Fire TV home screen to proceed with installation" }
 ]} />
 </div>

 {/* Part 3 */}
 <div className="space-y-6">
 <div className="text-left">
 <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
 <span className="flex h-6 px-3 items-center justify-center rounded bg-gray-100 text-[10px] font-bold text-gray-600 tracking-widest whitespace-nowrap min-w-[70px] border border-gray-200">PART 3</span>
 <h5 className="text-xl font-bold text-gray-900 uppercase tracking-tight">Install V12Mate via Downloader</h5>
 </div>
 </div>
 <StepList steps={[
 { title:"Open Downloader", desc:"Launch the Downloader application you installed earlier" },
 { title:"Press Allow to grant file access", desc:"Grant necessary permissions for Downloader to access files" },
 { title:"Dismiss the welcome message (press OK)", desc:"Close any welcome or introductory messages" },
 { 
 title:"Enter the Downloader code for V12Mate: 2494311 → press GO", 
 desc:"Type the code exactly as shown and press GO to download V12Mate",
 tag:"Step 4 - Enter Code",
 img:"/assets/installationGuide/androidTV/01.png"
 },
 { 
 title:"Accept Privacy Policy → Install → confirm Install again if asked", 
 desc:"Accept the privacy policy and proceed with installation",
 tag:"Step 5 - Accept Policy",
 img:"/assets/installationGuide/androidTV/02.png"
 },
 { 
 title:"Press Install → wait until installed", 
 desc:"Complete the installation process and wait for it to finish",
 tag:"Step 6 - Installing",
 img:"/assets/installationGuide/androidTV/03.png"
 },
 { 
 title:"When complete, press OPEN", 
 desc:"Launch V12Mate for the first time",
 tag:"Step 7 - Press Open",
 alert:"If you already have TiviMate installed, please uninstall it first — otherwise V12Mate will not install.",
 img:"/assets/installationGuide/androidTV/04.png"
 },
 { 
 title:"Press Add playlist", 
 desc:"Start the setup process by adding your IPTV playlist",
 tag:"Step 8 - Add Playlist",
 img:"/assets/installationGuide/androidTV/05.png"
 },
 { 
 title:"Press V12MATE", 
 desc:"Select the V12MATE option for automatic configuration",
 tag:"Step 9 - Press V12MATE",
 img:"/assets/installationGuide/androidTV/06.png"
 },
 { 
 title:"Enter your Credentials - (No Server Address is needed since it's our player.)", 
 desc:"Input your username and password - no server URL required for V12Mate",
 tag:"Step 10 - Enter Credentials",
 img:"/assets/installationGuide/androidTV/07.png"
 },
 { 
 title:"Press Next, Make sure to keep VOD and TV channels selected", 
 desc:"Ensure both live TV and video-on-demand options are enabled",
 tag:"Step 11 - VOD and TV Selection",
 img:"/assets/installationGuide/androidTV/08.png"
 },
 { 
 title:"Wait for it to process, (about 1 minute)", 
 desc:"Allow the app to configure your IPTV settings",
 tag:"Step 12 - Processing",
 img:"/assets/installationGuide/androidTV/09.png"
 },
 { 
 title:"Press Done, wait few seconds. You're ready to watch!", 
 desc:"Setup complete! Start enjoying your IPTV service on Fire TV Stick",
 tag:"Step 13 - Setup Complete",
 img:"/assets/installationGuide/androidTV/10.png"
 }
 ]} />

 
 </div>
 </div>

 {/* Troubleshooting Boxes */}
 <div className="space-y-4 mb-16">
 <div className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white">
 <AlertTriangle className="h-5 w-5" />
 </div>
 <div>
 <h5 className="text-sm font-black uppercase tracking-tight text-red-900 mb-2">Troubleshooting Login Issues</h5>
 <p className="text-sm text-red-800 leading-relaxed font-bold mb-2">If No Channels Load And Content Count Doesn't Show: Your login details are wrong.</p>
 <p className="text-sm text-red-700 leading-relaxed font-medium">Go to Settings → Playlists → V12Mate → Xtream Codes Parameters and double-check your username and password, including capital letters. If they're incorrect, no channels will appear.</p>
 </div>
 </div>
 </div>

 <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-500 text-white">
 <Clock className="h-5 w-5" />
 </div>
 <div>
 <h5 className="text-sm font-black uppercase tracking-tight text-gray-900 mb-2">EPG (Program Guide) Information</h5>
 <p className="text-sm text-gray-800 leading-relaxed font-medium">The EPG (guide information) loads in the background. Please give it some time, and you can view it in Settings → EPG.</p>
 </div>
 </div>
 </div>

 <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm">
 <div className="flex items-start space-x-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-white">
 <ShieldCheck className="h-5 w-5" />
 </div>
 <div>
 <h5 className="text-sm font-black uppercase tracking-tight text-yellow-900 mb-2">Developer Options Tip</h5>
 <p className="text-sm text-yellow-800 leading-relaxed font-medium">If Developer Options is hidden, go to About and click Fire TV Stick 7 times to enable it.</p>
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
 subtitle="Need help with your Fire TV Stick setup?"
 title="Contact Support"
 />
 </div>
 )
}
