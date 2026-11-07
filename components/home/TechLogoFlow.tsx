import type { SimpleIcon } from 'simple-icons'
import { siPhp, siJavascript, siVuedotjs, siPython, siDart, siMysql, siHtml5, siCss } from 'simple-icons'
import { coreStack } from '@/data/skills'

interface LogoSkill {
  name: string
  icon: SimpleIcon
}

const coreIcons: Record<string, SimpleIcon> = {
  PHP: siPhp,
  JavaScript: siJavascript,
  'Vue.js': siVuedotjs,
  Python: siPython,
  Dart: siDart,
  MySQL: siMysql,
  HTML: siHtml5,
  CSS: siCss,
}
const logoSkills: LogoSkill[] = coreStack.map((name) => ({ name, icon: coreIcons[name] }))

function LogoSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="skill-logo-set" aria-hidden={duplicate || undefined}>
      {logoSkills.map(({ name, icon }) => (
        <li
          key={`${duplicate ? 'duplicate-' : ''}${name}`}
          className="skill-logo-card group"
          style={{ '--brand-color': `#${icon.hex}` } as React.CSSProperties}
        >
          <span className="skill-logo-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d={icon.path} />
            </svg>
          </span>
          <span className="skill-logo-name">{name}</span>
        </li>
      ))}
    </ul>
  )
}

export function TechLogoFlow() {
  return (
    <section className="skill-logo-flow fixed inset-x-0 bottom-0 z-[55] border-t border-border py-2" aria-labelledby="skill-flow-title">
      <div className="mx-auto mb-1 flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <p id="skill-flow-title" className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Core development stack
        </p>
        <p className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:block">
          Hover to pause
        </p>
      </div>

      <div
        className="skill-logo-viewport"
        role="region"
        aria-label="Technical skills carousel. Focus or hover to pause the movement."
        tabIndex={0}
      >
        <div className="skill-logo-track">
          <LogoSet />
          <LogoSet duplicate />
        </div>
      </div>
    </section>
  )
}
