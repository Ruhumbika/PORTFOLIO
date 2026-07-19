import { ArrowRight, Download } from 'lucide-react'
import { site } from '@/data/site'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/shared/Button'
import { SocialLinks } from '@/components/shared/SocialLinks'

export function ContactCTA() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="hero-wash relative overflow-hidden rounded-2xl border border-border p-8 sm:p-12 lg:p-16">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
          <div className="relative flex flex-col items-start gap-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Let&apos;s work together
            </span>
            <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s build something useful.
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
              I&apos;m open to graduate opportunities, internships, technology
              collaborations, freelance development and conversations about
              practical digital products.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contact">
                Get in touch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href={site.cv}
                variant="outline"
                {...{ download: '', target: '_blank', rel: 'noopener noreferrer' }}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </Button>
            </div>
            <SocialLinks className="mt-2" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
