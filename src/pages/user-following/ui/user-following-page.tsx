'use client'

import { useQuery } from '@tanstack/react-query'

import { UserCard } from '@/entities/user'
import { mapFollowerResponse } from '@/entities/user/model/map'
import { usersQueries } from '@/shared/api/services'
import { ListState } from '@/shared/ui/list-state'
import { Typography } from '@/shared/ui/typography'

interface ProfilePageProps {
  username: string
}

export const UserFollowingPage = ({ username }: ProfilePageProps) => {
  const { data, isLoading } = useQuery(usersQueries.following(username))

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <Typography variant={'h1'} as="h1">
        Подписки
      </Typography>

      <ListState items={data ?? []} isLoading={isLoading}>
        {(user) => <UserCard key={user.id} data={mapFollowerResponse(user)} />}
      </ListState>
    </main>
  )
}
