import { queryOptions } from '@tanstack/react-query'
import axiosInstance from '../axios-instance'
import {
  CreatePromptDto,
  PromptCategory,
  PromptResponseDto,
  PromptResponseWithAuthorDto,
  UpdatePromptDto,
} from '../types'

export const promptApi = {
  list: async (params?: {
    limit?: number
    page?: number
    category?: PromptCategory
    sortBy?: 'title' | 'createdAt' | 'updatedAt'
    order?: 'asc' | 'desc'
  }) =>
    (
      await axiosInstance.get<PromptResponseWithAuthorDto[]>('/prompt', {
        params,
      })
    ).data,
  profileList: async () =>
    (await axiosInstance.get<PromptResponseDto[]>('/prompt/me')).data,
  get: async (id: string) =>
    (await axiosInstance.get<PromptResponseWithAuthorDto>(`/prompt/${id}`))
      .data,
  create: async (data: CreatePromptDto) =>
    (await axiosInstance.post<PromptResponseDto>('/prompt', data)).data,
  update: async (id: string, data: UpdatePromptDto) =>
    (await axiosInstance.patch<PromptResponseDto>(`/prompt/${id}`, data)).data,
  remove: async (id: string) =>
    (await axiosInstance.delete(`/prompt/${id}`)).data,
  like: async (id: string) =>
    (await axiosInstance.post(`/prompts/${id}/like`)).data,
  dislike: async (id: string) =>
    (await axiosInstance.post(`/prompts/${id}/dislike`)).data,
  removeReaction: async (id: string) =>
    (await axiosInstance.delete(`/prompts/${id}/like`)).data,
}

export const promptQueries = {
  baseKey: () => ['prompts'],

  profileListKey: () => [...promptQueries.baseKey(), 'list'],
  profileList: () =>
    queryOptions({
      queryKey: promptQueries.profileListKey(),
      queryFn: promptApi.profileList,
    }),
}
