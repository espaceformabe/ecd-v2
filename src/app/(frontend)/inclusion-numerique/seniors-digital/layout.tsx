import { createPageMetadata } from '@/lib/seo/pageMetadata'
import { pageSeo } from '@/lib/seo/routes'

export const metadata = createPageMetadata(pageSeo.seniorsDigital)

export default function SeniorsDigitalLayout({ children }: { children: React.ReactNode }) {
  return children
}
