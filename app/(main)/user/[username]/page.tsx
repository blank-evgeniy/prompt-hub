import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

import { ProfilePage } from '@/pages/profile'
import { usersQueries } from '@/shared/api/services'
import { PageParams } from '@/shared/types'

const User = async ({ params }: PageParams<{ username: string }>) => {
  const { username } = await params

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(usersQueries.one(username))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfilePage username={username} />
    </HydrationBoundary>
  )
}

export default User
