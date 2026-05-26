"use client"

import Image from "next/image"
import { X, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ImageZoomProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: "video" | "square" | "auto"
  trigger?: React.ReactNode
}

export function ImageZoom({ src, alt, className, aspectRatio = "video", trigger }: ImageZoomProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <div 
            className={cn(
              "group relative cursor-zoom-in overflow-hidden rounded-lg bg-gray-100",
              aspectRatio === "video" && "aspect-video",
              aspectRatio === "square" && "aspect-square",
              className
            )}
          >
            <Image 
              src={src} 
              alt={alt} 
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="rounded-full bg-white/20 p-2 backdrop-blur-md">
                <ZoomIn className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        )}
      </DialogTrigger>
      
      <DialogContent 
        showCloseButton={false}
        className="max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl border-none bg-transparent p-0 shadow-none ring-0 focus-visible:ring-0"
      >
        <div className="relative flex flex-col items-center justify-center gap-4">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image 
              src={src} 
              alt={alt} 
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">{alt}</p>
          
          <DialogTrigger asChild>
            <button 
              className="fixed top-4 right-4 z-[100000] rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 active:scale-95 border border-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  )
}
