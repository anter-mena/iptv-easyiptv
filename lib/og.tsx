import { ImageResponse } from "next/og";

import { BASE_URL } from "@/lib/seo";

/** Social share card for blog posts and news items, in the Easy IPTV palette. */
export function articleOgImage({
  title,
  eyebrow,
  path,
  size,
}: {
  title: string;
  eyebrow: string;
  path: string;
  size: { width: number; height: number };
}) {
  const footer = `${new URL(BASE_URL).host}${path}`;

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
        {/* top accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 10, background: "#7fa409" }} />
        {/* green glow */}
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

        {/* brand */}
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

        {/* title block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: 5, color: "#9bb50b" }}>
            {eyebrow.toUpperCase()}
          </span>
          <span style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.08, maxWidth: 1000, letterSpacing: -1.5 }}>
            {title}
          </span>
        </div>

        <span style={{ fontSize: 24, color: "rgba(255,255,255,0.5)" }}>{footer}</span>
      </div>
    ),
    { ...size },
  );
}
