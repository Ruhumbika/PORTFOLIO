import { cn } from '@/lib/utils'
import { pillars } from '@/data/skills'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Stagger, RevealItem } from '@/components/shared/Reveal'
import { TechTag } from '@/components/shared/TechTag'

export function ExpertiseSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeading
        label="What I Build"
        title="Three ways I turn problems into products"
        description="Full-stack systems and AI applications are my core focus. Digital product design is a complementary strength that makes everything I build more usable."
      />

      <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <RevealItem
            key={pillar.index}
            className={cn(
              'group flex h-full flex-col rounded-xl border p-6 transition-colors duration-300',
              pillar.emphasis
                ? 'border-primary/30 bg-primary/[0.04] hover:border-primary/60 lg:p-8'
                : 'border-border bg-card hover:border-primary/40',
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {pillar.index}
              </span>
              {pillar.emphasis ? (
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                  Core focus
                </span>
              ) : (
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Supporting
                </span>
              )}
            </div>

            <h3
              className={cn(
                'mt-5 font-semibold tracking-tight',
                pillar.emphasis ? 'text-2xl' : 'text-xl',
              )}
            >
              {pillar.title}
            </h3>
            <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
              {pillar.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {pillar.technologies.map((t) => (
                <TechTag key={t} highlight={pillar.emphasis}>
                  {t}
                </TechTag>
              ))}
            </div>
          </RevealItem>
        ))}
      </Stagger>
    </section>
  )
}
