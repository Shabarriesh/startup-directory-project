import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"

export default function StartupNotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">Startup Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            This startup doesn't exist or has been removed from our directory.
          </p>
          <Link href="/startups">
            <Button size="lg">Back to Directory</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
