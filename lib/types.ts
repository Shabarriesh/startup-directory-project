export interface Startup {
  id: string
  slug: string
  name: string
  tagline: string
  logo: string
  description: string
  sector: string
  categories: string[]
  fundingAmount: number
  fundingCurrency: string
  fundingRound: string
  foundedYear: number
  employees: number
  hq: string
  website: string
  linkedIn?: string
  twitter?: string
  crunchbaseUrl?: string
  founders: Founder[]
  stats: {
    funding: string
    employees: string
    founded: string
  }
}

export interface Founder {
  name: string
  role: string
  image?: string
}

export interface FilterOptions {
  sector?: string
  fundingMin?: number
  fundingMax?: number
  foundedYear?: number
  search?: string
  sort?: "funding-desc" | "funding-asc" | "name" | "founded-desc" | "founded-asc"
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon?: string
  filterQuery: FilterOptions
}
