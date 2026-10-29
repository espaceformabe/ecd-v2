import { createPageMetadata } from '@/lib/seo/pageMetadata'
import { pageSeo } from '@/lib/seo/routes'

export const metadata = createPageMetadata(pageSeo.ecoleDevoirs)

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
