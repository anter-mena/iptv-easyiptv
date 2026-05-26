"use client"

import * as React from "react"
import { X, Play, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

interface VideoZoomProps {
  sources: { src: string; type: string }[]
  poster?: string
  className?: string
}

export function VideoZoom({ sources, poster, className }: VideoZoomProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className={cn("group relative cursor-pointer overflow-hidden rounded-2xl bg-black aspect-video", className)}
        >
          <video 
            className="w-full h-full opacity-80 transition-opacity duration-500 group-hover:opacity-100 object-cover"
            poster={poster}
            muted
            playsInline
            preload="none"
          >
            {sources.map((s, i) => <source key={i} src={s.src} type={s.type} />)}
          </video>
          
          {/* Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/40">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110">
              <Play className="h-6 w-6 text-white fill-white" />
            </div>
          </div>

          {/* Expand Icon */}
          <div className="absolute bottom-4 right-4 rounded-lg bg-black/40 p-2 text-white/70 backdrop-blur-sm transition-colors group-hover:text-white">
            <Maximize2 className="h-4 w-4" />
          </div>
        </div>
      </DialogTrigger>

      <DialogContent 
        showCloseButton={false}
        className="max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl border-none bg-transparent p-0 shadow-none ring-0 focus-visible:ring-0"
      >
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
          <video 
            controls 
            autoPlay
            className="h-full w-full object-contain bg-black"
          >
            {sources.map((s, i) => <source key={i} src={s.src} type={s.type} />)}
          </video>
          
          <DialogTrigger asChild>
            <button 
              className="fixed top-4 right-4 z-[100000] rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:rotate-90 active:scale-95 border border-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  )
}
