import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

import { UserFollowersPage } from '@/pages/user-followers'
import { usersQueries } from '@/shared/api/services'
import { PageParams } from '@/shared/types'

const Page = async ({ params }: PageParams<{ username: string }>) => {
  const { username } = await params

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(usersQueries.followers(username))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserFollowersPage username={username} />
    </HydrationBoundary>
  )
}

export default Page
