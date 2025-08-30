import axiosInstance from '../axios-instance'
import { UserResponseDto } from '../types'

export const profileApi = {
  me: async () =>
    (await axiosInstance.get<UserResponseDto>('/profile/me')).data,
  edit: async (data: Partial<UserResponseDto>) =>
    (await axiosInstance.patch<UserResponseDto>('/profile/edit', data)).data,
}
