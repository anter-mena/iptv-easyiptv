import { Star, Heart, Lightbulb, Shield, Globe, Handshake } from "lucide-react"
import { cn } from "@/lib/utils"

const values = [
  {
    icon: Star,
    title: "Quality First",
    desc: "We never compromise on quality. Every aspect of our service is designed for excellence.",
    tag: "01 / Quality",
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Our customers are at the heart of everything we do. Their satisfaction drives us.",
    tag: "02 / Heart",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We push boundaries in streaming technology to create better user experiences.",
    tag: "03 / Vision",
  },
  {
    icon: Shield,
    title: "Reliability",
    desc: "Dependability is our promise. High uptime so you enjoy uninterrupted entertainment.",
    tag: "04 / Trust",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Entertainment should have no borders. Connecting people worldwide to content.",
    tag: "05 / Access",
  },
  {
    icon: Handshake,
    title: "Transparency",
    desc: "Honest communication and practices build trust. Open pricing and policies.",
    tag: "06 / Ethics",
  },
]

export function Values() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-end mb-12">
          <div className="text-center lg:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green">Our Foundation</p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.05] tracking-tight text-gray-900 md:text-4xl uppercase">
              Core values that <span className="text-iptv-green">drive excellence.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-500 lg:max-w-md lg:justify-self-end text-center lg:text-left">
            The fundamental principles that guide our technology, our support, 
            and the way we serve the community who chooses us.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, desc, tag }, index) => {
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
                    "text-sm leading-relaxed",
                    isMobileFeatured ? "text-white/90 lg:text-gray-500" : 
                    isDesktopFeatured ? "text-gray-500 lg:text-white/90" : 
                    "text-gray-500"
                  )}
                >
                  {desc}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
