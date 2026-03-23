import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.spideyharsh.me";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2026-03-23"),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${baseUrl}/opengraph-image.png`],
    },
  ];
}
