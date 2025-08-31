import { CreatePromptDto, PromptCategory } from '@/shared/api/types'
import { CreatePromptSchema } from '../model/schema'

export const mapCreatePromptSchemaToCreatePromptDto = (
  values: CreatePromptSchema
): CreatePromptDto => ({
  title: values.title.trim(),
  content: values.prompt.trim(),
  category: values.category?.value as PromptCategory,
})
