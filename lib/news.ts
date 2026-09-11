import { createPostCollection, type ArticleSection } from "@/lib/content";

export type { PostMeta as NewsMeta } from "@/lib/content";

export const NEWS_DESCRIPTION =
  "Streaming and IPTV industry news — new sports rights, platform launches, piracy enforcement, and cord-cutting trends, explained in plain English.";

export const NEWS_SECTION: ArticleSection = {
  label: "News",
  path: "/news",
  schemaType: "NewsArticle",
  dateLine: "published",
  backLabel: "All news",
  next: { label: "Read the blog", href: "/blog" },
};

const news = createPostCollection({
  folder: "news",
  defaultAuthor: "Easy IPTV Newsroom",
  defaultCategory: "News",
});

/** Published news items, newest first. */
export const getAllNews = news.getAll;
export const getNews = news.get;
