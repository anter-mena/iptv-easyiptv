"use client"

import * as React from "react"
import Image from "next/image"
import { Marquee } from "@/components/ui/marquee"

export function ContentLibrary() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl uppercase tracking-tight">
            PREMIUM <span className="text-iptv-green">CONTENT LIBRARY</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-gray-500">
            Explore our vast collection of live channels and on-demand content.
            The latest blockbusters, live sports, and international programming.
          </p>
        </div>

        {/* Channels Marquee */}
        <div className="mb-10">
          <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-widest text-gray-400">Live TV Channels</h3>
          <div className="relative overflow-hidden min-h-[48px] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <Marquee pauseOnHover className="[--duration:30s] [--gap:1rem]">
              {[...Array(15)].map((_, i) => (
                <div
                  key={`channel-${i}`}
                  className="flex h-12 w-24 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-sm border border-gray-100"
                >
                  <Image
                    src={`https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models@9732f925f0b8e99efd384fc7adced2d48b24bcb3/iptv/channel/${i + 1}.svg`}
                    alt={`Premium Live TV Channel ${i + 1} Stream`}
                    width={80}
                    height={40}
                    className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Sports & Movies Combined Marquees */}
        <div className="space-y-6">
          <h3 className="text-center text-sm font-bold uppercase tracking-widest text-gray-400">Premium On-Demand</h3>
          
          <div className="relative overflow-hidden min-h-[192px] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <Marquee reverse pauseOnHover className="[--duration:50s] [--gap:1rem]">
              {[...Array(10)].map((_, i) => (
                <div
                  key={`sport-${i}`}
                  className="relative h-48 w-32 shrink-0 overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 transition-transform hover:scale-105"
                >
                  <Image
                    src={`https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models@main/iptv/programs/sp${i + 1}.png`}
                    alt={`Live Sports Streaming Event ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 30vw, 15vw"
                  />
                </div>
              ))}
            </Marquee>
          </div>

          <div className="relative overflow-hidden min-h-[192px] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <Marquee pauseOnHover className="[--duration:60s] [--gap:1rem]">
              {[...Array(18)].map((_, i) => (
                <div
                  key={`movie-${i}`}
                  className="relative h-48 w-32 shrink-0 overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 transition-transform hover:scale-105"
                >
                  <Image
                    src={`https://cdn.jsdelivr.net/gh/ChaosAfterParty/email_models@main/iptv/movies/${(i + 1).toString().padStart(2, "0")}.jpg`}
                    alt={`HD VOD Movie Stream ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 30vw, 15vw"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}
