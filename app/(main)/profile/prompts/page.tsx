import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

import { ProfilePromptsPage } from '@/pages/profile-prompts'
import { promptQueries } from '@/shared/api/services/prompt'

export default async function ListPrompts() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(promptQueries.profileList())

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfilePromptsPage />
    </HydrationBoundary>
  )
}
