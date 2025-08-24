import axiosInstance from '../axios-instance'
import {
  FollowerResponseDto,
  FollowingResponseDto,
  PromptResponseDto,
  UserResponseDto,
} from '../types'

export const usersApi = {
  getOne: (id: string) => axiosInstance.get<UserResponseDto>(`/users/${id}`),
  getFollowers: (id: string) =>
    axiosInstance.get<FollowerResponseDto[]>(`/users/${id}/followers`),
  getFollowing: (id: string) =>
    axiosInstance.get<FollowingResponseDto[]>(`/users/${id}/following`),
  getPrompts: (id: string) =>
    axiosInstance.get<PromptResponseDto[]>(`/users/${id}/prompts`),
  follow: (id: string) => axiosInstance.post(`/users/${id}/follow`),
  unfollow: (id: string) => axiosInstance.delete(`/users/${id}/follow`),
}
