import { PromptCategory } from '@/shared/api/types'

export interface ProfilePrompt {
  id: string
  title: string
  category: PromptCategory
  content: string
}
