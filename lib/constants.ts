import type { Category } from "./types"

export const SECTORS = [
  "Artificial Intelligence",
  "FinTech",
  "HealthTech",
  "E-commerce",
  "SaaS",
  "Cybersecurity",
  "CleanTech",
  "EdTech",
  "Logistics",
  "Travel & Hospitality",
  "Social Media",
  "Developer Tools",
  "Blockchain",
  "Biotechnology",
  "Consumer Electronics",
]

export const FEATURED_CATEGORIES: Category[] = [
  {
    id: "ai-leaders",
    name: "AI Leaders",
    slug: "ai-leaders",
    description: "Most funded AI and machine learning startups",
    icon: "🤖",
    filterQuery: { sector: "Artificial Intelligence", sort: "funding-desc" },
  },
  {
    id: "fastest-growing",
    name: "Fastest Growing",
    slug: "fastest-growing",
    description: "Recently founded startups making waves",
    icon: "📈",
    filterQuery: { sort: "founded-desc", fundingMin: 1000000 },
  },
  {
    id: "mega-funded",
    name: "Mega Funded",
    slug: "mega-funded",
    description: "Startups with $100M+ funding",
    icon: "💰",
    filterQuery: { fundingMin: 100000000, sort: "funding-desc" },
  },
  {
    id: "fintech-boom",
    name: "FinTech Boom",
    slug: "fintech-boom",
    description: "Revolutionary financial technology companies",
    icon: "💳",
    filterQuery: { sector: "FinTech", sort: "funding-desc" },
  },
  {
    id: "healthtech-innovators",
    name: "HealthTech Innovators",
    slug: "healthtech-innovators",
    description: "Transforming healthcare with technology",
    icon: "🏥",
    filterQuery: { sector: "HealthTech", sort: "funding-desc" },
  },
]

export const SORT_OPTIONS = [
  { label: "Funding (Highest)", value: "funding-desc" },
  { label: "Funding (Lowest)", value: "funding-asc" },
  { label: "Name (A-Z)", value: "name" },
  { label: "Recently Founded", value: "founded-desc" },
  { label: "Oldest First", value: "founded-asc" },
]

export const ITEMS_PER_PAGE = 12
