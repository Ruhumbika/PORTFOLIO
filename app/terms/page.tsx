import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms governing the use of ${site.name}'s portfolio website.`,
  alternates: { canonical: '/terms' },
}

const sections = [
  {
    title: 'Using this website',
    body: 'You may browse this portfolio for lawful personal, recruitment, educational and professional purposes. You must not interfere with its operation, attempt unauthorized access, introduce malicious code or use the website in a way that violates applicable law or the rights of others.',
  },
  {
    title: 'Portfolio content',
    body: 'Unless otherwise stated, the text, design, branding, project presentations and original visual material on this website belong to Ruhumbika Mtumba John. You may link to the website and reference its public content with appropriate credit. You may not reproduce substantial content, present the work as your own or use it commercially without prior written permission.',
  },
  {
    title: 'Project information',
    body: 'Project descriptions are provided to demonstrate skills and experience. Some projects are academic, prototype or MVP work, and some features are identified as planned concepts. Screenshots and descriptions may be updated as projects develop.',
  },
  {
    title: 'No professional commitment',
    body: 'Messages, availability information, scheduling links and portfolio statements are invitations to communicate. They do not by themselves create an employment relationship, service agreement, partnership or other binding commitment. Any professional engagement requires separate written agreement between the relevant parties.',
  },
  {
    title: 'External services and links',
    body: 'The website may link to GitHub, LinkedIn, WhatsApp, email services, live project deployments and other third-party websites. Those services are controlled by their respective providers. I am not responsible for their content, availability, security or terms.',
  },
  {
    title: 'Availability and accuracy',
    body: 'I aim to keep this portfolio accurate and available, but the website is provided as available without guarantees that every page, link or statement will always be complete, current or error-free. To the extent permitted by applicable law, I am not liable for losses resulting solely from reliance on, or inability to access, this website.',
  },
  {
    title: 'Changes to these terms',
    body: 'These terms may be updated when the portfolio, its features or applicable requirements change. Continued use of the website after an update means the revised terms apply to future use.',
  },
  {
    title: 'Applicable law',
    body: 'These terms are governed by the laws applicable in the United Republic of Tanzania. Any mandatory rights or protections available under applicable law remain unaffected.',
  },
]

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Legal</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
        These terms explain the conditions for accessing and using this portfolio website.
      </p>
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
        Effective 22 July 2026
      </p>

      <div className="mt-12 space-y-5">
        {sections.map((section) => (
          <section key={section.title} className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{section.body}</p>
          </section>
        ))}
      </div>

      <section className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Questions</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Questions about these terms can be sent to{' '}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          . See the <Link className="text-primary hover:underline" href="/privacy">Privacy Policy</Link> for information about data handling.
        </p>
      </section>
    </article>
  )
}
