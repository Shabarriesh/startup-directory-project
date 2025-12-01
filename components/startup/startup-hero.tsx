"use client";
import type { Startup } from "@/lib/types"
import { ExternalLink, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StartupHeroProps {
  startup: Startup
}

export function StartupHero({ startup }: StartupHeroProps) {
  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Logo */}
          <div className="w-24 h-24 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 border border-border">
            <img
              src={startup.logo || "/placeholder.svg"}
              alt={startup.name}
              className="w-20 h-20 object-contain"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?key=hnztp"
              }}
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{startup.name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{startup.tagline}</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center rounded-full bg-accent/10 text-accent px-3 py-1 text-sm font-medium">
                {startup.sector}
              </span>
              {startup.categories.slice(0, 2).map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <a href={startup.website} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  Visit Website <ExternalLink size={18} />
                </Button>
              </a>
              {startup.linkedIn && (
                <a href={startup.linkedIn} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin size={18} />
                  </Button>
                </a>
              )}
              {startup.twitter && (
                <a href={startup.twitter} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Twitter size={18} />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
