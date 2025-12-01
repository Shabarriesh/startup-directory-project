import type { Category } from "./types"

export const COLLECTIONS: Record<string, Category> = {
  "ai-leaders": {
    id: "ai-leaders",
    name: "AI Leaders",
    slug: "ai-leaders",
    description:
      "The most funded and innovative artificial intelligence and machine learning startups transforming industries with cutting-edge AI technology.",
    icon: "🤖",
    filterQuery: {
      sector: "Artificial Intelligence",
      sort: "funding-desc",
    },
  },
  "fastest-growing": {
    id: "fastest-growing",
    name: "Fastest Growing",
    slug: "fastest-growing",
    description:
      "Recently founded startups that are making waves with significant funding and rapid growth trajectories.",
    icon: "📈",
    filterQuery: {
      sort: "founded-desc",
      fundingMin: 1000000,
    },
  },
  "mega-funded": {
    id: "mega-funded",
    name: "Mega Funded",
    slug: "mega-funded",
    description: "Unicorns and above: startups that have raised over $100M and are reshaping their industries.",
    icon: "💰",
    filterQuery: {
      fundingMin: 100000000,
      sort: "funding-desc",
    },
  },
  "fintech-boom": {
    id: "fintech-boom",
    name: "FinTech Boom",
    slug: "fintech-boom",
    description:
      "Revolutionary financial technology companies disrupting banking, payments, and investment management.",
    icon: "💳",
    filterQuery: {
      sector: "FinTech",
      sort: "funding-desc",
    },
  },
  "healthtech-innovators": {
    id: "healthtech-innovators",
    name: "HealthTech Innovators",
    slug: "healthtech-innovators",
    description:
      "Transforming healthcare with cutting-edge technology solutions for medical care, diagnostics, and wellness.",
    icon: "🏥",
    filterQuery: {
      sector: "HealthTech",
      sort: "funding-desc",
    },
  },
  "saas-solutions": {
    id: "saas-solutions",
    name: "SaaS Solutions",
    slug: "saas-solutions",
    description:
      "Software-as-a-service platforms empowering businesses with cloud-based productivity and collaboration tools.",
    icon: "💻",
    filterQuery: {
      sector: "SaaS",
      sort: "funding-desc",
    },
  },
}

export function getCollectionBySlug(slug: string): Category | undefined {
  return COLLECTIONS[slug]
}

export function getAllCollections(): Category[] {
  return Object.values(COLLECTIONS)
}
