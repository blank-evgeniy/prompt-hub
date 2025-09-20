'use client'

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
import Link from 'next/link'
import { routes } from '@/app/routes'
import { LogOutIcon } from 'lucide-react'
import { useState } from 'react'

import { useLogout } from '../api'

interface ProfileCardProps {
  data: ProfileCardData
  className?: string
}

export const ProfileCard = ({ className, data }: ProfileCardProps) => {
  const { mutate, isPending } = useLogout()
  const { username, avatarUrl } = data

  const [open, setOpen] = useState(false)

  const fallbackName = username.slice(0, 1).toUpperCase()

  if (!data) {
    return null
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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

        <div className="flex flex-col gap-1 px-4">
          <Button
            asChild
            variant={'ghost'}
            className="justify-start text-start"
            onClick={() => setOpen(false)}
          >
            <Link href={routes.profile.createPrompt}>Создать промпт</Link>
          </Button>

          <Button
            asChild
            variant={'ghost'}
            className="justify-start text-start"
            onClick={() => setOpen(false)}
          >
            <Link href={routes.profile.myPrompts}>Мои промпты</Link>
          </Button>
        </div>

        <SheetFooter>
          <Button
            variant={'destructive'}
            disabled={isPending}
            onClick={() => mutate()}
          >
            <LogOutIcon />
            Выйти
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
