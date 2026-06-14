import Link from "next/link"
import { Tv, Smartphone, Tablet, Laptop } from "lucide-react"

export function CTA() {
  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto overflow-hidden rounded-2xl">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://cdn.jsdelivr.net/gh/anter-mena/antermena-assets@main/Iptv/assets/BGVideo.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 px-4 py-12 text-center text-white sm:px-6 lg:px-8">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl uppercase tracking-tight">
            Ready to Start Your <span className="text-iptv-green">Streaming Journey</span>?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-sm text-white/80">
            Join thousands of satisfied customers and experience premium IPTV streaming today. 
            Start your free trial now - no commitment, no risk.
          </p>
          <div className="mb-10 flex justify-center items-center">
            <Link
              href="https://wa.me/16728962606?text=Hello!%20I%20am%20interested%20in%20starting%20a%20*Free%20Trial*%20for%20*Easy%20IPTV*."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-iptv-green px-5 py-2.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-iptv-green-dark ring-4 ring-iptv-green/20"
            >
              Get Started Now
            </Link>
          </div>
          
          <div className="mx-auto grid max-w-lg grid-cols-4 gap-3 md:gap-4">
            {[
              { label: "Smart TV", icon: Tv },
              { label: "Mobile", icon: Smartphone },
              { label: "Tablet", icon: Tablet },
              { label: "Laptop", icon: Laptop },
            ].map((device) => (
              <div key={device.label} className="flex flex-col items-center space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm md:h-12 md:w-12">
                  <device.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">{device.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
