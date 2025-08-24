import axiosInstance from '../axios-instance'
import {
  CreatePromptDto,
  PromptCategory,
  PromptResponseDto,
  PromptResponseWithAuthorDto,
  UpdatePromptDto,
} from '../types'

export const promptsApi = {
  list: (params?: {
    limit?: number
    page?: number
    category?: PromptCategory
    sortBy?: 'title' | 'createdAt' | 'updatedAt'
    order?: 'asc' | 'desc'
  }) => axiosInstance.get<PromptResponseWithAuthorDto[]>('/prompt', { params }),
  get: (id: string) =>
    axiosInstance.get<PromptResponseWithAuthorDto>(`/prompt/${id}`),
  create: (data: CreatePromptDto) =>
    axiosInstance.post<PromptResponseDto>('/prompt', data),
  update: (id: string, data: UpdatePromptDto) =>
    axiosInstance.patch<PromptResponseDto>(`/prompt/${id}`, data),
  remove: (id: string) => axiosInstance.delete(`/prompt/${id}`),
  like: (id: string) => axiosInstance.post(`/prompts/${id}/like`),
  dislike: (id: string) => axiosInstance.post(`/prompts/${id}/dislike`),
  removeReaction: (id: string) => axiosInstance.delete(`/prompts/${id}/like`),
}
