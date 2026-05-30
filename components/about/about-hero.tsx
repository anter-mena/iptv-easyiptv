import Link from "next/link"

export function AboutHero() {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden">
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
          src="https://www.apple.com/105/media/us/apple-tv-4k/2022/90c4e81a-c161-4f7f-9ea3-137ffd1054f5/anim/dolby/large_2x.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8">
        <div className="animate-fade-up">
          <h1 className="mb-4 text-4xl font-black leading-tight md:text-5xl lg:text-6xl uppercase tracking-tight">
            ABOUT <span className="text-iptv-green">EASY IPTV</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-sm text-gray-300 md:text-sm uppercase tracking-wider leading-relaxed">
            We're revolutionizing the streaming industry with cutting-edge technology, 
            premium content, and exceptional customer service. Your entertainment, redefined.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="rounded-md bg-iptv-green px-6 py-2.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-iptv-green-dark ring-4 ring-iptv-green/20"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
