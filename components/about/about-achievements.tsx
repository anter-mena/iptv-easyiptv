import { Users, Tv, Film, RefreshCcw } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500K+",
    label: "Active Users",
    description: "Trusted by customers worldwide",
  },
  {
    icon: Tv,
    value: "20K+",
    label: "Live Channels",
    description: "Global premium channels",
  },
  {
    icon: Film,
    value: "50K+",
    label: "VOD Content",
    description: "Movies & series on demand",
  },
  {
    icon: RefreshCcw,
    value: "99.9%",
    label: "Uptime",
    description: "Reliable 24/7 service",
  },
]

export function Achievements() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
            OUR <span className="text-iptv-green">ACHIEVEMENTS</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-gray-500">
            Numbers that speak to our commitment to excellence and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="group rounded-xl bg-white p-6 shadow-sm border border-gray-100 transition-all hover:scale-[1.03] text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-iptv-green/10 transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="h-6 w-6 text-iptv-green" />
              </div>
              <div className="mb-1 text-2xl font-bold text-iptv-green">{stat.value}</div>
              <h3 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">{stat.label}</h3>
              <p className="text-[10px] text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
