import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name}'s portfolio handles visitor information and privacy.`,
  alternates: { canonical: '/privacy' },
}

const sections = [
  {
    title: 'Information you provide',
    paragraphs: [
      'The portfolio does not ask you to create an account. If you use the contact form, your message is prepared in your own email application. The website does not submit or store the form contents.',
      'If you contact me by email, telephone, WhatsApp, LinkedIn or another external service, I receive the information you choose to provide. Those services process information under their own privacy policies.',
    ],
  },
  {
    title: 'Hosting and analytics',
    paragraphs: [
      'This website is hosted by Vercel. Hosting infrastructure may process standard technical request information needed to deliver and secure the website.',
      'Vercel Web Analytics may collect anonymous, aggregated information such as pages viewed, referrer, approximate country, browser, operating system and device type. It does not use third-party cookies and is not intended to identify individual visitors.',
    ],
  },
  {
    title: 'Browser storage',
    paragraphs: [
      'The website stores your light or dark theme choice in local storage and records in session storage whether the introductory loader has already appeared. These settings stay in your browser and are used only to improve your experience.',
    ],
  },
  {
    title: 'How information is used',
    paragraphs: [
      'Information you send directly is used to respond to your enquiry, discuss opportunities and maintain relevant correspondence. Anonymous analytics are used to understand site performance and improve portfolio content.',
      'I do not sell personal information or use it for automated decision-making.',
    ],
  },
  {
    title: 'Retention and your choices',
    paragraphs: [
      `Direct correspondence is retained only as long as reasonably needed for the conversation, record-keeping or legal obligations. You may ask what personal information I hold about you, request a correction or request deletion by emailing ${site.email}.`,
      'You can clear local and session storage through your browser settings. You may also prevent analytics requests with compatible browser privacy tools.',
    ],
  },
  {
    title: 'External links',
    paragraphs: [
      'This portfolio links to external websites and services. Their privacy practices are outside my control, so you should review their policies before providing information.',
    ],
  },
  {
    title: 'Policy updates',
    paragraphs: [
      'This policy may be updated when the website or its services change. The latest version will remain available on this page with its effective date.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Legal</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
        This policy explains what information this portfolio handles, why it is used and the choices available to you.
      </p>
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
        Effective 22 July 2026
      </p>

      <div className="mt-12 space-y-5">
        {sections.map((section) => (
          <section key={section.title} className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          For privacy questions or requests, email{' '}
          <a className="text-primary hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          . You can also visit the <Link className="text-primary hover:underline" href="/contact">contact page</Link>.
        </p>
      </section>
    </article>
  )
}
