const PRODUCTION_SITE_URL = 'https://www.espaceforma.be'

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/+$/, '')

  if (process.env.VERCEL_ENV === 'production') return PRODUCTION_SITE_URL

  return 'http://localhost:3000'
}

export function isPreviewDeployment(): boolean {
  return process.env.VERCEL_ENV === 'preview'
}
