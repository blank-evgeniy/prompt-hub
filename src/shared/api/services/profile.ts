import { queryOptions } from '@tanstack/react-query'

import axiosInstance from '../axios-instance'
import { UserResponseDto } from '../types'

export const profileApi = {
  me: async () =>
    (await axiosInstance.get<UserResponseDto>('/profile/me')).data,
  edit: async (data: Partial<UserResponseDto>) =>
    (await axiosInstance.patch<UserResponseDto>('/profile/edit', data)).data,
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
