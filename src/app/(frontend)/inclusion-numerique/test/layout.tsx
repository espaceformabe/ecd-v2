import { createPageMetadata } from '@/lib/seo/pageMetadata'
import { noindexPageSeo } from '@/lib/seo/routes'

export const metadata = createPageMetadata(noindexPageSeo.inclusionNumeriqueTest, { index: false })

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
