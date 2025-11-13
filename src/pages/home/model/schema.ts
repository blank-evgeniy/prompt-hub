import z from 'zod'

import {
  PromptCategory,
  PromptsSortBy,
  PromptsSortOrder,
} from '@/shared/api/types'

export const VALID_CATEGORIES: PromptCategory[] = [
  'TEXT',
  'CODE',
  'IMAGE',
  'OTHER',
]
export const VALID_SORT_BY: PromptsSortBy[] = [
  'createdAt',
  'title',
  'updatedAt',
]
export const VALID_ORDER: PromptsSortOrder[] = ['asc', 'desc']

export const promptsFiltersSchema = z.object({
  category: z.enum(VALID_CATEGORIES).nullable().default(null),
  sortBy: z.enum(VALID_SORT_BY).default('createdAt'),
  order: z.enum(VALID_ORDER).default('desc'),
})

export type PromptsFiltersSchema = z.infer<typeof promptsFiltersSchema>
