import { SectionHeading } from '@/components/shared/SectionHeading'
import { SkillsGrid } from '@/components/shared/SkillsGrid'

export function TechnicalCapabilities() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeading
        label="Technical Capabilities"
        title="Tools across the full product lifecycle"
        description="Grouped by discipline, with backend and AI application development leading. No ratings, no progress bars — just the technologies I actually work with."
      />
      <div className="mt-12">
        <SkillsGrid />
      </div>
    </section>
  )
}
