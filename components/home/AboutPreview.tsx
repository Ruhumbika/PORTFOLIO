import { ArrowRight, GraduationCap } from 'lucide-react'
import { site } from '@/data/site'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/shared/Button'

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-primary" aria-hidden="true" />
            About
          </span>
          <blockquote className="mt-6 text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            &ldquo;I approach digital products from engineering, business and
            user-experience perspectives.&rdquo;
          </blockquote>
          <Button href="/about" variant="outline" size="sm" className="mt-8 self-start">
            More about me
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I&apos;m a final-year Business Information Technology student at the
            University of Dar es Salaam, building web, mobile and AI-enabled
            systems that solve real organisational and community problems. My
            work spans local government, education, housing and small-business
            environments.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Alongside engineering, I run RJAY Digital Hub and RJAY Barbershop,
            which keeps me close to real customers, operations and product
            decisions. That mix of technical, business and user-experience
            thinking shapes everything I ship.
          </p>

          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium">
                BSc Business Information Technology
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                University of Dar es Salaam · Expected July 2026 · GPA 3.5/5.0
              </p>
            </div>
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            {site.location}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
