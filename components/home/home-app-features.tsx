import { MonitorPlay, Zap, Tv, Smartphone, ShieldCheck, Headphones } from "lucide-react"
import { cn } from "@/lib/utils"

const benefits = [
  {
    icon: MonitorPlay,
    title: "Crystal Clear 4K",
    desc: "Experience sports and movies in stunning 4K and 8K quality. No compromises, just pure visual excellence.",
    tag: "01 / Visuals",
  },
  {
    icon: Zap,
    title: "Anti-Freeze Tech",
    desc: "Our advanced server infrastructure ensures zero buffering and smooth channel switching in milliseconds.",
    tag: "02 / Speed",
  },
  {
    icon: Tv,
    title: "20,000+ Channels",
    desc: "Get access to the world's largest library of live TV and VOD content, updated daily for your entertainment.",
    tag: "03 / Library",
  },
  {
    icon: Smartphone,
    title: "Watch Anywhere",
    desc: "Compatible with all your devices. Switch from your TV to your phone or tablet without missing a single beat.",
    tag: "04 / Freedom",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    desc: "Bank-grade encryption for all payments. We value your privacy and data security above everything else.",
    tag: "05 / Security",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    desc: "Real experts available 24/7. We don't use bots—if you need help, a real person is always ready to assist.",
    tag: "06 / Support",
  },
]

export function AppFeatures() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-end mb-12">
          <div className="text-center lg:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green">Why Easy IPTV</p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 md:text-4xl uppercase">
              Built around the viewer, <span className="text-iptv-green">not the provider.</span>
            </h2>
          </div>
          <p className="text-xs leading-relaxed text-gray-500 lg:max-w-md lg:justify-self-end text-center lg:text-left">
            Six promises we hold ourselves to — written into our service, our technology, and the
            way we treat the community who choose us.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc, tag }, index) => {
            const isMobileFeatured = index === 0;
            const isDesktopFeatured = index === 1;

            return (
              <article
                key={title}
                className={cn(
                  "group relative flex flex-col gap-5 p-7 transition-all duration-500",
                  isMobileFeatured ? "bg-iptv-green text-white lg:bg-white lg:text-gray-900" : 
                  isDesktopFeatured ? "bg-white text-gray-900 lg:bg-iptv-green lg:text-white" : 
                  "bg-white text-gray-900 hover:bg-gray-50"
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-[0.18em]",
                      isMobileFeatured ? "text-white/80 lg:text-gray-400" : 
                      isDesktopFeatured ? "text-gray-400 lg:text-white/80" : 
                      "text-gray-400"
                    )}
                  >
                    {tag}
                  </span>
                  <div
                    className={cn(
                      "grid h-10 w-10 place-items-center rounded-xl transition-transform duration-500 group-hover:-rotate-6",
                      isMobileFeatured ? "bg-white/20 text-white lg:bg-iptv-green/10 lg:text-iptv-green" : 
                      isDesktopFeatured ? "bg-iptv-green/10 text-iptv-green lg:bg-white/20 lg:text-white" : 
                      "bg-iptv-green/10 text-iptv-green"
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                </div>
                <h3 className="text-base font-bold uppercase tracking-tight">{title}</h3>
                <p
                  className={cn(
                    "text-xs leading-relaxed",
                    isMobileFeatured ? "text-white/90 lg:text-gray-500" : 
                    isDesktopFeatured ? "text-gray-500 lg:text-white/90" : 
                    "text-gray-500"
                  )}
                >
                  {desc}
                </p>
                <div
                  aria-hidden
                  className={cn(
                    "mt-auto h-px w-10 transition-all duration-500 group-hover:w-20",
                    isMobileFeatured ? "bg-white/30 lg:bg-iptv-green/30" : 
                    isDesktopFeatured ? "bg-iptv-green/30 lg:bg-white/30" : 
                    "bg-iptv-green/30"
                  )}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  )
}
