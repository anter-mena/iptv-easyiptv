"use client"

import * as React from "react"
import { RefreshCcw, Home, AlertCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  React.useEffect(() => {
    console.error(error)
  }, [error])

  const handleBack = () => {
    // If coming from installation-guide, go to the clean base path to avoid state issues
    if (typeof document !== 'undefined' && document.referrer.includes('/installation-guide')) {
      router.push('/installation-guide')
    } else if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white p-6 text-center overflow-hidden">
      {/* Massive Blurred Background Circle (Red for errors) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20">
        <Image 
          src="/logo.svg" 
          alt="" 
          width={80} 
          height={40} 
          className="h-10 w-auto grayscale" 
        />
      </div>

      <div className="relative z-10">
        <div className="mb-4 flex flex-col items-center justify-center relative h-32 md:h-48">
          <span className="text-[120px] md:text-[180px] font-black text-gray-900 leading-none tracking-tighter opacity-5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">ERROR</span>
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 text-red-600 shadow-xl shadow-red-100 rotate-3">
            <AlertCircle className="h-10 w-10" strokeWidth={2.5} />
          </div>
        </div>
        
        <h1 className="mb-4 text-2xl font-bold uppercase tracking-tight text-gray-900 md:text-3xl">
          Signal <span className="text-red-600">Interrupted</span>
        </h1>
        
        <p className="mx-auto mb-10 max-w-sm text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          Something went wrong while trying to stream this page.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row justify-center">
          <button
            onClick={handleBack}
            className="rounded-md bg-red-600 px-6 py-2.5 text-xs font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-red-700 ring-4 ring-red-600/20 flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-3.5 w-3.5" />
            Go Back
          </button>
          <button
            onClick={() => reset()}
            className="rounded-md border border-gray-200 bg-white px-6 py-2.5 text-xs font-bold text-gray-600 transition-all hover:bg-gray-50 hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            <RefreshCcw className="mr-2 h-3.5 w-3.5" />
            Try Again
          </button>
        </div>
      </div>

      {error.digest && (
        <p className="absolute bottom-12 text-[10px] font-bold text-gray-300 tracking-widest uppercase">
          Error ID: {error.digest}
        </p>
      )}
    </div>
  )
}
