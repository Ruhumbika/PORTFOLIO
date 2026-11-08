import Link from 'next/link'
import { ArrowUpRight, Bot, ShieldCheck, Workflow, RadioTower } from 'lucide-react'

const highlights = [
  { title: 'ERP & Workflow Automation', description: 'WhatsApp approval orchestration, identity verification, audit trails and integration contracts.', href: '/projects/whatsapp-approval-gateway', Icon: Workflow },
  { title: 'Biometrics & HRM Integration', description: 'Device attendance ingestion, event queues and reliable HRM data pipelines.', href: '/projects/ghrm-attendance-bridge', Icon: ShieldCheck },
  { title: 'Advertising & Broadcast Operations', description: 'Advertising sales, scheduling and broadcast tracking that connects sold advertising with aired placements.', href: '/projects/abood-radio-studio-gateway', Icon: RadioTower },
  { title: 'AI & Software Engineering', description: 'Full stack applications, local LLM solutions and security conscious product engineering.', href: '/projects/student-support-llm', Icon: Bot },
]

export function EngineeringHighlights() {
  return (
    <section aria-labelledby="engineering-heading" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#F8A706]">Engineering in practice</p>
        <h2 id="engineering-heading" className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">Intelligent systems. Measurable engineering work.</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">A cross section of real integration work, tested prototypes and deployed digital products. Each case study describes the actual delivery stage.</p>
        <div className="mt-8"><Link href="/solutions" className="inline-flex items-center rounded-lg border border-[#F8A706]/40 px-4 py-2 text-sm font-semibold text-[#F8A706] transition-colors hover:bg-[#F8A706]/10">Explore technology solutions →</Link></div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {highlights.map(({ title, description, href, Icon }) => (
            <Link key={href} href={href} className="group rounded-xl border border-[#F8A706]/25 bg-card p-6 transition-all hover:-translate-y-1 hover:border-[#F8A706]/70 hover:shadow-[0_14px_35px_rgba(248,167,6,0.09)] focus-visible:outline-[#F8A706]">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F8A706]/10 text-[#F8A706]"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-[#F8A706]" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
