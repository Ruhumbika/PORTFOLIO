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
  title: {
    default:
      'Ruhumbika Mtumba John | Full-Stack and AI Application Developer',
    template: '%s | Ruhumbika Mtumba John',
  },
  description:
    'Portfolio of Ruhumbika Mtumba John, a full-stack developer and AI application developer building practical web, mobile and intelligent digital products.',
  keywords: [
    'Ruhumbika Mtumba John',
    'Full-Stack Developer',
    'AI Application Developer',
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
      'Building practical web, mobile and intelligent digital products with full-stack engineering, AI and user-centred design.',
    siteName: site.name,
    locale: 'en_US',
    images: [{ url: '/og/portfolio-og.jpg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruhumbika Mtumba John | Full-Stack and AI Application Developer',
    description:
      'Building practical web, mobile and intelligent digital products.',
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
  jobTitle: 'Full-Stack Developer & AI Application Developer',
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
