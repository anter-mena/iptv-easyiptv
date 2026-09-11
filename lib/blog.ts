import { createPostCollection, type ArticleSection } from "@/lib/content";

export type { PostMeta as BlogMeta } from "@/lib/content";

export const BLOG_DESCRIPTION =
  "Streaming guides, device setup walkthroughs, and cord-cutting tips from the Easy IPTV team — everything you need to get more out of your subscription.";

export const BLOG_SECTION: ArticleSection = {
  label: "Blog",
  path: "/blog",
  schemaType: "BlogPosting",
  dateLine: "updated",
  backLabel: "All blog posts",
  next: { label: "Device installation guides", href: "/installation-guide" },
};

const blog = createPostCollection({
  folder: "blog",
  defaultAuthor: "Easy IPTV Editorial Team",
  defaultCategory: "Article",
});

/** Published blog posts, newest first. */
export const getAllPosts = blog.getAll;
export const getPost = blog.get;
