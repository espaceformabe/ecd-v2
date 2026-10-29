import type { Metadata } from 'next'

import { isPreviewDeployment } from '@/lib/seo/siteUrl'

export const defaultOgImage = {
  url: '/assets/hero/formation.jpg',
  alt: 'Formation et accompagnement à Espace Forma, Bruxelles',
} as const

export type PageSeo = {
  title: string
  description: string
  path: string
}

export function createPageMetadata(
  seo: PageSeo,
  options?: { index?: boolean },
): Metadata {
  const index = options?.index !== false && !isPreviewDeployment()

  return {
    // Absolute so a parent layout that also sets `title` cannot drop the brand suffix.
    title: { absolute: `${seo.title} | Espace Forma (EF)` },
    description: seo.description,
    alternates: { canonical: seo.path },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.path,
      type: 'website',
      locale: 'fr_BE',
      siteName: 'Espace Forma (EF)',
      images: [{ url: defaultOgImage.url, alt: defaultOgImage.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [defaultOgImage.url],
    },
  }
}
