import { createPageMetadata } from '@/lib/seo/pageMetadata'
import { noindexPageSeo } from '@/lib/seo/routes'

export const metadata = createPageMetadata(noindexPageSeo.seniorsDigitalOld, { index: false })

export default function SeniorsDigitalOldLayout({ children }: { children: React.ReactNode }) {
  return children
}
