'use client'

import { useLogout } from '@/shared/hooks/queries'
import { Button } from '@/shared/ui/button'
import { ProfileCardData } from '../types'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/shared/ui/sheet'

interface ProfileCardProps {
  data: ProfileCardData
  className?: string
}

export const ProfileCard = ({ className, data }: ProfileCardProps) => {
  const { mutate, isPending } = useLogout()
  const { username, avatarUrl } = data

  const fallbackName = username.slice(0, 1).toUpperCase()

  if (!data) {
    return null
  }

  return (
    <Sheet>
      <SheetTrigger className={className}>
        <Avatar>
          {avatarUrl && <AvatarImage src={avatarUrl} />}
          <AvatarFallback>{fallbackName}</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{username}</SheetTitle>
        </SheetHeader>

        <SheetFooter>
          <Button
            variant={'destructive'}
            disabled={isPending}
            onClick={() => mutate()}
          >
            Выйти
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
