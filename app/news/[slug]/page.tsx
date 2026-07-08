import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import { ArrowUpRight } from "lucide-react";
import { CTA } from "@/components/home/home-cta";
import { Breadcrumbs } from "@/components/blog/breadcrumbs";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { buildMetadata, breadcrumbJsonLd, BASE_URL } from "@/lib/seo";
import { getAllNews, getNews } from "@/lib/news";
import { extractToc } from "@/lib/toc";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllNews().map((p) => ({ slug: p.slug }));
}

type Params = Promise<{ slug: string }>;

function formatDate(iso: string) {
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) return {};

  const base = buildMetadata({
    title: `${item.meta.title} | Easy IPTV`,
    description: item.meta.description,
    path: `/news/${slug}`,
    keywords: item.meta.keywords.length
      ? item.meta.keywords
      : [item.meta.title.toLowerCase(), "iptv news", "streaming industry"],
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: item.meta.date,
      modifiedTime: item.meta.updated,
      authors: [item.meta.author],
    },
  };
}

export default async function NewsArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  const { meta, content } = item;
  const toc = extractToc(content);
  const url = `${BASE_URL}/news/${slug}`;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: meta.title, path: `/news/${slug}` },
  ]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.updated,
    ...(meta.image ? { image: meta.image } : {}),
    author: { "@type": "Organization", name: meta.author },
    publisher: {
      "@type": "Organization",
      name: "Easy IPTV",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.svg` },
    },
    mainEntityOfPage: url,
    url,
  };

  const faqJsonLd =
    meta.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: meta.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const internal = meta.related.filter((l) => !l.href.startsWith("http"));
  const sources = meta.related.filter((l) => l.href.startsWith("http"));

  return (
    <main className="flex-1 bg-white">
      <Script id={`news-${slug}-breadcrumb`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumb)}
      </Script>
      <Script id={`news-${slug}-article`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(articleJsonLd)}
      </Script>
      {faqJsonLd && (
        <Script id={`news-${slug}-faq`} type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(faqJsonLd)}
        </Script>
      )}

      {/* Article header */}
      <section className="border-b border-gray-100 bg-gray-50 pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "News", href: "/news" },
              { label: meta.title },
            ]}
          />
          <span className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-iptv-green">
            {meta.category}
          </span>
          <h1 className="mb-5 text-3xl font-black uppercase leading-tight tracking-tight text-gray-900 md:text-4xl">
            {meta.title}
          </h1>
          <p className="mb-5 max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
            {meta.description}
          </p>
          <p className="text-xs text-gray-400">
            By the {meta.author} · Published {formatDate(meta.date)}
            {meta.updated !== meta.date ? ` · Updated ${formatDate(meta.updated)}` : ""} · {meta.readingTime} min read
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-start lg:gap-12 lg:px-8">
          <article className="mx-auto w-full min-w-0 max-w-[760px] lg:mx-0">
            <TableOfContents items={toc} variant="mobile" />
            <div className="blog-prose prose prose-lg max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSlug]}>
                {content}
              </ReactMarkdown>
            </div>

            {/* Related reading + sources */}
            {(internal.length > 0 || sources.length > 0) && (
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {internal.length > 0 && (
                  <div>
                    <h2 className="mb-4 text-base font-bold uppercase tracking-tight text-gray-900">
                      Related Reading
                    </h2>
                    <ul className="flex flex-col gap-2.5">
                      {internal.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-iptv-green underline-offset-2 hover:underline"
                          >
                            {link.label}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {sources.length > 0 && (
                  <div>
                    <h2 className="mb-4 text-base font-bold uppercase tracking-tight text-gray-900">
                      Sources
                    </h2>
                    <ul className="flex flex-col gap-2.5">
                      {sources.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-gray-500 underline decoration-gray-300 underline-offset-2 hover:text-iptv-green"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Back to hub */}
            <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6">
              <Link
                href="/news"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 transition-all hover:text-iptv-green hover:decoration-iptv-green"
              >
                <ArrowUpRight className="h-3.5 w-3.5 rotate-180" />
                All news
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 transition-all hover:text-iptv-green hover:decoration-iptv-green"
              >
                Read the blog
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>

          <aside className="hidden lg:block sticky top-28 self-start">
            <TableOfContents items={toc} variant="sidebar" />
          </aside>
        </div>
      </section>

      {/* FAQ */}
      {meta.faqs.length > 0 && (
        <section className="bg-white pb-20 lg:pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold uppercase tracking-tight text-gray-900 md:text-3xl">
              Frequently Asked <span className="text-iptv-green">Questions</span>
            </h2>
            <div className="flex flex-col">
              {meta.faqs.map((f) => (
                <div key={f.question} className="border-b border-gray-100 py-5 last:border-b-0">
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-tight text-gray-900">
                    {f.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </main>
  );
}
