'use client'

import { useQuery } from '@tanstack/react-query'

import { profileQueries } from '@/shared/api/services'
import { Loader } from '@/shared/ui/loaders'
import { Typography } from '@/shared/ui/typography'

import { EditAvatarForm } from '../edit-avatar-form'
import { EditProfileForm } from '../edit-profile-form'

export const EditProfileContent = () => {
  const { isLoading, data: user, isError } = useQuery(profileQueries.me())

  if (isLoading) {
    return <Loader className="mx-auto" />
  }

  if (isError) {
    return (
      <Typography variant="h2" className="text-error mb-2">
        Ошибка загрузки профиля
      </Typography>
    )
  }

  if (!user) {
    return (
      <Typography variant="h2" className="text-error mb-2">
        Профиль не найден
      </Typography>
    )
  }

  return (
    <div className="space-y-4">
      <EditAvatarForm avatar={user.avatar} />
      <EditProfileForm user={user} />
    </div>
  )
}
