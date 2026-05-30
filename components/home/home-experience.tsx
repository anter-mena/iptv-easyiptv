import Image from "next/image"
import { CheckCircle, Shield } from "lucide-react"

export function Experience() {
  return (
    <section className="bg-[#222222] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl uppercase tracking-tight">
              EXPERIENCE BEST IPTV<br />PROVIDER FOR<br />
              <span className="text-iptv-green">STREAMING EXPERIENCE</span>
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-sm text-gray-400 lg:mx-0">
              Transform your entertainment experience with our premium IPTV service. 
              Enjoy unlimited access to global content with zero buffering.
            </p>

            <div className="mb-8 flex flex-col items-center space-y-3 lg:items-start">
              {[
                "Anti-Freeze Technology",
                "24/7 Customer Support",
                "Easy Setup & Installation",
                "7-Day Money Back Guarantee",
              ].map((item) => (
                <div key={item} className="flex items-center space-x-2.5">
                  <CheckCircle className="h-4 w-4 text-iptv-green" />
                  <span className="text-sm font-medium text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mx-auto max-w-sm rounded-xl border border-iptv-green/20 bg-iptv-green/10 p-4 lg:mx-0 lg:max-w-none">
              <div className="flex items-center space-x-3 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-iptv-green">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider">100% Safe & Secure</h4>
                  <p className="text-[10px] text-gray-400">SSL encrypted and privacy protected</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models@main/iptv/tools/image2.png"
                alt="Easy IPTV Premium Streaming App Interface on Smart TV"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
