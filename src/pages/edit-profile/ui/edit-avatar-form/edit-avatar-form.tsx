import { TrashIcon, UserIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Card, CardContent, CardHeader } from '@/shared/ui/card'
import { Loader } from '@/shared/ui/loaders'
import { Typography } from '@/shared/ui/typography'

import { useEditAvatar } from '../../api'
import { AVATARS } from '../../model'

interface EditAvatarFormProps {
  userAvatarUrl?: string | null
}

export const EditAvatarForm = ({ userAvatarUrl }: EditAvatarFormProps) => {
  const { mutate, isPending } = useEditAvatar()

  return (
    <Card>
      <CardHeader>
        <Typography variant="h2" className="text-center">
          Аватар
        </Typography>
      </CardHeader>

      <CardContent className="flex flex-row gap-6">
        <Avatar className="size-32 border-2">
          <AvatarImage src={userAvatarUrl} />
          <AvatarFallback>
            <UserIcon className="size-14" />
          </AvatarFallback>
          {isPending && (
            <div className="bg-overlay absolute inset-0 flex items-center justify-center">
              <Loader className="size-10" />
            </div>
          )}
        </Avatar>

        <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {AVATARS.map((avatarUrl) => (
            <AvatarSelect
              key={avatarUrl}
              avatarUrl={avatarUrl}
              onSelect={(avatarUrl) => mutate({ avatarUrl })}
              disabled={isPending}
            />
          ))}

          <AvatarSelect
            avatarUrl={null}
            onSelect={(avatarUrl) => mutate({ avatarUrl })}
            disabled={isPending}
          />
        </div>
      </CardContent>
    </Card>
  )
}

interface AvatarSelectProps {
  avatarUrl: string | null
  onSelect: (avatarUrl: string | null) => void
  disabled?: boolean
}

const AvatarSelect = ({ avatarUrl, disabled, onSelect }: AvatarSelectProps) => {
  return (
    <button
      onClick={() => onSelect(avatarUrl)}
      disabled={disabled}
      className="aspect-square size-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Avatar className="hover:border-primary hover:stroke-primary size-full border-2">
        {avatarUrl && <AvatarImage src={avatarUrl} />}
        <AvatarFallback className="flex flex-col gap-1 text-xs">
          <TrashIcon className="size-6" />
          Удалить
        </AvatarFallback>
      </Avatar>
    </button>
  )
}
