import type { MetadataRoute } from "next"
import startupData from "@/data/startups.json"
import type { Startup } from "@/lib/types"
import { getAllCollections } from "@/lib/collections"

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://startup-directory.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const startups = startupData as Startup[]
  const collections = getAllCollections()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/startups`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ]

  // Startup detail pages
  const startupPages: MetadataRoute.Sitemap = startups.map((startup) => ({
    url: `${baseUrl}/startups/${startup.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = collections.map((collection) => ({
    url: `${baseUrl}/startups/category/${collection.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...categoryPages, ...startupPages]
}
