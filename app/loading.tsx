export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[65vh] max-w-6xl items-center justify-center px-4 py-20 sm:px-6">
      <div className="w-full max-w-3xl" role="status" aria-label="Loading page">
        <div className="flex items-center gap-4">
          <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 font-mono text-sm font-semibold text-primary">
            RMJ
            <span className="absolute inset-[-4px] animate-pulse rounded-[15px] border border-primary/30" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <div className="h-3 w-32 animate-pulse rounded bg-primary/20" />
            <div className="mt-3 h-7 w-3/4 animate-pulse rounded bg-secondary" />
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-32 animate-pulse rounded-xl border border-border bg-card" />
          ))}
        </div>
        <span className="sr-only">Loading page content…</span>
      </div>
    </div>
  )
}
