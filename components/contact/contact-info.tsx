import { Mail, Phone, MapPin, Clock, Map as MapIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const contactItems = [
  {
    icon: Mail,
    title: "Email Support",
    desc: "support@easyiptv.com",
    tag: "01 / Digital",
    sub: "Responds within 2h",
  },
  {
    icon: Phone,
    title: "Phone Support",
    desc: "+1 (555) 123-4567",
    tag: "02 / Direct",
    sub: "Available 24/7",
  },
  {
    icon: MapPin,
    title: "Office Address",
    desc: "123 Streaming Avenue, Tech District, TD 12345",
    tag: "03 / Location",
    sub: "HQ Headquarters",
  },
  {
    icon: Clock,
    title: "Support Hours",
    desc: "Global 24/7 Coverage",
    tag: "04 / Timing",
    sub: "Including Holidays",
  },
]

export function ContactInfo() {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-10 text-center lg:text-left">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-3">Reach Us</p>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl uppercase">
          Contact <span className="text-iptv-green">Information</span>
        </h2>
        <p className="mt-4 mx-auto lg:mx-0 max-w-xl text-xs leading-relaxed text-gray-500">
          Reach out to us through any of these channels. We're committed to providing 
          excellent customer service and support.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2">
        {contactItems.map(({ icon: Icon, title, desc, tag, sub }, index) => {
          // Replicating the highlight logic: 1st card featured on mobile, 2nd on desktop
          const isMobileFeatured = index === 0;
          const isDesktopFeatured = index === 1;

          return (
            <article
              key={title}
              className={cn(
                "group relative flex flex-col gap-4 p-6 transition-all duration-500",
                isMobileFeatured ? "bg-iptv-green text-white sm:bg-white sm:text-gray-900" : 
                isDesktopFeatured ? "bg-white text-gray-900 sm:bg-iptv-green sm:text-white" : 
                "bg-white text-gray-900 hover:bg-gray-50"
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "text-[8px] font-bold uppercase tracking-[0.18em]",
                    isMobileFeatured ? "text-white/80 sm:text-gray-400" : 
                    isDesktopFeatured ? "text-gray-400 sm:text-white/80" : 
                    "text-gray-400"
                  )}
                >
                  {tag}
                </span>
                <div
                  className={cn(
                    "grid h-8 w-8 place-items-center rounded-lg transition-transform duration-500 group-hover:-rotate-6",
                    isMobileFeatured ? "bg-white/20 text-white sm:bg-iptv-green/10 sm:text-iptv-green" : 
                    isDesktopFeatured ? "bg-iptv-green/10 text-iptv-green sm:bg-white/20 sm:text-white" : 
                    "bg-iptv-green/10 text-iptv-green"
                  )}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </div>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-tight mb-1">{title}</h4>
                <p className={cn(
                  "text-[11px] font-bold leading-tight",
                  isMobileFeatured ? "text-white sm:text-gray-900" : 
                  isDesktopFeatured ? "text-gray-900 sm:text-white" : 
                  "text-gray-900"
                )}>
                  {desc}
                </p>
                <p className={cn(
                  "text-[9px] uppercase tracking-wider mt-1.5 font-bold",
                  isMobileFeatured ? "text-white/70 sm:text-gray-400" : 
                  isDesktopFeatured ? "text-gray-400 sm:text-white/70" : 
                  "text-gray-400"
                )}>
                  {sub}
                </p>
              </div>
            </article>
          )
        })}
      </div>

      {/* Mini Map Placeholder to fill space */}
      <div className="mt-6 flex h-32 items-center justify-center rounded-2xl bg-gray-50 border border-gray-200">
        <div className="text-center">
          <MapIcon className="mx-auto mb-2 h-6 w-6 text-gray-300" />
          <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Live Support Tracking</p>
        </div>
      </div>
    </div>
  )
}
