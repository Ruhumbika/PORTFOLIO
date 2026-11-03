import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { site } from '@/data/site'
import { BrandLogo } from '@/components/shared/BrandLogo'
import { SocialLinks } from '@/components/shared/SocialLinks'

const links = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Selected Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="site-footer" className="relative overflow-hidden border-t border-border/70 bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 py-12 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-20">
          <div className="min-w-0">
            <BrandLogo compact />
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Engineering enterprise software, AI automation and connected digital products for real business challenges.
            </p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex min-h-10 items-center gap-2 rounded-lg border border-primary/35 bg-primary/[0.06] px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/70 hover:bg-primary/10"
            >
              Discuss a partnership
              <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-x-10">
            <nav aria-label="Explore portfolio">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
                Explore
              </h2>
              <ul className="mt-5 space-y-3">
                {links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="min-w-0">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
                Connect
              </h2>
              <div className="mt-4">
                <SocialLinks />
              </div>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 block break-all text-sm leading-6 text-muted-foreground transition-colors hover:text-primary"
              >
                {site.email}
              </a>
              <p className="mt-3 inline-flex items-start gap-2 text-xs leading-5 text-muted-foreground">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                {site.location}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/70 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
