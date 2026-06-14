"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const reviews = [...Array(10)].map((_, i) => ({
  id: i + 1,
  img: `/assets/reviews/${i + 1}.png`,
}))

export function Reviews() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-2">Community Feedback</p>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl uppercase">
            What our <span className="text-iptv-green">customers say</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-[1400px]">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <div className="relative overflow-hidden px-4 md:px-20">
              <CarouselContent className="-ml-2">
                {reviews.map((review, index) => (
                  <CarouselItem key={review.id} className="pl-2 basis-[70%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="py-6">
                      <ReviewCard 
                        {...review} 
                        isActive={current === index} 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Fade Effects */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 md:w-48 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 md:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            </div>

            {/* Navigation Buttons - Explicitly forced inside on mobile */}
            <CarouselPrevious variant="default" className="left-2 sm:left-4 md:left-8 h-9 w-9 sm:h-10 sm:w-10 border-none bg-iptv-green text-white hover:bg-iptv-green-dark hover:text-white !active:translate-y-0 transition-all ring-4 ring-iptv-green/20 z-30" />
            <CarouselNext variant="default" className="right-2 sm:right-4 md:right-8 h-9 w-9 sm:h-10 sm:w-10 border-none bg-iptv-green text-white hover:bg-iptv-green-dark hover:text-white !active:translate-y-0 transition-all ring-4 ring-iptv-green/20 z-30" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

const ReviewCard = ({ img, id, isActive }: { img: string; id: number; isActive: boolean }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-lg border p-0.5 transition-all duration-500 bg-white",
        isActive 
          ? "border-iptv-green/30 shadow-xl scale-110 z-20" 
          : "border-gray-200 opacity-30 scale-90 grayscale"
      )}
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-md">
        <Image
          src={img}
          alt={`Customer Review ${id}`}
          fill
          className={cn(
            "object-cover transition-all duration-700",
            isActive ? "grayscale-0 opacity-100" : "grayscale opacity-80"
          )}
          sizes="(max-width: 768px) 50vw, 20vw"
        />
      </div>
      {isActive && (
        <div className="absolute inset-0 rounded-lg ring-1 ring-iptv-green/20 pointer-events-none" />
      )}
    </figure>
  )
}
