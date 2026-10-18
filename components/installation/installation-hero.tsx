import Link from "next/link"

interface InstallationHeroProps {
  eyebrow?: string
  title: string
  description: string
  ctaLabel?: string
}

export function InstallationHero({
  eyebrow = "Setup Assistance",
  title,
  description,
  ctaLabel = "Choose Your Device",
}: InstallationHeroProps) {
  return (
    <section className="relative flex min-h-[45vh] items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://cdn.jsdelivr.net/gh/anter-mena/antermena-assets@main/Iptv/assets/BGVideo.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8">
        <div className="animate-fade-up">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green">{eyebrow}</p>
          <h1 className="mb-4 text-3xl font-black uppercase leading-tight tracking-tight [text-shadow:_0_1px_20px_rgb(0_0_0_/_60%)] md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-sm uppercase leading-relaxed tracking-wider text-gray-300">
            {description}
          </p>
          <div className="flex justify-center">
            <Link
              href="#devices"
              className="rounded-md bg-iptv-green px-6 py-2.5 text-sm font-bold text-white shadow-xl ring-4 ring-iptv-green/20 transition-all hover:scale-105 hover:bg-iptv-green-dark"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
