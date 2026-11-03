import Link from 'next/link'
import { site } from '@/data/site'
import { BrandLogo } from '@/components/shared/BrandLogo'
import { SocialLinks } from '@/components/shared/SocialLinks'

const explore = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="site-footer" className="relative border-t border-border/70 bg-background">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-12 sm:px-6 lg:pt-16">
        <div className="grid gap-10 border-b border-border/70 pb-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-14">
          <div className="min-w-0">
            <BrandLogo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              Enterprise software, intelligent automation and connected digital platforms — engineered for real business challenges.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 border-b border-primary/40 pb-1 text-sm font-semibold text-primary transition-colors hover:border-primary hover:text-foreground"
            >
              Explore a partnership <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <nav aria-label="Footer navigation" className="min-w-0">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Explore
            </h2>
            <ul className="mt-5 grid gap-3">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Connect
            </h2>
            <div className="mt-5"><SocialLinks /></div>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block break-words text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
            <p className="mt-3 text-xs text-muted-foreground">{site.location}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <nav aria-label="Legal information" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
