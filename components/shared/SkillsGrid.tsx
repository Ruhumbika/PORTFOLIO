import { cn } from '@/lib/utils'
import { skillGroups, type SkillGroup } from '@/data/skills'
import { Stagger, RevealItem } from './Reveal'
import { TechTag } from './TechTag'

interface SkillsGridProps {
  groups?: SkillGroup[]
}

export function SkillsGrid({ groups = skillGroups }: SkillsGridProps) {
  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <RevealItem
          key={group.category}
          className={cn(
            'flex h-full flex-col rounded-xl border p-5 transition-colors duration-300',
            group.emphasis
              ? 'border-primary/30 bg-primary/[0.04]'
              : 'border-border bg-card',
          )}
        >
          <h3 className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            {group.emphasis ? (
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            ) : null}
            {group.category}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <li key={item}>
                <TechTag highlight={group.emphasis}>{item}</TechTag>
              </li>
            ))}
          </ul>
        </RevealItem>
      ))}
    </Stagger>
  )
}
