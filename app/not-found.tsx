import { ArrowLeft, SearchX } from 'lucide-react'
import { Button } from '@/components/shared/Button'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[65vh] max-w-6xl items-center px-4 py-20 sm:px-6">
      <div className="max-w-xl">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
          <SearchX className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found.</h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          The page may have moved, or the link may be incomplete. Return to the portfolio and continue exploring the work.
        </p>
        <Button href="/" className="mt-7">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Button>
      </div>
    </div>
  )
}
