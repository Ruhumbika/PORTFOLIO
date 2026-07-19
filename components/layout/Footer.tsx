import Link from 'next/link'
import { navItems, site } from '@/data/site'
import { SocialLinks } from '@/components/shared/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/40 bg-primary/10 font-mono text-sm font-semibold text-primary">
                {site.initials}
              </span>
              <span className="text-sm font-semibold">{site.name}</span>
            </Link>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Full-Stack Developer · AI Application Developer · Digital Product
              Builder
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Navigation
            </span>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Connect
            </span>
            <SocialLinks />
            <a
              href={`mailto:${site.email}`}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
            Designed around clarity. Built around useful products.
          </p>
        </div>
      </div>
    </footer>
  )
}
