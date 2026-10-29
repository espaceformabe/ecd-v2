import React from 'react'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import SocialMediaBar from '@/components/ui/SocialMediaBar'
import { RebrandingToast } from '@/components/RebrandingToast'
import { defaultSocialLinks } from '@/lib/content/footerContent'
import { hasContentfulEnv } from '@/lib/contentful/env'
import { getSiteSettings } from '@/lib/contentful/queries/siteSettings'
import { defaultOgImage } from '@/lib/seo/pageMetadata'
import { pageSeo } from '@/lib/seo/routes'
import { getSiteUrl, isPreviewDeployment } from '@/lib/seo/siteUrl'

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'Espace Forma (EF)',
    template: '%s | Espace Forma (EF)',
  },
  description: pageSeo.home.description,
  robots: isPreviewDeployment()
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    siteName: 'Espace Forma (EF)',
    title: 'Espace Forma (EF)',
    description: pageSeo.home.description,
    images: [{ url: defaultOgImage.url, alt: defaultOgImage.alt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Espace Forma (EF)',
    description: pageSeo.home.description,
    images: [defaultOgImage.url],
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const settings = hasContentfulEnv() ? await getSiteSettings() : null
  const rebrandingToastEnabled = settings?.rebrandingToastEnabled ?? true
  const rebrandingToastDurationMs = settings?.rebrandingToastDurationMs ?? 30000
  const socialLinks = settings?.socialLinks ?? defaultSocialLinks
  const siteUrl = getSiteUrl()
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'NGO'],
    name: 'Espace Forma',
    alternateName: ['Espace Forma (EF)', 'Espace Cultures et Développement', 'ECD'],
    url: siteUrl,
    email: 'info@espaceforma.be',
    telephone: '+3224256585',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rue du Gouvernement Provisoire 34A',
      postalCode: '1000',
      addressLocality: 'Bruxelles',
      addressCountry: 'BE',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
    sameAs: [
      socialLinks.linkedin,
      socialLinks.instagram,
      socialLinks.facebook,
      socialLinks.youtube,
    ].filter(Boolean),
  }

  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <main>
          <RebrandingToast
            enabled={rebrandingToastEnabled}
            durationMs={rebrandingToastDurationMs}
          />
          <Header />
          <SocialMediaBar socialLinks={socialLinks} />
          {children}
          <Footer socialLinks={socialLinks} />
        </main>
        <Analytics />
      </body>
    </html>
  )
}
