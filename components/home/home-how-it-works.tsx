import { CreditCard, UserPlus, Download, Play, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Choose Your Plan",
    description: "Select the perfect IPTV package that fits your needs and budget from our flexible pricing options.",
    icon: CreditCard,
  },
  {
    number: "02",
    title: "Create Account",
    description: "Quick and secure registration process. Create your account and get instant access to our platform.",
    icon: UserPlus,
  },
  {
    number: "03",
    title: "Download App",
    description: "Install our app on your preferred device. Compatible with Smart TV, mobile, tablet, and more.",
    icon: Download,
  },
  {
    number: "04",
    title: "Start Streaming",
    description: "Login to your account and enjoy unlimited access to 20,000+ channels and 50,000+ VOD content.",
    icon: Play,
  },
]

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-10">
          <div className="group mb-4 inline-flex items-center rounded-md border border-iptv-green/20 bg-iptv-green/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-iptv-green transition-all duration-300 hover:bg-iptv-green/20">
            <Play className="mr-2 h-3 w-3 fill-current" />
            Simple Process
          </div>

          <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl uppercase">
            HOW IT <span className="text-iptv-green">WORKS</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-gray-500">
            Get started with premium IPTV streaming in just 4 simple steps. From choosing your plan to watching your favorite content.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="group relative text-center">
                <div className="relative mb-6 inline-block">
                  <div className="absolute -top-3 -right-2 z-20 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-iptv-green text-[10px] font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                  <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border border-iptv-green/20 bg-iptv-green/10 shadow-lg transition-all duration-500 group-hover:scale-[1.05] group-hover:bg-iptv-green group-hover:text-white">
                    <step.icon className="h-5 w-5 text-iptv-green transition-colors duration-500 group-hover:text-white" />
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-12 -right-6 z-20 hidden lg:flex">
                    <ArrowRight className="h-6 w-6 text-iptv-green/60" />
                  </div>
                )}
                <h3 className="mb-2 text-base font-bold text-gray-900 transition-colors group-hover:text-iptv-green">{step.title}</h3>
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
