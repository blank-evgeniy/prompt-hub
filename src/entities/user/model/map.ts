import { FollowerResponseDto, UserResponseDto } from '@/shared/api/types'

import { User } from './types'

export const mapUserResponse = (data: UserResponseDto): User => ({
  name: data.username,
  avatar: data.avatar,
  description: data.bio,
})

export const mapFollowerResponse = (data: FollowerResponseDto): User => ({
  name: data.username,
  avatar: data.avatar,
  description: data.bio,
})

export const mapPromptAuthorResponse = (
  data: Pick<UserResponseDto, 'username' | 'avatar' | 'id'>
): User => ({
  id: data.id,
  name: data.username,
  avatar: data.avatar,
})
