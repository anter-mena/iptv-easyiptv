"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Clock, ArrowRight, ShieldCheck, Headphones } from "lucide-react"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
      setTimeout(() => {
        setStatus("idle")
        setEmail("")
      }, 2000)
    }, 1500)
  }

  return (
    <footer className="relative overflow-hidden bg-[#222222] bg-pattern">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:text-left">
          
          {/* Company Info & Branding */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-6 text-center md:text-left lg:pr-4">
              <Link href="/" className="inline-block">
                <Image 
                  src="/logo-footer.svg" 
                  alt="Easy IPTV" 
                  width={140} 
                  height={56} 
                  className="mb-4 h-12 w-auto md:h-14" 
                  style={{ width: 'auto' }}
                />
              </Link>
              <p className="text-sm leading-relaxed text-gray-400">
                Premium streaming experience with thousands of channels, movies, and shows. Your entertainment, everywhere.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mb-6 flex flex-col items-center space-y-4 lg:items-start">
              <div className="flex items-center space-x-3 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-iptv-green to-iptv-green-dark shadow-lg shadow-iptv-green/20 transition-transform group-hover:scale-110">
                  <ShieldCheck className="h-4 w-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white uppercase tracking-wider">Premium Security</div>
                  <div className="text-[10px] uppercase tracking-tight text-gray-400">99.9% Secure streaming</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-iptv-green to-iptv-green-dark shadow-lg shadow-iptv-green/20 transition-transform group-hover:scale-110">
                  <Headphones className="h-4 w-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white uppercase tracking-wider">Elite Support</div>
                  <div className="text-[10px] uppercase tracking-tight text-gray-400">24/7 Dedicated assistance</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-3 lg:justify-start">
              {[
                { 
                  platform: "facebook", 
                  href: "https://facebook.com",
                  icon: () => (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  ) 
                },
                { 
                  platform: "x", 
                  href: "https://x.com",
                  icon: () => (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 3.239H4.293L17.607 20.65z"/>
                    </svg>
                  )
                },
                { 
                  platform: "instagram", 
                  href: "https://instagram.com",
                  icon: () => (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )
                },
                { 
                  platform: "tiktok", 
                  href: "https://tiktok.com",
                  icon: () => (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14.99.12 2.07.72 2.87.64.83 1.65 1.35 2.69 1.34 1.11-.01 2.18-.54 2.88-1.4.54-.66.82-1.49.81-2.33-.02-4.32-.01-8.65-.02-12.98z" />
                    </svg>
                  )
                },
              ].map((item) => (
                <a
                  key={item.platform}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#333333] text-white transition-all duration-300 hover:bg-iptv-green"
                >
                  <span className="sr-only">{item.platform}</span>
                  <item.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="mb-6 text-center text-lg font-semibold text-white lg:text-left">
              Quick Links
            </h4>
            <ul className="space-y-4 text-center lg:text-left">
              {[
                { name: "Home", href: "/" },
                { name: "Pricing Plans", href: "/#pricing" },
                { name: "Free Trial", href: "/#pricing" },
                { name: "Blog", href: "/blog" },
                { name: "News", href: "/news" },
                { name: "About Us", href: "/about" },
                { name: "Contact Support", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group relative flex items-center justify-center lg:justify-start text-sm text-gray-400 transition-colors hover:text-iptv-green">
                    <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-iptv-green after:transition-all group-hover:after:w-full">
                      {link.name}
                    </span>
                    <ArrowRight className="ml-1 h-3 w-3 translate-x-[-4px] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Help */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="mb-6 text-center text-lg font-semibold text-white lg:text-left">
              Support & Help
            </h4>
            <ul className="space-y-4 text-center lg:text-left">
              {[
                { name: "Installation Guides", href: "/installation-guide" },
                { name: "FAQ", href: "/faq" },
                { name: "Refund Policy", href: "/refund-policy" },
                { name: "General Disclaimer", href: "/general-disclaimer" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group relative flex items-center justify-center lg:justify-start text-sm text-gray-400 transition-colors hover:text-iptv-green">
                    <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-iptv-green after:transition-all group-hover:after:w-full">
                      {link.name}
                    </span>
                    <ArrowRight className="ml-1 h-3 w-3 translate-x-[-4px] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="md:col-span-2 lg:col-span-1 lg:max-w-xs">
            <h4 className="mb-6 text-center text-lg font-semibold text-white lg:text-left">
              Stay Connected
            </h4>

            {/* Contact Info */}
            <div className="mb-6 flex flex-col items-center space-y-4 lg:items-start">
              <div className="flex flex-col items-center space-x-3 text-center sm:flex-row sm:text-left">
                <Mail className="mb-2 h-5 w-5 text-iptv-green sm:mb-0" />
                <div>
                  <div className="text-sm font-medium text-white">Email Support</div>
                  <div className="text-sm text-gray-400">support@easyiptv.com</div>
                </div>
              </div>

              <div className="flex flex-col items-center space-x-3 text-center sm:flex-row sm:text-left">
                <Clock className="mb-2 h-5 w-5 text-iptv-green sm:mb-0" />
                <div>
                  <div className="text-sm font-medium text-white">Support Hours</div>
                  <div className="text-sm text-gray-400">24/7 Live Chat</div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="rounded-md bg-[#333333] p-6 lg:p-4">
              <h5 className="mb-3 text-center font-semibold text-white lg:mb-2 lg:text-left">
                Get Updates
              </h5>
              <p className="mb-4 text-center text-sm text-gray-400 lg:mb-3 lg:text-left">
                Latest channels, features & exclusive offers
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row lg:hidden">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    aria-label="Email address for newsletter"
                    className="flex-1 rounded-md border border-gray-600 bg-[#444444] px-4 py-2 text-white placeholder-gray-400 transition-all focus:outline-none focus:ring-1 focus:ring-iptv-green/20"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    disabled={status === "loading"}
                    className="flex shrink-0 items-center justify-center rounded-md bg-iptv-green px-6 py-2 font-semibold text-white transition-colors hover:bg-iptv-green-dark ring-4 ring-iptv-green/20"
                  >
                    {status === "loading" ? "..." : status === "success" ? "✓" : "Subscribe"}
                    {status === "idle" && <ArrowRight className="ml-2 h-4 w-4" />}
                  </button>
                </div>

                <div className="hidden lg:flex lg:gap-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    aria-label="Email address for newsletter"
                    className="flex-1 rounded-md border border-gray-600 bg-[#444444] px-2 py-1 text-sm text-white placeholder-gray-400 transition-all focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    disabled={status === "loading"}
                    className="flex shrink-0 items-center justify-center rounded-md bg-iptv-green px-2 py-1 text-white transition-colors hover:bg-iptv-green-dark ring-4 ring-iptv-green/20"
                  >
                    {status === "loading" ? "..." : status === "success" ? "✓" : <ArrowRight className="h-4 w-4" />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#333333] pt-8">
          <div className="grid grid-cols-1 items-center lg:grid-cols-3">
            {/* Payment Methods */}
            <div className="flex justify-center lg:justify-start">
              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                {["visa", "mastercard", "paypal", "applePay", "googlePay"].map((method) => (
                  <Image
                    key={method}
                    src={`/assets/payment/${method}.svg`}
                    alt={method}
                    width={method === "visa" ? 64 : 48}
                    height={32}
                    className={cn(
                      "w-auto brightness-0 invert transition-all",
                      method === "paypal" ? "h-3" : method === "mastercard" ? "h-4" : "h-8"
                    )}
                    style={{ width: 'auto' }}
                  />
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 py-4 lg:py-0">
              <Link href="/privacy-policy" className="text-sm text-gray-400 transition-colors hover:text-iptv-green">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-400 transition-colors hover:text-iptv-green">
                Terms of Service
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Easy IPTV. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
