'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, ArrowLeft, RefreshCw } from 'lucide-react'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Portfolio route error', error)
  }, [error])

  return (
    <div className="mx-auto flex min-h-[65vh] max-w-3xl items-center px-4 py-20 sm:px-6">
      <div className="w-full rounded-2xl border border-border bg-card p-7 text-center sm:p-10">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
          <AlertTriangle className="h-6 w-6" aria-hidden="true" />
        </span>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-primary">
          Temporary error
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          This part of the portfolio could not load.
        </h1>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
          Your connection may have been interrupted. Try loading this page again or return to the homepage.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="madde-button inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Try again
          </button>
          <Link
            href="/"
            className="madde-button inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Return home
          </Link>
        </div>
      </div>
    </div>
  )
}
