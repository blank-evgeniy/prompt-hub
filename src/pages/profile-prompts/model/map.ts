import { PromptResponseDto } from '@/shared/api/types'

import { ProfilePrompt } from './types'

export const mapProfilePromptsResponse = (
  prompts: PromptResponseDto
): ProfilePrompt => ({
  id: prompts.id,
  title: prompts.title,
  category: prompts.category,
  content: prompts.content,
})
