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

export interface PromptResponseWithAuthorDto extends PromptResponseDto {
  author: Pick<UserResponseDto, 'username' | 'avatarUrl' | 'id'>
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
