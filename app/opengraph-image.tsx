import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Vatsa Joshi — Building agentic systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const ink = "#0a0a0a";
  const paper = "#f6f4ef";
  const muted = "#6b6b66";
  const accent = "#ff3d00";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: paper,
          color: ink,
          display: "flex",
          flexDirection: "column",
          padding: "56px 64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: muted,
            borderBottom: `1px solid ${ink}`,
            paddingBottom: 16,
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 42,
                height: 42,
                border: `2px solid ${ink}`,
                color: ink,
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              VJ
            </span>
            <span style={{ color: ink }}>Vatsa Joshi</span>
          </span>
          <span>№ 001 — Portfolio / 2026</span>
        </div>

        <div
          style={{
            marginTop: 44,
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 140,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: -5,
              textTransform: "uppercase",
              color: ink,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Building agents<span style={{ color: accent }}>.</span>
          </div>
          <div
            style={{
              marginTop: 36,
              fontSize: 30,
              lineHeight: 1.3,
              color: ink,
              maxWidth: 1000,
              display: "flex",
            }}
          >
            Full-stack AI engineer — agentic systems, RAG, LLM fine-tuning. Currently shipping legal AI at Promact on BharatLaw.ai.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: muted,
            borderTop: `1px solid ${ink}`,
            paddingTop: 16,
          }}
        >
          <span>vatsajoshi.in</span>
          <span>Vadodara · IN</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
