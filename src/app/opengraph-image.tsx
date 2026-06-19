import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site.config";

export const alt = siteConfig.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { accent, accentSecondary, background } = siteConfig.theme;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background,
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: `radial-gradient(circle, ${accent}, transparent 70%)`,
            opacity: 0.6,
          }}
        />
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: accentSecondary,
          }}
        >
          {siteConfig.brand.logo}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            {siteConfig.brand.name}
          </div>
          <div style={{ fontSize: 32, color: "#9aa0b5", maxWidth: 800 }}>
            {siteConfig.brand.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
