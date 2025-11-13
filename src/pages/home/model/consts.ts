import { PromptsSortBy, PromptsSortOrder } from '@/shared/api/types'

export type PromptSortOptionValue = `${PromptsSortBy}-${PromptsSortOrder}`

export const promptsSortOptions: {
  label: string
  value: PromptSortOptionValue
}[] = [
  { label: 'Сначала новые', value: 'createdAt-desc' },
  { label: 'Сначала старые', value: 'createdAt-asc' },
  { label: 'По названию', value: 'title-asc' },
]
