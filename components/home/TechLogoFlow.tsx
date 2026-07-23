import type { SimpleIcon } from 'simple-icons'
import {
  siAndroidstudio,
  siBootstrap,
  siCss,
  siDart,
  siExpress,
  siFastapi,
  siFigma,
  siFlutter,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siLaravel,
  siLinux,
  siMysql,
  siNodedotjs,
  siOllama,
  siPhp,
  siPostgresql,
  siPostman,
  siPython,
  siSqlite,
  siStreamlit,
  siTailwindcss,
  siUbuntu,
  siXampp,
} from 'simple-icons'

interface LogoSkill {
  name: string
  icon: SimpleIcon
}

const powerBiIcon = {
  hex: 'F2C811',
  path: 'M3 15.75a1.75 1.75 0 0 1 1.75-1.75h1.5A1.75 1.75 0 0 1 8 15.75v4.5A1.75 1.75 0 0 1 6.25 22h-1.5A1.75 1.75 0 0 1 3 20.25zm4.4-5A1.75 1.75 0 0 1 9.15 9h1.5a1.75 1.75 0 0 1 1.75 1.75v9.5A1.75 1.75 0 0 1 10.65 22h-1.5a1.75 1.75 0 0 1-1.75-1.75zm4.4-4A1.75 1.75 0 0 1 13.55 5h1.5a1.75 1.75 0 0 1 1.75 1.75v13.5A1.75 1.75 0 0 1 15.05 22h-1.5a1.75 1.75 0 0 1-1.75-1.75zm4.4-3A1.75 1.75 0 0 1 17.95 2h1.3A1.75 1.75 0 0 1 21 3.75v16.5A1.75 1.75 0 0 1 19.25 22h-1.3a1.75 1.75 0 0 1-1.75-1.75z',
} as SimpleIcon

const logoSkills: LogoSkill[] = [
  { name: 'Laravel', icon: siLaravel },
  { name: 'PHP', icon: siPhp },
  { name: 'JavaScript', icon: siJavascript },
  { name: 'HTML5', icon: siHtml5 },
  { name: 'CSS', icon: siCss },
  { name: 'Python', icon: siPython },
  { name: 'Dart', icon: siDart },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'Express', icon: siExpress },
  { name: 'FastAPI', icon: siFastapi },
  { name: 'Flutter', icon: siFlutter },
  { name: 'Tailwind CSS', icon: siTailwindcss },
  { name: 'Bootstrap', icon: siBootstrap },
  { name: 'Streamlit', icon: siStreamlit },
  { name: 'Ollama', icon: siOllama },
  { name: 'MySQL', icon: siMysql },
  { name: 'PostgreSQL', icon: siPostgresql },
  { name: 'SQLite', icon: siSqlite },
  { name: 'Git', icon: siGit },
  { name: 'GitHub', icon: siGithub },
  { name: 'Linux', icon: siLinux },
  { name: 'Ubuntu', icon: siUbuntu },
  { name: 'Postman', icon: siPostman },
  { name: 'XAMPP', icon: siXampp },
  { name: 'Android Studio', icon: siAndroidstudio },
  { name: 'Figma', icon: siFigma },
  { name: 'Power BI', icon: powerBiIcon },
]

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
          Technical stack in motion
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
