import { createPageMetadata } from '@/lib/seo/pageMetadata'
import { pageSeo } from '@/lib/seo/routes'

export const metadata = createPageMetadata(pageSeo.contact)

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
