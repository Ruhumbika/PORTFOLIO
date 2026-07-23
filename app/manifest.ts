import type { MetadataRoute } from 'next'
import { site } from '@/data/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} Portfolio`,
    short_name: 'Ruhumbika',
    description:
      'Full-stack, AI application, quality assurance and digital product portfolio of Ruhumbika Mtumba John.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0f14',
    theme_color: '#14b8a6',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
