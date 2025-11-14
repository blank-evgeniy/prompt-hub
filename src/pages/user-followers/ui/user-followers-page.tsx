'use client'

import { useQuery } from '@tanstack/react-query'

import { UserCard } from '@/entities/user'
import { mapFollowerResponse } from '@/entities/user/model/map'
import { usersQueries } from '@/shared/api/services'
import { routes } from '@/shared/routes'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/ui/breadcrumb'
import { ListState } from '@/shared/ui/list-state'
import { Typography } from '@/shared/ui/typography'

interface ProfilePageProps {
  username: string
}

export const UserFollowersPage = ({ username }: ProfilePageProps) => {
  const { data, isLoading } = useQuery(usersQueries.followers(username))

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <Typography className="sr-only" as="h1">
        Подписчики
      </Typography>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={routes.public.user(username)}>
              {username}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Подписчики</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <ListState items={data ?? []} isLoading={isLoading}>
        {(user) => <UserCard key={user.id} data={mapFollowerResponse(user)} />}
      </ListState>
    </main>
  )
}
