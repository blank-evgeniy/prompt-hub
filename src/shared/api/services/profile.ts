import axiosInstance from '../axios-instance'
import { UserResponseDto } from '../types'

export const profileApi = {
  me: () => axiosInstance.get<UserResponseDto>('/profile/me'),
  edit: (data: Partial<UserResponseDto>) =>
    axiosInstance.patch<UserResponseDto>('/profile/edit', data),
}
