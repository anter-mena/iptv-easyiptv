"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white p-6 text-center overflow-hidden">
      {/* Massive Blurred Background Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-iptv-green/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="mb-4 flex flex-col items-center justify-center">
          <span className="text-[180px] md:text-[240px] font-black text-gray-900 leading-none tracking-tighter opacity-5 select-none absolute -top-24 left-1/2 -translate-x-1/2">404</span>
          <span className="text-8xl md:text-9xl font-black text-iptv-green tracking-tighter relative">404</span>
        </div>
        
        <h1 className="mb-4 text-2xl font-bold uppercase tracking-tight text-gray-900 md:text-3xl">
          Channel <span className="text-iptv-green">Not Found</span>
        </h1>
        
        <p className="mx-auto mb-10 max-w-sm text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          The frequency you are looking for is currently unavailable or has moved.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <button
            onClick={() => router.back()}
            className="rounded-md bg-iptv-green px-6 py-2.5 text-sm font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-iptv-green-dark ring-4 ring-iptv-green/20 flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-3.5 w-3.5" />
            Go Back
          </button>
          <Link
            href="/"
            className="rounded-md border border-gray-200 bg-white px-6 py-2.5 text-sm font-bold text-gray-600 transition-all hover:bg-gray-50 hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            <Home className="mr-2 h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Decorative branding element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20">
        <Image 
          src="/logo.svg" 
          alt="Background Logo" 
          width={800} 
          height={800} 
          className="h-10 w-auto grayscale" 
        />
      </div>
    </div>
  )
}
