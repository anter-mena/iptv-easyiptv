import { CheckCircle, Tv } from "lucide-react"

export function Mission() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-3">Our Purpose</p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
              OUR <span className="text-iptv-green">MISSION</span>
            </h2>
            <p className="mb-4 text-sm font-bold text-gray-800 uppercase tracking-wide">
              To democratize access to premium entertainment worldwide.
            </p>
            <p className="mx-auto lg:mx-0 mb-6 max-w-xl text-sm leading-relaxed text-gray-500">
              We believe that everyone deserves access to world-class entertainment without 
              the limitations of traditional broadcasting. Our mission drives us to 
              continuously innovate and improve our service, providing reliable, 
              high-quality IPTV solutions that connect people to the content they love.
            </p>
            
            <div className="flex flex-col items-center lg:items-start space-y-3">
              {[
                "Global accessibility & Unlimited range",
                "Premium quality 4K/8K content library",
                "Exceptional 24/7 technical support",
              ].map((item) => (
                <div key={item} className="flex items-center space-x-2.5">
                  <CheckCircle className="h-4 w-4 text-iptv-green" />
                  <span className="text-sm font-medium text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-xl bg-gradient-to-br from-iptv-green/10 to-iptv-green/5 p-8 shadow-xl border border-gray-200">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-iptv-green/20">
                  <Tv className="h-7 w-7 text-iptv-green" />
                </div>
                <h3 className="mb-2 text-sm font-black uppercase tracking-tight text-gray-900">Premium Streaming</h3>
                <p className="text-[10px] leading-relaxed text-gray-500 max-w-[200px] mx-auto">
                  Delivering exceptional entertainment experiences through innovative technology and dedication to quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
