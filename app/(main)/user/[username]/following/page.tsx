import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

import { UserFollowingPage } from '@/pages/user-following'
import { usersQueries } from '@/shared/api/services'
import { PageParams } from '@/shared/types'

const User = async ({ params }: PageParams<{ username: string }>) => {
  const { username } = await params

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(usersQueries.following(username))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserFollowingPage username={username} />
    </HydrationBoundary>
  )
}

export default User
