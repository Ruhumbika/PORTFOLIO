import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { site } from '@/data/site'
import { ThemeProvider, themeInitScript } from '@/components/theme/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingHire } from '@/components/shared/FloatingHire'
import { SitePreloader } from '@/components/shared/SitePreloader'
import { TechLogoFlow } from '@/components/home/TechLogoFlow'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: `${site.name} Portfolio`,
  category: 'technology',
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  title: {
    default:
      'Ruhumbika Mtumba John | Software Engineer, AI Automation & ERP Integration',
    template: '%s | Ruhumbika Mtumba John',
  },
  description:
    'Hire Ruhumbika Mtumba John for full-stack software development, AI automation, ERP and API integrations, mobile apps, and secure digital solutions in Tanzania.',
  keywords: [
    'Ruhumbika Mtumba John',
    'Full-Stack Developer',
    'AI Automation',
    'Software Engineer Tanzania',
    'Hire Software Engineer Tanzania',
    'Freelance Full-Stack Developer',
    'Business Software Development',
    'Mobile App Developer Tanzania',
    'WhatsApp Business Automation',
    'ERP Integration',
    'REST API Engineering',
    'Cloud Deployment',
    'Cybersecurity',
    'System Security',
    'Laravel',
    'FastAPI',
    'Flutter',
    'Dar es Salaam',
    'Tanzania',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    title: 'Ruhumbika Mtumba John | Full-Stack and AI Application Developer',
    description:
      'Explore software engineering projects and services in AI automation, ERP integration, web and mobile application development in Tanzania.',
    siteName: site.name,
    locale: 'en_US',
    images: [{ url: '/og/portfolio-og.jpg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruhumbika Mtumba John | Full-Stack and AI Application Developer',
    description:
      'AI automation, software engineering, ERP integration and security-conscious digital products.',
    images: ['/og/portfolio-og.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b0f14' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: 'Software Engineer, AI Automation and Enterprise Systems Integration',
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dar es Salaam',
    addressCountry: 'Tanzania',
  },
  image: `${site.url}${site.profileImage}`,
  sameAs: [site.github, site.linkedin],
  knowsAbout: ['Software Engineering', 'AI Automation', 'ERP Integrations', 'API Development', 'Full-Stack Development', 'Cybersecurity-Aware Engineering'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="dark bg-background"
      suppressHydrationWarning
    >
      <head>
        <noscript>
          <style>{'.site-preloader{display:none!important}'}</style>
        </noscript>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <SitePreloader />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <FloatingHire />
          <TechLogoFlow />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
