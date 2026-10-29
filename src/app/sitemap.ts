import type { MetadataRoute } from 'next'

import { eddSections } from '@/lib/content/pages/ecole-devoirs-content'
import { sitemapStaticRoutes } from '@/lib/seo/routes'
import { getSiteUrl } from '@/lib/seo/siteUrl'
import { getCatalogueSlugs } from '@/lib/titresServices'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()

  const staticRoutes = sitemapStaticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const eddRoutes = eddSections.map((section) => ({
    url: `${siteUrl}/ecole-devoirs/${section.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  const titresServiceRoutes = getCatalogueSlugs().map((slug) => ({
    url: `${siteUrl}/titres-services/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...eddRoutes, ...titresServiceRoutes]
}
