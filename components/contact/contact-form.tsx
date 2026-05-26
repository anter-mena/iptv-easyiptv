"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    // Simulate API call
    setTimeout(() => {
      setStatus("sent")
      setTimeout(() => setStatus("idle"), 3000)
    }, 2000)
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-10 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-3">Direct Support</p>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl uppercase">
          Send Us a <span className="text-iptv-green">Message</span>
        </h2>
        <p className="mt-4 mx-auto max-w-xl text-xs leading-relaxed text-gray-500">
          Fill out the form below and we'll get back to you as soon as possible. 
          Please provide as much detail as possible to help us assist you better.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">First Name</label>
            <input
              type="text"
              required
              className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-xs transition-all focus:border-iptv-green focus:bg-white focus:outline-none focus:ring-4 focus:ring-iptv-green/10"
              placeholder="Your first name"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Last Name</label>
            <input
              type="text"
              required
              className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-xs transition-all focus:border-iptv-green focus:bg-white focus:outline-none focus:ring-4 focus:ring-iptv-green/10"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
          <input
            type="email"
            required
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-xs transition-all focus:border-iptv-green focus:bg-white focus:outline-none focus:ring-4 focus:ring-iptv-green/10"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject</label>
          <Select>
            <SelectTrigger className="w-full h-auto rounded-md border-gray-300 bg-gray-50 px-4 py-2.5 text-xs transition-all focus:border-iptv-green focus:bg-white focus:ring-4 focus:ring-iptv-green/10">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent className="rounded-md border-gray-200 bg-white">
              <SelectItem value="technical" className="text-xs focus:bg-iptv-green focus:text-white">Technical Support</SelectItem>
              <SelectItem value="billing" className="text-xs focus:bg-iptv-green focus:text-white">Billing Question</SelectItem>
              <SelectItem value="installation" className="text-xs focus:bg-iptv-green focus:text-white">Installation Help</SelectItem>
              <SelectItem value="general" className="text-xs focus:bg-iptv-green focus:text-white">General Inquiry</SelectItem>
              <SelectItem value="feedback" className="text-xs focus:bg-iptv-green focus:text-white">Feedback</SelectItem>
              <SelectItem value="other" className="text-xs focus:bg-iptv-green focus:text-white">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
          <textarea
            rows={5}
            required
            className="w-full resize-none rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-xs transition-all focus:border-iptv-green focus:bg-white focus:outline-none focus:ring-4 focus:ring-iptv-green/10"
            placeholder="Please describe your question or issue in detail..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status !== "idle"}
          className={cn(
            "w-full rounded-md bg-iptv-green py-3.5 text-xs font-black uppercase tracking-widest text-white transition-all ring-4 ring-iptv-green/20 disabled:opacity-70",
            status === "idle" ? "hover:bg-iptv-green-dark" : ""
          )}
        >
          {status === "idle" ? "Send Message" : status === "sending" ? "Sending..." : "Message Sent! ✓"}
        </button>
      </form>
    </div>
  )
}
