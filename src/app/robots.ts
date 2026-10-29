import type { MetadataRoute } from 'next'

import { getSiteUrl } from '@/lib/seo/siteUrl'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl()

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/inclusion-numerique/seniors-digital-old', '/inclusion-numerique/test'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
