import Link from "next/link"
import Image from "next/image"
import { Marquee } from "@/components/ui/marquee"

export function Hero() {
  return (
    <section className="hero-bg relative flex min-h-screen items-center justify-center overflow-hidden text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-up">
          <h1 className="mx-auto mb-4 max-w-[280px] text-3xl font-black leading-tight sm:max-w-none sm:text-3xl md:text-6xl lg:text-7xl uppercase tracking-tight [text-shadow:_0_1px_20px_rgb(0_0_0_/_60%)]">
            PREMIUM IPTV SERVICE AT AN<br />
            <span className="text-iptv-green">UNBEATABLE PRICE</span>
          </h1>
          <p className="mx-auto mb-8 max-w-4xl text-xs text-gray-300 md:text-sm uppercase tracking-wider leading-relaxed">
            <span className="block md:hidden px-4">
              Experience unlimited entertainment<br />with over 20,000+ live channels<br />
              and 50,000+ VOD content in stunning<br />4K quality.
            </span>
            <span className="hidden md:block">
              Experience unlimited entertainment with over 20,000+ live channels
              and 50,000+ VOD content. Watch your favorite shows, movies, and
              sports in stunning 4K quality.
            </span>
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-md bg-iptv-green px-6 py-2.5 text-xs font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-iptv-green-dark ring-4 ring-iptv-green/20"
            >
              Start Free Trial
            </Link>
            <Link
              href="#pricing"
              className="rounded-md border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Channel Logos Marquee */}
        <div className="mt-16 w-full max-w-5xl mx-auto overflow-hidden min-h-[48px] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee pauseOnHover className="[--duration:20s]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={`logo-${i}`} className="flex h-12 w-24 shrink-0 items-center justify-center px-4">
                <Image
                  src={`https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models@639e31403aeabe3b506c21bc02345a616a3da952/iptv/assets/${i}.svg`}
                  alt={`Channel Logo ${i}`}
                  width={96}
                  height={48}
                  className="brightness-0 invert opacity-40 transition-opacity hover:opacity-100 max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
