import { SectionHeading } from '@/components/shared/SectionHeading'
import { SkillsGrid } from '@/components/shared/SkillsGrid'

export function TechnicalCapabilities() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeading
        label="Technical Capabilities"
        title="Core technical capabilities"
        description="A focused stack for business applications, enterprise integrations and server management."
      />
      <div className="mt-12">
        <SkillsGrid />
      </div>
    </section>
  )
}
