import { queryOptions } from '@tanstack/react-query'

import axiosInstance from '../axios-instance'
import {
  FollowerResponseDto,
  FollowingResponseDto,
  PromptResponseDto,
  UserResponseDto,
} from '../types'

export const usersApi = {
  getOne: async (username: string) =>
    (await axiosInstance.get<UserResponseDto>(`/users/${username}`)).data,

  getFollowers: async (username: string) =>
    (
      await axiosInstance.get<FollowerResponseDto[]>(
        `/users/${username}/followers`
      )
    ).data,

  getFollowing: async (username: string) =>
    (
      await axiosInstance.get<FollowingResponseDto[]>(
        `/users/${username}/following`
      )
    ).data,

  getPrompts: async (username: string) =>
    (await axiosInstance.get<PromptResponseDto[]>(`/users/${username}/prompts`))
      .data,

  follow: async (id: string) =>
    (await axiosInstance.post(`/users/${id}/follow`)).data,

  unfollow: async (id: string) =>
    (await axiosInstance.delete(`/users/${id}/follow`)).data,
}

export const usersQueries = {
  baseKey: 'users',

  oneKey: (username: string) => [usersQueries.baseKey, 'profile', username],
  one: (username: string) =>
    queryOptions({
      queryKey: usersQueries.oneKey(username),
      queryFn: () => usersApi.getOne(username),
      retry: 1,
    }),

  followersKey: (username: string) => [
    usersQueries.baseKey,
    'followers',
    username,
  ],
  followers: (username: string) =>
    queryOptions({
      queryKey: usersQueries.followersKey(username),
      queryFn: () => usersApi.getFollowers(username),
      retry: 1,
    }),

  followingKey: (username: string) => [
    usersQueries.baseKey,
    'following',
    username,
  ],
  following: (username: string) =>
    queryOptions({
      queryKey: usersQueries.followingKey(username),
      queryFn: () => usersApi.getFollowing(username),
      retry: 1,
    }),

  promptsKey: (username: string) => [usersQueries.baseKey, 'prompts', username],
  prompts: (username: string) =>
    queryOptions({
      queryKey: usersQueries.promptsKey(username),
      queryFn: () => usersApi.getPrompts(username),
      retry: 1,
    }),
}
