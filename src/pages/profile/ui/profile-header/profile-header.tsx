'use client'

import { CalendarIcon } from 'lucide-react'
import Link from 'next/link'

import { routes } from '@/shared/routes'
import { Avatar } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'
import { Typography } from '@/shared/ui/typography'

import { useUserProfile } from '../../model'

export const ProfileHeader = () => {
  const { user, isCurrentUser } = useUserProfile()

  if (!user) {
    return null
  }

  const joinDate = new Date(user.createdAt).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
  })

  return (
    <Card>
      <CardHeader className="flex items-center justify-center">
        <Avatar
          size={'xl'}
          src={user.avatar?.url}
          backgroundColor={user.avatar?.color}
        />
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <Typography variant="h1" as="h1">
          {user.username}
        </Typography>

        {user.bio && (
          <Typography variant="description" className="max-w-md">
            {user.bio}
          </Typography>
        )}

        <div className="text-base-content/70 flex items-center justify-center gap-1 text-sm">
          <CalendarIcon className="size-4" />
          <span>Участник с {joinDate}</span>
        </div>
      </CardContent>
      {isCurrentUser && (
        <CardFooter>
          <Button asChild variant="secondary">
            <Link href={routes.profile.edit}>Редактировать профиль</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
