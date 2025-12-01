export default function Loading() {
  return (
    <div className="flex items-center justify-center py-40">
      <div className="space-y-4 max-w-lg w-full px-4">
        <div className="h-32 bg-muted rounded-lg animate-pulse" />
        <div className="h-6 bg-muted rounded animate-pulse w-2/3" />
        <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
        <div className="grid grid-cols-2 gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-muted rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
