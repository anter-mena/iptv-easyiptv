import { PageHero } from "@/components/ui/page-hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Easy IPTV Blog - Streaming News, Updates & Setup Tutorials",
  description: "Read the latest news, updates, and tutorials about our premium IPTV streaming service. Get tips on how to improve your cord-cutting experience.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Easy IPTV Blog - Streaming News, Updates & Setup Tutorials",
    description: "Read the latest news, updates, and tutorials about our premium IPTV streaming service. Get tips on how to improve your cord-cutting experience.",
    url: "/blog",
  },
}

export default function BlogPage() {
  return (
    <main className="flex-1 bg-white">
      <PageHero 
        subtitle="Latest News & Updates"
        title="Our Blog" 
        description="Tips, tutorials, and announcements from the Easy IPTV team." 
      />
      
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-6">
            <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900 mb-4">
            New Content Coming Soon
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            We are currently preparing some amazing articles, guides, and IPTV industry news. Check back soon for our first post!
          </p>
        </div>
      </section>
    </main>
  )
}
