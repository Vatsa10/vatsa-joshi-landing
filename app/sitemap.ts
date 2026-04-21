import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vatsajoshi.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ["", "#about", "#now", "#experience", "#projects", "#stack", "#awards", "#contact"];

  return sections.map((frag) => ({
    url: `${SITE_URL}/${frag}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: frag === "" ? 1.0 : 0.7,
  }));
}
