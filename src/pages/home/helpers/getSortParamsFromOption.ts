import { PromptsSortBy, PromptsSortOrder } from '@/shared/api/types'

import { PromptSortOptionValue } from '../model'

export const getSortParamsFromOption = (
  option: PromptSortOptionValue
): { sortBy: PromptsSortBy; sortOrder: PromptsSortOrder } => {
  const [sortBy, sortOrder] = option.split('-') as [
    PromptsSortBy,
    PromptsSortOrder,
  ]
  return { sortBy, sortOrder }
}
