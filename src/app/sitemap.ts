import type { MetadataRoute } from "next";

// Set NEXT_PUBLIC_SITE_URL to the production domain after deploy.
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nodix-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
