import { GraphQLClient } from 'graphql-request'
import { getContentfulEnv, isContentfulPreviewEnabled } from './env'

function getContentfulGraphQLEndpoint(spaceId: string, environmentId: string) {
  return `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environmentId}`
}

export function getContentfulGraphQLClient() {
  const env = getContentfulEnv()
  const isPreview = isContentfulPreviewEnabled()

  const token = isPreview ? env.previewToken ?? env.deliveryToken : env.deliveryToken

  // Preview reads drafts and must not be cached. Published delivery can be stale for up to an hour.
  const contentfulFetch: typeof fetch = (input, init) =>
    fetch(input, {
      ...(init ?? {}),
      ...(isPreview ? { cache: 'no-store' as const } : { next: { revalidate: 3600 } }),
    })

  return new GraphQLClient(getContentfulGraphQLEndpoint(env.spaceId, env.environmentId), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    fetch: contentfulFetch,
  })
}

