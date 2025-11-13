import { AvatarInfo } from '@/shared/api/types'

export type User = {
  id?: string
  name: string
  avatar?: AvatarInfo
  description?: string | null
}
