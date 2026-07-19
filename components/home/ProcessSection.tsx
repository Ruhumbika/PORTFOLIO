import { processSteps } from '@/data/skills'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Stagger, RevealItem } from '@/components/shared/Reveal'

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeading
        label="How I Build"
        title="A practical, feedback-driven process"
        description="From understanding the real problem to improving through feedback — the workflow I apply to every product I build."
      />

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step) => (
          <RevealItem
            key={step.step}
            className="flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-colors duration-300 hover:border-primary/40"
          >
            <span className="font-mono text-sm text-primary">{step.step}</span>
            <span className="h-px w-full bg-border" aria-hidden="true" />
            <h3 className="text-pretty text-base font-medium leading-snug tracking-tight">
              {step.title}
            </h3>
          </RevealItem>
        ))}
      </Stagger>
    </section>
  )
}
