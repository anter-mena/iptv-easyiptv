"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, ChevronDown, ChevronRight, Tv, Router, Smartphone, Monitor, LayoutGrid, HardDrive, Zap, Info, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const installationLinks = [
  { title: "Amazon Firestick", href: "/installation-guide#fire-tv", icon: Zap },
  { title: "IPTV Smarters Pro", href: "/installation-guide#windows", icon: Monitor },
  { title: "Apple Devices", href: "/installation-guide#apple", icon: Smartphone },
  { title: "Android Devices", href: "/installation-guide#android-phone", icon: Smartphone },
  { title: "Smart TV/Not Android", href: "/installation-guide#smart-tv", icon: Tv },
  { title: "Buzz TV Box", href: "/installation-guide#buzztv", icon: Router },
  { title: "Formuler Z/Dreamlink", href: "/installation-guide#formuler", icon: HardDrive },
  { title: "Roku Device", href: "/installation-guide#roku", icon: LayoutGrid },
]

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [mobileAccordions, setMobileAccordions] = React.useState<Record<string, boolean>>({})
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = React.useState("")
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash)
    window.addEventListener("hashchange", handleHashChange)
    // Initial hash
    setCurrentHash(window.location.hash)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const isActive = (href: string) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#")
      const normalizedPath = path === "" ? "/" : path
      return pathname === normalizedPath && currentHash === `#${hash}`
    }
    return pathname === href
  }

  const handleDropdownEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(dropdown)
  }

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 200)
  }

  const toggleMobileAccordion = (section: string) => {
    setMobileAccordions(prev => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [section]: !prev[section]
    }))
  }

  // Close menus on path change
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
    setMobileAccordions({})
  }, [pathname])

  // Reset accordions when mobile menu opens/closes and handle scroll lock
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setMobileAccordions({})
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header className={cn(
      "sticky top-0 z-[9999] w-full border-gray-200 transition-all",
      isMobileMenuOpen ? "bg-white border-none shadow-none" : "bg-white/95 backdrop-blur border-b shadow-md"
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between md:h-16">
          
          <div className="flex w-32 shrink-0 items-center gap-2 md:w-40">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.svg" 
                alt="Easy IPTV" 
                width={120} 
                height={40} 
                className="h-8 w-auto md:h-10" 
                style={{ width: 'auto' }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center gap-6">
              <Link
                href="/#pricing"
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  isActive("/#pricing") ? "text-iptv-green after:scale-x-100" : "text-gray-500 hover:text-gray-900 after:scale-x-0 hover:after:scale-x-100",
                  "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-iptv-green after:transition-transform after:duration-300"
                )}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  isActive("/blog") ? "text-iptv-green after:scale-x-100" : "text-gray-500 hover:text-gray-900 after:scale-x-0 hover:after:scale-x-100",
                  "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-iptv-green after:transition-transform after:duration-300"
                )}
              >
                Blog
              </Link>

              {/* Installation Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleDropdownEnter('installation')}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeDropdown === 'installation'}
                  aria-haspopup="true"
                  className={cn(
                    "flex items-center gap-1 py-2 pl-5 text-sm font-medium transition-colors focus:outline-none",
                    isActive("/installation-guide") || activeDropdown === 'installation' ? "text-iptv-green after:scale-x-100" : "text-gray-500 hover:text-gray-900 after:scale-x-0 hover:after:scale-x-100",
                    "after:absolute after:bottom-0 after:left-5 after:right-4 after:h-0.5 after:bg-iptv-green after:transition-transform after:duration-300"
                  )}
                >
                  Installation Guide <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", activeDropdown === 'installation' && "rotate-180")} aria-hidden="true" />
                </button>

                <div
                  className={cn(
                    "absolute top-full left-1/2 mt-2 w-80 -translate-x-1/2 rounded-lg border border-gray-200 bg-white shadow-xl transition-all duration-300 ease-out",
                    activeDropdown === 'installation' ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                  )}
                >
                  <div className="p-4 grid grid-cols-1 gap-1">
                    {installationLinks.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-3 rounded-md p-3 transition-all duration-200 hover:bg-gray-50 group"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-iptv-green/10 transition-all group-hover:bg-iptv-green/20">
                          <item.icon className="h-4 w-4 text-iptv-green" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.title}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  isActive("/about") ? "text-iptv-green after:scale-x-100" : "text-gray-500 hover:text-gray-900 after:scale-x-0 hover:after:scale-x-100",
                  "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-iptv-green after:transition-transform after:duration-300"
                )}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  isActive("/contact") ? "text-iptv-green after:scale-x-100" : "text-gray-500 hover:text-gray-900 after:scale-x-0 hover:after:scale-x-100",
                  "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-iptv-green after:transition-transform after:duration-300"
                )}
              >
                Contact
              </Link>
            </div>
          </nav>

          <div className="flex w-32 items-center justify-end gap-4 md:w-40">
            <Link
              href="https://wa.me/16728962606?text=Hello!%20I%20am%20interested%20in%20starting%20a%20*Free%20Trial*%20for%20*Easy%20IPTV*."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md bg-iptv-green px-4 py-2 text-sm font-medium text-white ring-2 ring-iptv-green/20 transition-all hover:bg-iptv-green-dark hover:scale-105 active:scale-95 lg:inline-flex"
            >
              Start Free Trial
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-900"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-x-0 bottom-0 top-14 z-[9998] bg-black/50 backdrop-blur-sm lg:hidden md:top-16" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Container */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 z-[9999] -mt-px overflow-hidden border-b border-gray-200 bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen ? "max-h-[90vh] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="max-h-[90vh] overflow-y-auto overscroll-contain p-4">
          <div className="space-y-1">
            <Link
              href="/#pricing"
              className={cn(
                "block rounded-md px-2 py-3 text-sm font-semibold border-b border-gray-100 transition-colors hover:bg-gray-50",
                isActive("/#pricing") ? "text-iptv-green" : "text-gray-900"
              )}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className={cn(
                "block rounded-md px-2 py-3 text-sm font-semibold border-b border-gray-100 transition-colors hover:bg-gray-50",
                pathname.startsWith("/blog") ? "text-iptv-green" : "text-gray-900"
              )}
            >
              Blog
            </Link>

            {/* Mobile Installation Accordion */}
            <div className="rounded-md py-1 border-b border-gray-100">
              <button
                onClick={() => toggleMobileAccordion('installation')}
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-2 py-3 text-sm font-semibold transition-colors hover:bg-gray-50",
                  pathname.startsWith("/installation-guide") ? "text-iptv-green" : "text-gray-900"
                )}
              >
                <span>Installation Guide</span>
                <ChevronRight className={cn("h-4 w-4 transition-transform duration-300", mobileAccordions.installation && "rotate-90")} />
              </button>

              <div className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                mobileAccordions.installation ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="pl-4 mt-2 space-y-1">
                  {installationLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-md px-2 py-2.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-iptv-green"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-iptv-green/10">
                        <item.icon className="h-4 w-4 text-iptv-green" />
                      </div>
                      <span>{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className={cn(
                "block rounded-md px-2 py-3 text-sm font-semibold transition-colors hover:bg-gray-50",
                isActive("/about") ? "text-iptv-green" : "text-gray-900"
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "block rounded-md px-2 py-3 text-sm font-semibold border-t border-gray-100 transition-colors hover:bg-gray-50",
                isActive("/contact") ? "text-iptv-green" : "text-gray-900"
              )}
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-gray-100">
              <Link
                href="https://wa.me/16728962606?text=Hello!%20I%20am%20interested%20in%20starting%20a%20*Free%20Trial*%20for%20*Easy%20IPTV*."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-md bg-iptv-green px-6 py-3 text-center text-sm font-medium text-white ring-2 ring-iptv-green/20 transition-all hover:bg-iptv-green-dark hover:scale-[1.02] active:scale-95"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
