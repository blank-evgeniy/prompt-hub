import { PromptCategory, PromptResponseDto } from '@/shared/api/types'

import { Prompt } from './types'

export const promptCategoryMap: Record<PromptCategory, string> = {
  TEXT: 'Текст',
  CODE: 'Код',
  IMAGE: 'Изображение',
  OTHER: 'Другое',
}

export const mapPromptResponse = (prompt: PromptResponseDto): Prompt => ({
  id: prompt.id,
  title: prompt.title,
  content: prompt.content,
  category: prompt.category,
})
