import { PromptSchema } from '@/entities/prompt'
import { CreatePromptDto, PromptCategory } from '@/shared/api/types'

export const mapCreatePromptSchemaToCreatePromptDto = (
  values: PromptSchema
): CreatePromptDto => ({
  title: values.title.trim(),
  content: values.prompt.trim(),
  category: values.category.value as PromptCategory,
})
