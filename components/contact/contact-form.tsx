"use client"

/* Contact form.

   Submission logic is UNIFIED across the network: same lib/contact.ts helper,
   same fields (name, email, optional phone, subject, message, honeypot).
   Only the look is site-specific. Site-specific email config lives in
   app/api/contact/route.ts.                                               */

import * as React from "react"
import { cn } from "@/lib/utils"
import { submitContactForm } from "@/lib/contact"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle")
  const [error, setError] = React.useState("")
  // Controlled so the form reset after a send also clears the topic.
  const [subject, setSubject] = React.useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status !== "idle") return
    const form = e.currentTarget

    setStatus("sending")
    setError("")

    const result = await submitContactForm(form)
    if (!result.ok) {
      setError(result.error)
      setStatus("idle")
      return
    }

    form.reset()
    setSubject("")
    setStatus("sent")
    setTimeout(() => setStatus("idle"), 4000)
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-10 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green mb-3">Direct Support</p>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl uppercase">
          Send Us a <span className="text-iptv-green">Message</span>
        </h2>
        <p className="mt-4 mx-auto max-w-xl text-sm leading-relaxed text-gray-500">
          Fill out the form below and we'll get back to you as soon as possible. 
          Please provide as much detail as possible to help us assist you better.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="firstName" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">First Name</label>
            <input
              id="firstName"
              name="firstName"
              autoComplete="given-name"
              type="text"
              required
              className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm transition-all focus:border-iptv-green focus:bg-white focus:outline-none focus:ring-4 focus:ring-iptv-green/10"
              placeholder="Your first name"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="lastName" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              autoComplete="family-name"
              type="text"
              required
              className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm transition-all focus:border-iptv-green focus:bg-white focus:outline-none focus:ring-4 focus:ring-iptv-green/10"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
          <input
            id="email"
            name="email"
            autoComplete="email"
            type="email"
            required
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm transition-all focus:border-iptv-green focus:bg-white focus:outline-none focus:ring-4 focus:ring-iptv-green/10"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Phone <span className="font-medium normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            autoComplete="tel"
            type="tel"
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm transition-all focus:border-iptv-green focus:bg-white focus:outline-none focus:ring-4 focus:ring-iptv-green/10"
            placeholder="(555) 000-0000"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject</label>
          {/* name + required: Radix adds a hidden native select, so the topic travels with the form. */}
          <Select name="subject" required value={subject} onValueChange={setSubject}>
            <SelectTrigger className="w-full h-auto rounded-md border-gray-300 bg-gray-50 px-4 py-2.5 text-sm transition-all focus:border-iptv-green focus:bg-white focus:ring-4 focus:ring-iptv-green/10">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent className="rounded-md border-gray-200 bg-white">
              <SelectItem value="Technical Support" className="text-sm focus:bg-iptv-green focus:text-white">Technical Support</SelectItem>
              <SelectItem value="Billing Question" className="text-sm focus:bg-iptv-green focus:text-white">Billing Question</SelectItem>
              <SelectItem value="Installation Help" className="text-sm focus:bg-iptv-green focus:text-white">Installation Help</SelectItem>
              <SelectItem value="General Inquiry" className="text-sm focus:bg-iptv-green focus:text-white">General Inquiry</SelectItem>
              <SelectItem value="Feedback" className="text-sm focus:bg-iptv-green focus:text-white">Feedback</SelectItem>
              <SelectItem value="Other" className="text-sm focus:bg-iptv-green focus:text-white">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full resize-none rounded-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm transition-all focus:border-iptv-green focus:bg-white focus:outline-none focus:ring-4 focus:ring-iptv-green/10"
            placeholder="Please describe your question or issue in detail..."
          ></textarea>
        </div>

        {/* Honeypot: hidden from people, often auto-filled by bots. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="pointer-events-none absolute -left-[9999px] h-px w-px opacity-0"
        />

        {error ? (
          <p role="alert" className="text-sm leading-relaxed text-red-600">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status !== "idle"}
          className={cn(
            "w-full rounded-md bg-iptv-green py-3.5 text-sm font-black uppercase tracking-widest text-white transition-all ring-4 ring-iptv-green/20 disabled:opacity-70",
            status === "idle" ? "hover:bg-iptv-green-dark" : ""
          )}
        >
          {status === "idle" ? "Send Message" : status === "sending" ? "Sending..." : "Message Sent! ✓"}
        </button>
      </form>
    </div>
  )
}
