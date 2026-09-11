import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";

import { formatDate, type ArticleSection, type PostMeta } from "@/lib/content";

/** Card grid for the blog and news listing pages, with an empty state. */
export function PostGrid({
  posts,
  section,
  empty,
}: {
  posts: PostMeta[];
  section: ArticleSection;
  empty: { title: ReactNode; text: string; link: { label: string; href: string } };
}) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="mx-auto flex max-w-md flex-col items-center text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Newspaper className="h-8 w-8 text-gray-400" strokeWidth={1.5} />
            </div>
            <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight text-gray-900">
              {empty.title}
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-500">{empty.text}</p>
            <Link
              href={empty.link.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 transition-all hover:decoration-iptv-green hover:text-iptv-green"
            >
              {empty.link.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`${section.path}/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm transition-all hover:border-iptv-green/40 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  {post.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-iptv-green/20 via-iptv-green/5 to-transparent" />
                  )}
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-iptv-green backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-2 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-iptv-green">
                    {post.title}
                  </h2>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 text-[0.72rem] uppercase tracking-wide text-gray-400">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readingTime} min read</span>
                    <ArrowUpRight className="ml-auto h-3.5 w-3.5 -translate-x-1 text-gray-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
