import { type NextRequest, NextResponse } from "next/server"
import startupData from "@/data/startups.json"
import type { Startup } from "@/lib/types"

// Force dynamic API behavior so each request with different query params returns fresh results
export const dynamic = "force-dynamic"
// during development keep revalidate = 0; set a positive value in production if you want ISR
export const revalidate = 0

/**
 * GET /api/startups
 * Query params:
 * - search: text search (name, tagline, description, sector)
 * - sector: filter by sector (case-insensitive substring)
 * - sort: funding-desc | funding-asc | name | founded-desc | founded-asc
 * - page: 1-based page number
 * - limit: items per page
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    const search = searchParams.get("search")?.toLowerCase() || ""
    const sector = searchParams.get("sector") || ""
    const sort = searchParams.get("sort") || "funding-desc"
    const page = Number.parseInt(searchParams.get("page") || "1", 10)
    const limit = Math.min(Number.parseInt(searchParams.get("limit") || "12", 10), 100)

    let filtered = [...(startupData as Startup[])]

    // Search filter (case-insensitive)
    if (search) {
      const q = search.toLowerCase()
      filtered = filtered.filter((s) => {
        return (
          (s.name || "").toLowerCase().includes(q) ||
          (s.tagline || "").toLowerCase().includes(q) ||
          (s.description || "").toLowerCase().includes(q) ||
          (s.sector || "").toLowerCase().includes(q)
        )
      })
    }

    // Sector filter: case-insensitive substring match
    if (sector && sector !== "all" && sector !== "") {
      const lowerSector = sector.toLowerCase()
      filtered = filtered.filter((s) => (s.sector || "").toLowerCase().includes(lowerSector))
    }

    // Sorting
    switch (sort) {
      case "funding-asc":
        filtered.sort((a, b) => (a.fundingAmount || 0) - (b.fundingAmount || 0))
        break
      case "name":
        filtered.sort((a, b) => (a.name || "").localeCompare(b.name || ""))
        break
      case "founded-desc":
        filtered.sort((a, b) => (b.foundedYear || 0) - (a.foundedYear || 0))
        break
      case "founded-asc":
        filtered.sort((a, b) => (a.foundedYear || 0) - (b.foundedYear || 0))
        break
      case "funding-desc":
      default:
        filtered.sort((a, b) => (b.fundingAmount || 0) - (a.fundingAmount || 0))
    }

    // Pagination
    const total = filtered.length
    const startIdx = Math.max(0, (page - 1) * limit)
    const paginatedData = filtered.slice(startIdx, startIdx + limit)

    return NextResponse.json({
      data: paginatedData,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("API error:", error)
    return NextResponse.json({ error: "Failed to fetch startups" }, { status: 500 })
  }
}
