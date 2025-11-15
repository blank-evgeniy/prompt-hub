import {
  HeartIcon,
  ListIcon,
  PencilIcon,
  UserIcon,
  UserPenIcon,
} from 'lucide-react'
import { ReactNode } from 'react'

import { routes } from '@/shared/routes'

interface ProfileLink {
  label: string
  href: string
  icon: ReactNode
}

export const profileLinks = (username: string): ProfileLink[] => [
  {
    href: routes.public.user(username),
    label: 'Профиль',
    icon: <UserIcon />,
  },
  {
    href: routes.profile.edit,
    label: 'Редактировать',
    icon: <UserPenIcon />,
  },
  {
    href: routes.profile.myPrompts,
    label: 'Мои промпты',
    icon: <ListIcon />,
  },
  {
    href: routes.profile.createPrompt,
    label: 'Создать промпт',
    icon: <PencilIcon />,
  },
  {
    href: routes.profile.favorites,
    label: 'Избранное',
    icon: <HeartIcon />,
  },
]
