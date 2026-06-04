"use client"

import * as React from "react"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
  </svg>
)

export function ChatBot() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
    )}>
      {/* Contact Options Panel */}
      <div className={cn(
        "mb-2 rounded-2xl bg-card/90 backdrop-blur-2xl border border-white/20 dark:border-white/10 p-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-black/50 transition-all duration-500 w-[250px] origin-bottom-right",
        isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-8 pointer-events-none"
      )}>
        <div className="mb-3.5 px-1">
          <p className="text-[8.5px] font-black uppercase tracking-[0.2em] text-iptv-green mb-1 opacity-80">Support Options</p>
          <h3 className="text-[12px] font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent leading-snug">
            How would you like to connect with our team?
          </h3>
        </div>
        
        <div className="flex flex-col gap-2">
          <a
            href="https://wa.me/16728962606"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between w-full rounded-xl border border-border/40 bg-background/50 p-2.5 transition-all duration-300 hover:scale-[1.02] hover:bg-background hover:shadow-lg hover:shadow-[#25D366]/10 hover:border-[#25D366]/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/0 via-[#25D366]/5 to-[#25D366]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 group-hover:bg-[#25D366] transition-all duration-300 shadow-sm">
                 <WhatsAppIcon className="h-[18px] w-[18px] text-[#25D366] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex flex-col items-start gap-0">
                <span className="text-[13px] font-bold text-foreground">WhatsApp</span>
                <span className="text-[10px] text-muted-foreground/80 font-medium tracking-tight">Fastest response</span>
              </div>
            </div>
            <div className="relative h-6 w-6 flex items-center justify-center rounded-md bg-[#25D366]/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </a>

          <a
            href="https://t.me/+16728962606"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between w-full rounded-xl border border-border/40 bg-background/50 p-2.5 transition-all duration-300 hover:scale-[1.02] hover:bg-background hover:shadow-lg hover:shadow-[#229ED9]/10 hover:border-[#229ED9]/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#229ED9]/0 via-[#229ED9]/5 to-[#229ED9]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#229ED9]/10 group-hover:bg-[#229ED9] transition-all duration-300 shadow-sm">
                 <TelegramIcon className="relative -left-[2px] h-[18px] w-[18px] text-[#229ED9] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex flex-col items-start gap-0">
                <span className="text-[13px] font-bold text-foreground">Telegram</span>
                <span className="text-[10px] text-muted-foreground/80 font-medium tracking-tight">Chat with our team</span>
              </div>
            </div>
            <div className="relative h-6 w-6 flex items-center justify-center rounded-md bg-[#229ED9]/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#229ED9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </a>
        </div>
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative flex h-16 w-16 items-center justify-center rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 hover:scale-105 active:scale-95 group",
          isOpen ? "bg-iptv-green-dark rotate-90" : "bg-gradient-to-br from-iptv-green to-iptv-green-dark"
        )}
        aria-label="Toggle Support Options"
      >
        <div className="absolute inset-0 rounded-full bg-iptv-green animate-ping opacity-30 group-hover:opacity-50 duration-1000" />
        <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-iptv-green to-iptv-green-light opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500" />
        {isOpen ? (
          <X className="relative h-7 w-7 text-white drop-shadow-md transition-transform duration-500" />
        ) : (
          <MessageCircle className="relative h-7 w-7 text-white drop-shadow-md transition-transform duration-500 group-hover:scale-110" />
        )}
      </button>
    </div>
  )
}
