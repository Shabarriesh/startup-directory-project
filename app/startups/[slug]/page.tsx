import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { StartupBreadcrumb } from "@/components/startup/startup-breadcrumb"
import { StartupHero } from "@/components/startup/startup-hero"
import { StartupStats } from "@/components/startup/startup-stats"
import { StartupAbout } from "@/components/startup/startup-about"
import startupData from "@/data/startups.json"
import type { Startup } from "@/lib/types"

interface StartupDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getStartup(slug: string): Promise<Startup | null> {
  const startup = (startupData as Startup[]).find((s) => s.slug === slug)
  return startup || null
}

export async function generateMetadata({ params }: StartupDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const startup = await getStartup(slug)

  if (!startup) {
    return {
      title: "Startup Not Found",
    }
  }

  return {
    title: `${startup.name} | Startup Directory`,
    description: startup.tagline,
    openGraph: {
      title: startup.name,
      description: startup.tagline,
      type: "website",
      images: [
        {
          url: startup.logo || "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: startup.name,
        },
      ],
    },
  }
}

export default async function StartupDetailPage({ params }: StartupDetailPageProps) {
  const { slug } = await params
  const startup = await getStartup(slug)

  if (!startup) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="flex flex-col">
        <StartupBreadcrumb startupName={startup.name} startupSlug={startup.slug} />
        <StartupHero startup={startup} />
        <StartupStats startup={startup} />
        <StartupAbout startup={startup} />

        {/* Related Startups Section */}
        <section className="py-12 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Explore More</h2>
            <p className="text-muted-foreground">
              <a href={`/startups?sector=${startup.sector}`} className="text-accent hover:underline">
                View all {startup.sector} startups →
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return (startupData as Startup[]).map((startup) => ({
    slug: startup.slug,
  }))
}
