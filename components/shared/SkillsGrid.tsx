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
            'group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(0,0,0,0.12)] sm:p-6',
            group.emphasis
              ? 'border-[#F8A706]/30 bg-gradient-to-br from-[#F8A706]/[0.09] via-card to-card hover:border-[#F8A706]/60'
              : 'border-border bg-card hover:border-primary/40',
          )}
        >
          <div className="mb-5 flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Engineering stack</span><span className="font-mono text-[10px] text-[#F8A706]">{String(group.items.length).padStart(2, '0')} tools</span></div>
          <h3 className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            {group.emphasis ? (
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            ) : null}
            {group.category}
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2">
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
