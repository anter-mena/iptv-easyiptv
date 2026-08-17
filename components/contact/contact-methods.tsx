import { MessageSquare, Mail, Phone, LifeBuoy } from "lucide-react"
import Link from "next/link"

const methods = [
  {
    title: "Live Chat",
    description: "Get instant help from our support agents. Available 24/7 for immediate assistance.",
    icon: MessageSquare,
    action: "Start Chat",
    href: "#",
  },
  {
    title: "Email Support",
    description: "Send us an email and we'll respond within 2 hours. Perfect for detailed questions.",
    icon: Mail,
    action: "Send Email",
    href: "mailto:support@easyiptv.com",
  },
  {
    title: "Phone Support",
    description: "Speak directly with our technical experts for complex troubleshooting.",
    icon: Phone,
    action: "Call Now",
    href: "tel:+212787736166",
  },
  {
    title: "Support Ticket",
    description: "Create a detailed support ticket for account-specific issues and tracking.",
    icon: LifeBuoy,
    action: "Create Ticket",
    href: "#",
  },
]

export function ContactMethods() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
            HOW CAN WE <span className="text-iptv-green">HELP YOU</span>?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Choose the best way to reach us. Our dedicated support team is ready to assist you 
            with any questions or technical issues.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {methods.map((method) => (
            <div
              key={method.title}
              className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-iptv-green/10 transition-colors group-hover:bg-iptv-green group-hover:text-white">
                <method.icon className="h-8 w-8 text-iptv-green transition-colors group-hover:text-white" />
              </div>
              <div className="text-center">
                <h3 className="mb-4 text-lg font-bold uppercase tracking-tight text-gray-900">{method.title}</h3>
                <p className="mb-6 text-sm font-medium leading-relaxed text-gray-500">{method.description}</p>
                <Link
                  href={method.href}
                  className="inline-block rounded-md bg-iptv-green px-8 py-2.5 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:scale-105 hover:bg-iptv-green-dark ring-4 ring-iptv-green/20"
                >
                  {method.action}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
