import { PromptCategory } from '@/shared/api/types'

import { promptCategoryMap } from './map'

export const getPromptCategoryLabel = (category: PromptCategory) =>
  promptCategoryMap[category]
