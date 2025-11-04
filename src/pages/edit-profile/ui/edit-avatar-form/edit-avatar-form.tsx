import { TrashIcon, UserIcon } from 'lucide-react'
import { useState } from 'react'

import { AvatarInfo } from '@/shared/api/types'
import { Avatar } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'
import { Typography } from '@/shared/ui/typography'

import { useEditAvatar } from '../../api'
import { AVATAR_BG_COLORS, AVATARS } from '../../model'

interface EditAvatarFormProps {
  avatar?: AvatarInfo | null
}

export const EditAvatarForm = ({ avatar }: EditAvatarFormProps) => {
  const { mutate, isPending } = useEditAvatar()

  const [avatarUrl, setAvatarUrl] = useState(avatar?.url)
  const [avatarColor, setAvatarColor] = useState(avatar?.color)

  const handleSubmit = () => {
    mutate({ url: avatarUrl ?? null, color: avatarColor })
  }

  const handleDelete = () => {
    mutate(
      { url: null, color: null },
      {
        onSuccess: () => {
          setAvatarUrl(null)
          setAvatarColor(null)
        },
      }
    )
  }

  return (
    <Card>
      <CardHeader>
        <Typography variant="h2" className="text-center">
          Аватар
        </Typography>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <Avatar
          size={'2xl'}
          src={avatarUrl}
          backgroundColor={avatarColor}
          className="mx-auto"
        />

        <div className="flex flex-col gap-4">
          <Typography variant="h3">Изображение</Typography>
          <div className="flex gap-3">
            {AVATARS.map((avatar, index) => (
              <button key={index}>
                <Avatar
                  size={'md'}
                  src={avatar}
                  className={`cursor-pointer border-2 ${
                    avatarUrl === avatar
                      ? 'border-accent'
                      : 'border-transparent'
                  }`}
                  onClick={() => {
                    setAvatarUrl(avatar)
                  }}
                  variant={'square'}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography variant="h3">Фон</Typography>
          <div className="flex gap-3">
            {AVATAR_BG_COLORS.map((color, index) => (
              <button key={index}>
                <div
                  className={`flex size-10 cursor-pointer items-center justify-center rounded-md border-2 ${color} ${
                    avatarUrl === undefined && avatarColor === color
                      ? 'border-accent'
                      : 'border-transparent'
                  } `}
                  onClick={() => {
                    setAvatarColor(color)
                  }}
                >
                  <UserIcon className="size-6 text-black" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-row justify-end">
        <Button
          variant="destructive"
          disabled={isPending}
          onClick={handleDelete}
        >
          <TrashIcon />
          Удалить аватар
        </Button>

        <Button
          type="submit"
          disabled={isPending}
          isLoading={isPending}
          onClick={handleSubmit}
        >
          Сохранить изменения
        </Button>
      </CardFooter>
    </Card>
  )
}
