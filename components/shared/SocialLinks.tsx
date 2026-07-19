import { Mail } from 'lucide-react'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'
import { Github, Linkedin } from '@/components/shared/BrandIcons'

interface SocialLinksProps {
  className?: string
  iconClassName?: string
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const links = [
    { href: site.github, label: 'GitHub', Icon: Github },
    { href: site.linkedin, label: 'LinkedIn', Icon: Linkedin },
    { href: `mailto:${site.email}`, label: 'Email', Icon: Mail },
  ]

  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {links.map(({ href, label, Icon }) => {
        const external = href.startsWith('http')
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Icon className={cn('h-4 w-4', iconClassName)} aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
