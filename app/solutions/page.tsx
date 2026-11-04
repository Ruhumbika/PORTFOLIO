import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Bot, Blocks, Code2, DatabaseZap, ShieldCheck, Smartphone } from 'lucide-react'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Enterprise Software, AI Automation & Integration Solutions',
  description: 'Explore software engineering capabilities: enterprise applications, AI workflow automation, ERP and API integrations, secure systems and mobile product development in Tanzania.',
  alternates: { canonical: '/solutions' },
  openGraph: { title: 'Technology Solutions & Strategic Partnerships, Ruhumbika Mtumba John', description: 'Enterprise systems, automation, APIs and digital products built for real operational challenges.', url: '/solutions' },
}

const solutions = [
  { title: 'Enterprise Software Engineering', Icon: Blocks, description: 'Workflows, operational dashboards and maintainable systems tailored to complex business processes.', proof: 'PETA ERP', href: '/projects/peta-holdings-erp' },
  { title: 'AI & Workflow Automation', Icon: Bot, description: 'AI enabled applications and automation that reduce repetitive work and connect people to decisions.', proof: 'WhatsApp Approval Gateway', href: '/projects/whatsapp-approval-gateway' },
  { title: 'ERP & API Integrations', Icon: DatabaseZap, description: 'Reliable data exchange across HRM, attendance platforms, messaging services and enterprise backends.', proof: 'GHRM Attendance Bridge', href: '/projects/ghrm-attendance-bridge' },
  { title: 'Web & Mobile Platforms', Icon: Smartphone, description: 'Customer facing digital products built for responsive experiences and long term iteration.', proof: 'RJAY Barbershop', href: '/projects/rjay-barbershop' },
  { title: 'Security Conscious Development', Icon: ShieldCheck, description: 'Identity controls, authorization, auditability and validation incorporated into engineering workflows.', proof: 'Approval Workflow', href: '/projects/whatsapp-approval-gateway' },
  { title: 'Cloud & Deployment Engineering', Icon: Code2, description: 'Application deployment, service configuration, testing, troubleshooting and operational integration.', proof: 'Selected case studies', href: '/projects' },
] as const

export default function SolutionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#F8A706]">Technology solutions</p>
      <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Engineering digital infrastructure for ambitious businesses.</h1>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">Enterprise software, AI automation and connected digital platforms, designed with a focus on reliability, practical business value and long term evolution.</p>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map(({ title, Icon, description, proof, href }) => (
          <article key={title} className="group flex min-w-0 flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-[#F8A706]/50">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#F8A706]/25 bg-[#F8A706]/10 text-[#F8A706]"><Icon className="h-6 w-6" aria-hidden="true"/></span>
            <h2 className="mt-6 text-xl font-semibold">{title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
            <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#F8A706]">Explore related work: {proof}<ArrowUpRight className="h-4 w-4" aria-hidden="true"/></Link>
          </article>
        ))}
      </div>
      <div className="mt-14 flex flex-col gap-6 rounded-2xl border border-[#F8A706]/25 bg-card p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div><h2 className="text-2xl font-semibold">Explore a strategic technology partnership.</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">For enterprise integration initiatives, product development or a compelling technology challenge, open a direct conversation.</p></div>
        <Link href="/contact" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F8A706] px-5 py-3 font-semibold text-[#171717] hover:bg-[#ffbb38]">Discuss a partnership<ArrowUpRight className="h-4 w-4"/></Link>
      </div>
      <p className="sr-only">Ruhumbika Mtumba John, {site.title}</p>
    </div>
  )
}
