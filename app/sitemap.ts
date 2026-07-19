import type { MetadataRoute } from 'next'
import { getAllProjectSlugs } from '@/data/projects'
import { site } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/projects', '/experience', '/availability', '/contact']
  const projectRoutes = getAllProjectSlugs().map((slug) => `/projects/${slug}`)

  return [...routes, ...projectRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith('/projects/') ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : route === '/projects' ? 0.9 : 0.7,
  }))
}
