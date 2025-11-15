'use client'

import { LogOutIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { profileLinks } from '@/entities/profile'
import { Avatar } from '@/shared/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown'

import { useLogout } from '../../../api'
import { ProfileCardData } from '../../../model'

interface ProfileCardProps {
  data: ProfileCardData
  className?: string
}

export const ProfileCard = ({ className, data }: ProfileCardProps) => {
  const { mutate: logout, isPending } = useLogout()
  const { username, avatar } = data

  const [open, setOpen] = useState(false)

  if (!data) {
    return null
  }

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className={className}>
        <Avatar src={avatar?.url} backgroundColor={avatar?.color} />
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={2} align="end">
        <DropdownMenuLabel>{username}</DropdownMenuLabel>

        <DropdownMenuGroup>
          {profileLinks(username).map((link) => (
            <DropdownMenuItem key={link.href} asChild>
              <Link href={link.href}>
                {link.icon}
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          variant="destructive"
          onClick={() => logout()}
          disabled={isPending}
        >
          <LogOutIcon />
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
