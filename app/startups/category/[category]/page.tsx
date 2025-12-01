import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { StartupCard } from "@/components/startup/startup-card"
import startupData from "@/data/startups.json"
import type { Startup } from "@/lib/types"
import { getCollectionBySlug, getAllCollections } from "@/lib/collections"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

function filterStartups(startups: Startup[], query: any): Startup[] {
  let filtered = [...startups]

  if (query.sector) {
    filtered = filtered.filter((s) => s.sector === query.sector)
  }

  if (query.fundingMin) {
    filtered = filtered.filter((s) => s.fundingAmount >= query.fundingMin)
  }

  if (query.fundingMax) {
    filtered = filtered.filter((s) => s.fundingAmount <= query.fundingMax)
  }

  if (query.foundedYear) {
    filtered = filtered.filter((s) => s.foundedYear === query.foundedYear)
  }

  // Apply sorting
  const sort = query.sort || "funding-desc"
  switch (sort) {
    case "funding-asc":
      filtered.sort((a, b) => a.fundingAmount - b.fundingAmount)
      break
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "founded-desc":
      filtered.sort((a, b) => b.foundedYear - a.foundedYear)
      break
    case "founded-asc":
      filtered.sort((a, b) => a.foundedYear - b.foundedYear)
      break
    case "funding-desc":
    default:
      filtered.sort((a, b) => b.fundingAmount - a.fundingAmount)
  }

  return filtered
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const collection = getCollectionBySlug(category)

  if (!collection) {
    return {
      title: "Category Not Found",
    }
  }

  return {
    title: `${collection.name} | Startup Directory`,
    description: collection.description,
    openGraph: {
      title: collection.name,
      description: collection.description,
      type: "website",
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const collection = getCollectionBySlug(category)

  if (!collection) {
    notFound()
  }

  const startups = filterStartups(startupData as Startup[], collection.filterQuery)

  return (
    <>
      <Header />
      <main className="flex flex-col">
        {/* Page Header */}
        <section className="py-12 border-b border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <Link href="/startups">
              <Button variant="ghost" size="sm" className="mb-4 gap-2">
                <ArrowLeft size={16} /> Back to Directory
              </Button>
            </Link>
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl">{collection.icon}</div>
              <div>
                <h1 className="text-4xl font-bold mb-2">{collection.name}</h1>
                <p className="text-lg text-muted-foreground">{collection.description}</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground mt-4">{startups.length} startups found</div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 flex-1">
          <div className="container mx-auto px-4">
            {startups.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {startups.map((startup) => (
                    <StartupCard key={startup.id} startup={startup} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No startups found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Other Collections */}
        <section className="py-12 border-t border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Explore Other Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getAllCollections()
                .filter((c) => c.slug !== category)
                .map((coll) => (
                  <Link key={coll.slug} href={`/startups/category/${coll.slug}`}>
                    <div className="p-6 rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all cursor-pointer group">
                      <div className="text-3xl mb-3">{coll.icon}</div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                        {coll.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{coll.description}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return getAllCollections().map((collection) => ({
    category: collection.slug,
  }))
}
