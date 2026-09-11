import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/blog";
import { getAllNews } from "@/lib/news";
import { BASE_URL } from "@/lib/seo";

// Each section is served at /sitemap/<section>.xml and listed by the index at /sitemap.xml
export const sitemapSections = ["pages", "blog", "news"] as const;

export type SitemapSection = (typeof sitemapSections)[number];

// Last real content change of each page, taken from git history. Update a date
// only when that page's visible content changes — not for design, metadata or
// code-only changes — so search engines can keep trusting these dates.
const pageLastModified = {
  home: "2026-08-17",
  about: "2026-06-14",
  contact: "2026-08-17",
  installationGuide: "2026-06-14",
  faq: "2026-05-30",
  privacyPolicy: "2026-06-04",
  termsOfService: "2026-06-04",
  refundPolicy: "2026-06-04",
  generalDisclaimer: "2026-06-04",
};

function toDate(day: string): Date {
  return new Date(`${day}T00:00:00Z`);
}

// Listing pages change whenever their newest post does.
function newestDate(days: string[]): Date | undefined {
  if (days.length === 0) return undefined;
  return toDate(days.reduce((latest, day) => (day > latest ? day : latest)));
}

export function isSitemapSection(value: string): value is SitemapSection {
  return (sitemapSections as readonly string[]).includes(value);
}

export function getSitemapEntries(section: SitemapSection): MetadataRoute.Sitemap {
  if (section === "blog") {
    const posts = getAllPosts();
    const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: toDate(post.updated),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    return [
      {
        url: `${BASE_URL}/blog`,
        lastModified: newestDate(posts.map((post) => post.updated)),
        changeFrequency: "weekly",
        priority: 0.8,
      },
      ...blogPosts,
    ];
  }

  if (section === "news") {
    const news = getAllNews();
    const newsPosts: MetadataRoute.Sitemap = news.map((item) => ({
      url: `${BASE_URL}/news/${item.slug}`,
      lastModified: toDate(item.updated),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    return [
      {
        url: `${BASE_URL}/news`,
        lastModified: newestDate(news.map((item) => item.updated)),
        changeFrequency: "daily",
        priority: 0.8,
      },
      ...newsPosts,
    ];
  }

  return [
    {
      url: `${BASE_URL}`,
      lastModified: toDate(pageLastModified.home),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: toDate(pageLastModified.about),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: toDate(pageLastModified.contact),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/installation-guide`,
      lastModified: toDate(pageLastModified.installationGuide),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: toDate(pageLastModified.faq),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: toDate(pageLastModified.privacyPolicy),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: toDate(pageLastModified.termsOfService),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/refund-policy`,
      lastModified: toDate(pageLastModified.refundPolicy),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/general-disclaimer`,
      lastModified: toDate(pageLastModified.generalDisclaimer),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}

// Same markup Next.js generates for a built-in app/sitemap.ts, which can't be
// used here because it would take over /sitemap.xml from the index.
export function toUrlsetXml(entries: MetadataRoute.Sitemap): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const entry of entries) {
    xml += "<url>\n";
    xml += `<loc>${entry.url}</loc>\n`;
    if (entry.lastModified) {
      const lastModified =
        entry.lastModified instanceof Date ? entry.lastModified.toISOString() : entry.lastModified;
      xml += `<lastmod>${lastModified}</lastmod>\n`;
    }
    if (entry.changeFrequency) {
      xml += `<changefreq>${entry.changeFrequency}</changefreq>\n`;
    }
    if (typeof entry.priority === "number") {
      xml += `<priority>${entry.priority}</priority>\n`;
    }
    xml += "</url>\n";
  }

  xml += "</urlset>\n";
  return xml;
}

export function toSitemapIndexXml(): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const section of sitemapSections) {
    xml += "<sitemap>\n";
    xml += `<loc>${BASE_URL}/sitemap/${section}.xml</loc>\n`;
    xml += "</sitemap>\n";
  }

  xml += "</sitemapindex>\n";
  return xml;
}
