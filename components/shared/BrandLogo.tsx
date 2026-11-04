import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/data/site'

type BrandLogoProps = {
  compact?: boolean
  className?: string
}

export function BrandLogo({ compact = false, className = '' }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${site.name}, home`}
      className={`group inline-flex min-w-0 items-center gap-3 ${className}`}
    >
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/20 p-1.5">
        <Image
          src="/brand/rj-logo.png"
          alt="RJ logo"
          width={40}
          height={40}
          className="h-full w-full object-contain"
          sizes="44px"
        />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold tracking-tight text-foreground">
          {site.name}
        </span>
        {!compact && (
          <span className="mt-1 block text-xs text-muted-foreground">
            Software Engineering · Enterprise Technology
          </span>
        )}
      </span>
    </Link>
  )
}
