import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { ArrowRight, TrendingUp, Zap, Globe } from "lucide-react"

export default function HomePage() {
  const stats = [
    { label: "Startups Listed", value: "200+" },
    { label: "Total Funding", value: "$500B+" },
    { label: "Countries", value: "50+" },
  ]

  const categories = [
    { name: "AI & ML", count: "45+", color: "accent" },
    { name: "FinTech", count: "38+", color: "accent-warm" },
    { name: "SaaS", count: "52+", color: "accent" },
  ]

  return (
    <>
      <Header />
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Discover the Future of <span className="text-accent">Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
                Explore the world's most innovative startups, from AI pioneers to fintech revolutionaries. Find your
                next inspiration or investment opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/startups">
                  <Button size="lg" className="gap-2">
                    Explore Directory <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link href="#about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-muted-foreground mb-12">Explore startups across different sectors and industries.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((cat, i) => (
                  <Link key={i} href={`/startups?sector=${cat.name}`}>
                    <div className="p-6 rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all cursor-pointer group">
                      <div className="mb-4 h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        {i === 0 && <Zap size={24} />}
                        {i === 1 && <TrendingUp size={24} />}
                        {i === 2 && <Globe size={24} />}
                      </div>
                      <h3 className="font-semibold mb-2 text-lg">{cat.name}</h3>
                      <p className="text-accent text-sm font-medium">{cat.count} startups</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of entrepreneurs, investors, and innovators discovering the next big thing.
            </p>
            <Link href="/startups">
              <Button size="lg" variant="secondary" className="gap-2">
                Start Exploring <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
