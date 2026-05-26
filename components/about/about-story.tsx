import { Rocket, TrendingUp, Award, PartyPopper } from "lucide-react"
import { cn } from "@/lib/utils"

const timeline = [
  {
    icon: Rocket,
    date: "2018 - Founded",
    title: "The Beginning",
    description: "Easy IPTV was founded with a vision to revolutionize entertainment. Starting with just 1,000 channels and a small team.",
    isRight: false,
  },
  {
    icon: TrendingUp,
    date: "2020 - Growth",
    title: "Rapid Expansion",
    description: "Reached 100,000 active users and expanded lineup to 10,000+ channels. Introduced 4K streaming.",
    isRight: true,
  },
  {
    icon: Award,
    date: "2022 - Innovation",
    title: "Technology Leadership",
    description: "Launched cloud DVR and AI-powered recommendations. Won \"Best IPTV Service\" award.",
    isRight: false,
  },
  {
    icon: PartyPopper,
    date: "2024 - Present",
    title: "Industry Leader",
    description: "Serving 500,000+ customers with 20,000+ channels. Leading the streaming revolution.",
    isRight: true,
    isSpecial: true,
  },
]

export function Story() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
            OUR <span className="text-iptv-green">STORY</span>
          </h2>
          <p className="mx-auto max-w-xl text-xs text-gray-500">
            From humble beginnings to becoming a leading IPTV provider, 
            our journey has been driven by innovation and customer focus.
          </p>
        </div>

        <div className="space-y-4">
          {timeline.map((item) => (
            <div
              key={item.date}
              className={cn(
                "flex flex-col items-center gap-6 rounded-xl p-6 transition-all duration-300 md:flex-row mx-auto max-w-2xl",
                item.isRight && "md:flex-row-reverse md:text-right",
                item.isSpecial ? "bg-iptv-green text-white shadow-lg scale-[1.02]" : "bg-gray-50 border border-gray-100"
              )}
            >
              <div className="shrink-0">
                <div className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-lg",
                  item.isSpecial ? "bg-white" : "bg-iptv-green"
                )}>
                  <item.icon className={cn(
                    "h-6 w-6",
                    item.isSpecial ? "text-iptv-green" : "text-white"
                  )} />
                </div>
              </div>
              <div className="flex-1 text-center md:text-inherit">
                <div className={cn(
                  "mb-1 text-[10px] font-bold uppercase tracking-widest",
                  item.isSpecial ? "text-white/80" : "text-iptv-green"
                )}>
                  {item.date}
                </div>
                <h3 className={cn(
                  "mb-2 text-sm font-bold uppercase tracking-tight",
                  item.isSpecial ? "text-white" : "text-gray-900"
                )}>
                  {item.title}
                </h3>
                <p className={cn(
                  "text-xs leading-relaxed",
                  item.isSpecial ? "text-white/90" : "text-gray-500"
                )}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
