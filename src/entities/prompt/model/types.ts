import { PromptCategory } from '@/shared/api/types'

export type Prompt = {
  id: string
  title: string
  category: PromptCategory
  content: string
}
