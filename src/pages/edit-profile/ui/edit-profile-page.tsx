import { Typography } from '@/shared/ui/typography'

import { EditProfileContent } from './edit-profile-content'

export const EditProfilePage = () => {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <Typography variant="h1" as="h1">
        Редактировать профиль
      </Typography>

      <EditProfileContent />
    </main>
  )
}
