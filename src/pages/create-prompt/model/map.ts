import { CreatePromptDto, PromptCategory } from '@/shared/api/types'
import { PromptSchema } from '@/shared/validation'

export const mapCreatePromptSchemaToCreatePromptDto = (
  values: PromptSchema
): CreatePromptDto => ({
  title: values.title.trim(),
  content: values.prompt.trim(),
  category: values.category.value as PromptCategory,
})
