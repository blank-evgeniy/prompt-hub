import { UserResponseDto } from './user'

export type PromptCategory = 'TEXT' | 'IMAGE' | 'CODE' | 'OTHER'

export interface PromptResponseDto {
  id: string
  title: string
  content: string
  category: PromptCategory
  authorId: string
  createdAt: string
  updatedAt: string
  likeCount: number
  isLiked: boolean
}

export interface GetPromptsParams {
  limit?: number
  page?: number
  category?: PromptCategory
  sortBy?: 'title' | 'createdAt' | 'updatedAt'
  order?: 'asc' | 'desc'
}

export interface PromptResponseWithAuthorDto extends PromptResponseDto {
  author: Pick<UserResponseDto, 'username' | 'avatar' | 'id'>
}

export interface CreatePromptDto {
  title: string
  content: string
  category: PromptCategory
}

export interface UpdatePromptDto {
  title?: string
  content?: string
  category?: PromptCategory
}
