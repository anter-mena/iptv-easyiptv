"use client"

import * as React from "react"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function ChatBot() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 transition-all duration-500",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    )}>
      {/* Tooltip/Message */}
      <div className={cn(
        "mb-2 rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-black/5 transition-all duration-500 max-w-[280px]",
        isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4 pointer-events-none"
      )}>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-iptv-green/10">
            <MessageCircle className="h-4 w-4 text-iptv-green" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-iptv-green mb-1">Easy Support</p>
            <p className="text-sm font-bold text-gray-700 leading-relaxed">
              If you need any help, our AI assistant is here to guide you through the setup!
            </p>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="mt-4 w-full rounded-lg bg-iptv-green py-2 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:bg-iptv-green-dark"
        >
          Start Chatting
        </button>
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group",
          isOpen ? "bg-iptv-green-dark rotate-90" : "bg-iptv-green"
        )}
        aria-label="Toggle Chatbot"
      >
        <div className="absolute inset-0 rounded-full bg-iptv-green animate-ping opacity-20 group-hover:opacity-40" />
        {isOpen ? (
          <X className="relative h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="relative h-6 w-6 text-white" />
        )}
      </button>
    </div>
  )
}
