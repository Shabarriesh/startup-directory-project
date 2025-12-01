import { type NextRequest, NextResponse } from "next/server"
import startupData from "@/data/startups.json"
import type { Startup } from "@/lib/types"

export const dynamic = "force-static"
export const revalidate = 86400 // ISR: revalidate every 24 hours

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const slug = (await params).slug
    const startup = (startupData as Startup[]).find((s) => s.slug === slug)

    if (!startup) {
      return NextResponse.json({ error: "Startup not found" }, { status: 404 })
    }

    return NextResponse.json({ data: startup })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Failed to fetch startup" }, { status: 500 })
  }
}
