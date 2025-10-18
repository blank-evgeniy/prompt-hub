import { isAxiosError } from 'axios'

import { Card, CardContent } from '@/shared/ui/card'
import { Loader } from '@/shared/ui/loaders'
import { Typography } from '@/shared/ui/typography'

import { useUserProfile } from '../../model'
import { ProfileActions } from '../profile-actions'
import { ProfileHeader } from '../profile-header'
import { ProfileStats } from '../profile-stats'

export const ProfilePageState = () => {
  const { error, isError, isLoading, isCurrentUser } = useUserProfile()

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader className="size-8" />
      </div>
    )
  }

  if (isError) {
    let isNotFound = false

    if (isAxiosError(error) && error.response?.status === 404) {
      isNotFound = true
    }

    return (
      <Card>
        <CardContent className="py-8 text-center">
          <Typography variant="h2" className="text-error mb-2">
            {isNotFound ? 'Профиль не найден' : 'Ошибка загрузки профиля'}
          </Typography>

          <Typography variant="description">
            Не удалось загрузить информацию о профиле
          </Typography>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <ProfileHeader />
      <ProfileStats />
      {isCurrentUser && <ProfileActions />}
    </div>
  )
}
