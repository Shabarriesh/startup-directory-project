"use client"

import { useMemo } from "react"
import { StartupCard } from "./startup-card"
import type { Startup } from "@/lib/types"

interface RelatedStartupsProps {
  currentStartup: Startup
  allStartups: Startup[]
}

export function RelatedStartups({ currentStartup, allStartups }: RelatedStartupsProps) {
  const related = useMemo(() => {
    return allStartups.filter((s) => s.id !== currentStartup.id && s.sector === currentStartup.sector).slice(0, 3)
  }, [currentStartup, allStartups])

  if (related.length === 0) return null

  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Related Startups</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
      </div>
    </section>
  )
}
