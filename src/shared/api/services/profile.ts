import { queryOptions } from '@tanstack/react-query'

import axiosInstance from '../axios-instance'
import { UpdateAvatarDto, UpdateProfileDto, UserResponseDto } from '../types'

export const profileApi = {
  me: async () =>
    (await axiosInstance.get<UserResponseDto>('/profile/me')).data,
  edit: async (data: UpdateProfileDto) =>
    (await axiosInstance.patch<UserResponseDto>('/profile/edit', data)).data,
  editAvatar: async (data: UpdateAvatarDto) =>
    (await axiosInstance.patch<UserResponseDto>('/profile/avatar/edit', data))
      .data,
}

export const profileQueries = {
  baseKey: 'profile',

  meKey: () => [profileQueries.baseKey, 'me'],
  me: () =>
    queryOptions({
      queryKey: profileQueries.meKey(),
      queryFn: () => profileApi.me(),
      retry: 1,
    }),
}
