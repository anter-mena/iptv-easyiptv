import { Tv, ShieldCheck, Zap, Laptop, MonitorPlay, RefreshCcw } from "lucide-react"

const features = [
  {
    title: "Watch on All Devices",
    description: "Stream on any device - Smart TV, mobile, tablet, laptop, or streaming device. Perfect compatibility across all platforms.",
    icon: Laptop,
  },
  {
    title: "Instant Activation",
    description: "Get instant access to all channels and content. No waiting time, no complex setup - start watching immediately.",
    icon: Zap,
  },
  {
    title: "Super Quality",
    description: "Enjoy stunning 4K quality streams with crystal clear audio. Experience your content like never before.",
    icon: MonitorPlay,
  },
  {
    title: "Live TV 20,000 Channels",
    description: "Access over 20,000 live channels from around the world. Never miss your favorite shows, news, or sports.",
    icon: Tv,
  },
  {
    title: "Secure Payment",
    description: "Your payment information is protected with bank-level security. Multiple payment options available.",
    icon: ShieldCheck,
  },
  {
    title: "99.9% Uptime",
    description: "Reliable service you can count on. Our robust infrastructure ensures minimal downtime and maximum entertainment.",
    icon: RefreshCcw,
  },
]

export function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
            WHY CHOOSE <span className="text-iptv-green">EASY IPTV</span> ?
          </h2>
          <p className="mx-auto max-w-xl text-sm text-gray-500">
            We deliver a premium streaming experience with unmatched quality and
            reliability. Join millions who trust us for their entertainment needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-xl"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-iptv-green/10 transition-all duration-500 group-hover:bg-iptv-green group-hover:text-white">
                <feature.icon className="h-5 w-5 text-iptv-green transition-colors duration-500 group-hover:text-white" />
              </div>
              <div className="flex flex-col">
                <h3 className="mb-1 text-base font-bold text-gray-900 transition-colors group-hover:text-iptv-green">{feature.title}</h3>
                <p className="text-xs leading-relaxed text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
