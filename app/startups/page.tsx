"use client"

import { useState, useCallback, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import useSWR from "swr"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { StartupCard } from "@/components/startup/startup-card"
import { SearchBar } from "@/components/filters/search-bar"
import { CategoryFilter } from "@/components/filters/category-filter"
import { SortDropdown } from "@/components/filters/sort-dropdown"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import type { Startup } from "@/lib/types"

const fetcher = (url: string) =>
  fetch(url, { cache: "no-store", headers: { "x-no-cache": "1" } }).then((res) => res.json())

export default function StartupsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [sector, setSector] = useState(searchParams.get("sector") || "")
  const [sort, setSort] = useState(searchParams.get("sort") || "funding-desc")
  const [page, setPage] = useState(Number.parseInt(searchParams.get("page") || "1", 10))

  // Sync state with URL
  useEffect(() => {
    const sp = searchParams
    const urlSearch = sp.get("search") || ""
    const urlSector = sp.get("sector") || ""
    const urlSort = sp.get("sort") || "funding-desc"
    const urlPage = Number.parseInt(sp.get("page") || "1", 10)

    if (urlSearch !== search) setSearch(urlSearch)
    if (urlSector !== sector) setSector(urlSector)
    if (urlSort !== sort) setSort(urlSort)
    if (urlPage !== page) setPage(urlPage)
  }, [searchParams]) // do NOT include state in deps

  // SWR key array for guaranteed refetch
  const swrKey = [
    "/api/startups",
    search || "",
    sector || "",
    sort || "funding-desc",
    String(page || 1),
    "12",
  ]

  const { data, isLoading, error } = useSWR<{
    data: Startup[]
    pagination: { page: number; limit: number; total: number; totalPages: number }
  }>(swrKey, () => {
    const qp = new URLSearchParams()
    if (search) qp.set("search", search)
    if (sector) qp.set("sector", sector)
    if (sort) qp.set("sort", sort)
    qp.set("page", String(page || 1))
    qp.set("limit", "12")
    return fetcher(`/api/startups?${qp.toString()}`)
  })

  const updateUrl = useCallback(
    (newSearch?: string, newSector?: string, newSort?: string, newPage?: number) => {
      const params = new URLSearchParams()
      if (newSearch || search) params.set("search", newSearch ?? search)
      if (newSector || sector) params.set("sector", newSector ?? sector)
      if (newSort || sort) params.set("sort", newSort ?? sort)
      if (newPage != null) params.set("page", String(newPage))
      router.push(`/startups?${params.toString()}`)
    },
    [search, sector, sort, router],
  )

  const handleSearch = (value: string) => {
    setSearch(value)
    setPage(1)
    updateUrl(value, sector, sort, 1)
  }

  const handleSectorChange = (value: string) => {
    setSector(value)
    setPage(1)
    updateUrl(search, value, sort, 1)
  }

  const handleSortChange = (value: string) => {
    setSort(value)
    setPage(1)
    updateUrl(search, sector, value, 1)
  }

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return
    setPage(newPage)
    updateUrl(search, sector, sort, newPage)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const totalPages = data?.pagination.totalPages || 0
  const total = data?.pagination.total || 0

  return (
    <>
      <Header />
      <main className="flex flex-col">
        {/* Page Header */}
        <section className="py-12 border-b border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Startup Directory</h1>
            <p className="text-muted-foreground">
              Browse {total} innovative startups from around the world
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 sticky top-[73px] z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <SearchBar value={search} onChange={handleSearch} />
              </div>
              <div>
                <CategoryFilter value={sector} onChange={handleSectorChange} />
              </div>
              <div>
                <SortDropdown value={sort} onChange={handleSortChange} />
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 flex-1">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="animate-spin text-accent" size={32} />
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">Failed to load startups. Please try again.</p>
              </div>
            ) : data?.data && data.data.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {data.data.map((startup) => (
                    <StartupCard key={startup.id} startup={startup} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(page - 1)}
                      disabled={page === 1}
                    >
                      <ChevronLeft size={16} />
                    </Button>

                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      const pageNum = Math.max(1, page - 2) + i
                      if (pageNum > totalPages) return null
                      return (
                        <Button
                          key={pageNum}
                          variant={pageNum === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(pageNum)}
                        >
                          {pageNum}
                        </Button>
                      )
                    })}

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(page + 1)}
                      disabled={page === totalPages}
                    >
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No startups found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
