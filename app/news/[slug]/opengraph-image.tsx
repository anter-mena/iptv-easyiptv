import { ImageResponse } from "next/og";
import { getAllNews, getNews } from "@/lib/news";

export const alt = "Easy IPTV news article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllNews().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNews(slug);
  const title = item?.meta.title ?? "Easy IPTV News";
  const category = (item?.meta.category ?? "News").toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0f0a",
          padding: "72px 80px",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 10, background: "#7fa409" }} />
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(127,164,9,0.22) 0%, transparent 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 12,
              background: "#7fa409",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontSize: 26, fontWeight: 900 }}>E</span>
          </div>
          <span style={{ fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>
            Easy <span style={{ color: "#7fa409" }}>IPTV</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: 5, color: "#9bb50b" }}>
            {category}
          </span>
          <span style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.08, maxWidth: 1000, letterSpacing: -1.5 }}>
            {title}
          </span>
        </div>

        <span style={{ fontSize: 24, color: "rgba(255,255,255,0.5)" }}>easyiptv.ca/news</span>
      </div>
    ),
    { ...size },
  );
}
