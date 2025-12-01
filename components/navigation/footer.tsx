import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">SD</span>
              </div>
              <span className="font-mono font-bold">Startup Directory</span>
            </div>
            <p className="text-sm text-muted-foreground">Discover innovative startups shaping the future.</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Explore</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/startups" className="hover:text-foreground transition-colors">
                  All Startups
                </Link>
              </li>
              <li>
                <Link href="/startups?sort=funding-desc" className="hover:text-foreground transition-colors">
                  Most Funded
                </Link>
              </li>
              <li>
                <Link href="/startups?sort=founded-desc" className="hover:text-foreground transition-colors">
                  Latest
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/startups?sector=Artificial%20Intelligence"
                  className="hover:text-foreground transition-colors"
                >
                  AI
                </Link>
              </li>
              <li>
                <Link href="/startups?sector=FinTech" className="hover:text-foreground transition-colors">
                  FinTech
                </Link>
              </li>
              <li>
                <Link href="/startups?sector=SaaS" className="hover:text-foreground transition-colors">
                  SaaS
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Twitter">
                <Twitter size={18} className="text-muted-foreground hover:text-foreground" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="GitHub">
                <Github size={18} className="text-muted-foreground hover:text-foreground" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} className="text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {currentYear} Startup Directory. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
