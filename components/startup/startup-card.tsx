"use client";
import Link from "next/link"
import type { Startup } from "@/lib/types"
import { ArrowUpRight } from "lucide-react"

interface StartupCardProps {
  startup: Startup
}

export function StartupCard({ startup }: StartupCardProps) {
  return (
    <Link href={`/startups/${startup.slug}`}>
      <div className="group h-full p-6 rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 bg-card hover:bg-accent/5">
        {/* Logo & Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden flex-shrink-0">
            <img
              src={startup.logo || "/placeholder.svg"}
              alt={startup.name}
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                e.currentTarget.src = "/startup-logo.jpg"
              }}
            />
          </div>
          <ArrowUpRight size={18} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Name & Tagline */}
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{startup.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{startup.tagline}</p>

        {/* Sector Badge */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="inline-flex items-center rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-medium">
            {startup.sector}
          </span>
        </div>

        {/* Stats */}
        <div className="flex gap-4 text-sm">
          <div>
            <div className="text-accent font-semibold">{startup.stats.funding}</div>
            <div className="text-muted-foreground text-xs">Funding</div>
          </div>
          <div>
            <div className="text-accent font-semibold">{startup.stats.founded}</div>
            <div className="text-muted-foreground text-xs">Founded</div>
          </div>
          <div>
            <div className="text-accent font-semibold">{startup.hq.split(",")[0]}</div>
            <div className="text-muted-foreground text-xs">Location</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
