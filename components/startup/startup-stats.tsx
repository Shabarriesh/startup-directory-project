import type { Startup } from "@/lib/types"

interface StartupStatsProps {
  startup: Startup
}

export function StartupStats({ startup }: StartupStatsProps) {
  const stats = [
    { label: "Funding Raised", value: startup.stats.funding },
    { label: "Founded", value: startup.stats.founded },
    { label: "Employees", value: startup.stats.employees },
    { label: "Funding Round", value: startup.fundingRound },
    { label: "Headquarters", value: startup.hq },
    { label: "Currency", value: startup.fundingCurrency },
  ]

  return (
    <section className="py-12 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Key Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-lg border border-border bg-card">
              <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-accent">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
