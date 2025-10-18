'use client'

import { FileTextIcon, UsersIcon } from 'lucide-react'

import { routes } from '@/shared/routes'
import { Card, CardContent } from '@/shared/ui/card'

import { useUserProfile } from '../../model'
import { StatCard } from './stat-card'

export const ProfileStats = () => {
  const { user, isCurrentUser } = useUserProfile()

  if (!user) {
    return null
  }

  return (
    <Card>
      <CardContent className="grid grid-cols-3 gap-4 text-center">
        <StatCard
          href={
            isCurrentUser
              ? routes.profile.myPrompts
              : routes.public.userPrompts(user.username)
          }
          count={user.promptsCount}
          label="Промптов"
          icon={<FileTextIcon className="size-4" />}
        />

        <StatCard
          href={routes.public.userFollowers(user.username)}
          count={user.followersCount}
          label="Подписчиков"
          icon={<UsersIcon className="size-4" />}
        />

        <StatCard
          href={routes.public.userFollowing(user.username)}
          count={user.followingCount}
          label="Подписок"
          icon={<UsersIcon className="size-4" />}
        />
      </CardContent>
    </Card>
  )
}
