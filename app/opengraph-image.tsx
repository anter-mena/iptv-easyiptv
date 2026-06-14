import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0f0a",
          position: "relative",
        }}
      >
        {/* Green glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(127,164,9,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Green glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(127,164,9,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(127,164,9,0.15)",
            border: "1px solid rgba(127,164,9,0.4)",
            borderRadius: 999,
            padding: "8px 24px",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#7fa409", fontSize: 14, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Premium IPTV Streaming
          </span>
        </div>

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#7fa409",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontSize: 32, fontWeight: 900 }}>E</span>
          </div>
          <span style={{ color: "white", fontSize: 72, fontWeight: 900, letterSpacing: "-0.03em" }}>
            Easy <span style={{ color: "#7fa409" }}>IPTV</span>
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            margin: 0,
            marginBottom: 48,
          }}
        >
          4K Channels · Movies · Live TV
        </p>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 40 }}>
          {[
            { value: "15,000+", label: "Channels" },
            { value: "4K", label: "Quality" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span style={{ color: "#7fa409", fontSize: 28, fontWeight: 900 }}>{stat.value}</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 48,
            color: "rgba(255,255,255,0.25)",
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
        >
          easyiptv.ca
        </div>
      </div>
    ),
    { ...size }
  )
}
