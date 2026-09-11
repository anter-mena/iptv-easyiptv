import type { Metadata } from "next";

import { PostGrid } from "@/components/blog/post-grid";
import { CTA } from "@/components/home/home-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { getAllNews, NEWS_DESCRIPTION, NEWS_SECTION } from "@/lib/news";
import { BASE_URL, breadcrumbJsonLd, buildMetadata, itemListJsonLd } from "@/lib/seo";

const base = buildMetadata({
  title: NEWS_SECTION.label,
  description: NEWS_DESCRIPTION,
  path: NEWS_SECTION.path,
  keywords: ["iptv news", "streaming industry news", "cord cutting news", "easy iptv news"],
});

export const metadata: Metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    types: { "application/rss+xml": `${BASE_URL}${NEWS_SECTION.path}/feed.xml` },
  },
};

export default function NewsPage() {
  const news = getAllNews();

  return (
    <main className="flex-1 bg-white">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: NEWS_SECTION.label, path: NEWS_SECTION.path },
          ]),
          ...(news.length > 0 ? [itemListJsonLd(NEWS_SECTION, news)] : []),
        ]}
      />

      <PageHero
        subtitle="Streaming Industry"
        title="IPTV News"
        description="New sports rights, platform launches, and cord-cutting trends — reported in plain English."
      />

      <PostGrid
        posts={news}
        section={NEWS_SECTION}
        empty={{
          title: (
            <>
              News <span className="text-iptv-green">Coming Soon</span>
            </>
          ),
          text: "We are tracking the streaming and IPTV industry — new sports rights, platform launches, and cord-cutting trends. Check back soon for the latest updates.",
          link: { label: "In the meantime, read the blog", href: "/blog" },
        }}
      />

      <CTA />
    </main>
  );
}
