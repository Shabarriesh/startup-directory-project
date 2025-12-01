import type { Startup } from "@/lib/types"

interface StartupAboutProps {
  startup: Startup
}

export function StartupAbout({ startup }: StartupAboutProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">About {startup.name}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{startup.description}</p>

          {/* Founders */}
          {startup.founders && startup.founders.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Founding Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {startup.founders.map((founder, i) => (
                  <div key={i} className="p-4 rounded-lg border border-border">
                    <div className="text-lg font-semibold">{founder.name}</div>
                    <div className="text-sm text-accent">{founder.role}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
