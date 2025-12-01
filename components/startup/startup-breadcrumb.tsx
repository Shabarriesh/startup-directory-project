import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface StartupBreadcrumbProps {
  startupName: string
  startupSlug: string
}

export function StartupBreadcrumb({ startupName, startupSlug }: StartupBreadcrumbProps) {
  return (
    <div className="container mx-auto px-4 py-4 flex items-center gap-2 text-sm">
      <Link href="/startups" className="hover:text-accent transition-colors">
        Directory
      </Link>
      <ChevronRight size={16} className="text-muted-foreground" />
      <span className="text-muted-foreground">{startupName}</span>
    </div>
  )
}
