import type { Metadata } from "next";

import { PostGrid } from "@/components/blog/post-grid";
import { CTA } from "@/components/home/home-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { BLOG_DESCRIPTION, BLOG_SECTION, getAllPosts } from "@/lib/blog";
import { BASE_URL, breadcrumbJsonLd, buildMetadata, itemListJsonLd } from "@/lib/seo";

const base = buildMetadata({
  title: BLOG_SECTION.label,
  description: BLOG_DESCRIPTION,
  path: BLOG_SECTION.path,
  keywords: ["iptv blog", "streaming tips", "cord cutting guide", "easy iptv blog"],
});

export const metadata: Metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    types: { "application/rss+xml": `${BASE_URL}${BLOG_SECTION.path}/feed.xml` },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="flex-1 bg-white">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: BLOG_SECTION.label, path: BLOG_SECTION.path },
          ]),
          ...(posts.length > 0 ? [itemListJsonLd(BLOG_SECTION, posts)] : []),
        ]}
      />

      <PageHero
        subtitle="Latest News & Updates"
        title="Our Blog"
        description="Streaming guides, device setup walkthroughs, and cord-cutting tips from the Easy IPTV team."
      />

      <PostGrid
        posts={posts}
        section={BLOG_SECTION}
        empty={{
          title: (
            <>
              New Content <span className="text-iptv-green">Coming Soon</span>
            </>
          ),
          text: "We are currently preparing streaming guides, setup tutorials, and IPTV industry news. Check back soon for our first post.",
          link: { label: "In the meantime, explore our installation guides", href: "/installation-guide" },
        }}
      />

      <CTA />
    </main>
  );
}
