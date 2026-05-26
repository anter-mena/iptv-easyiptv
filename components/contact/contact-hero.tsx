export function ContactHero() {
  return (
    <section className="relative flex min-h-[45vh] items-center overflow-hidden">
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
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8">
        <div className="animate-fade-up">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-3">Support Center</p>
          <h1 className="mb-4 text-3xl font-black leading-tight md:text-5xl lg:text-6xl uppercase tracking-tight [text-shadow:_0_1px_20px_rgb(0_0_0_/_60%)]">
            GET IN <span className="text-iptv-green">TOUCH</span>
          </h1>
          <p className="mx-auto max-w-xl text-xs text-gray-300 md:text-sm uppercase tracking-wider leading-relaxed">
            We're here to help 24/7. Contact our expert support team for assistance with installation, 
            troubleshooting, or any questions about our IPTV service.
          </p>
        </div>
      </div>
    </section>
  )
}
