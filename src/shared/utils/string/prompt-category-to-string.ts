import { PromptCategory } from '@/shared/api/types'

export const promptCategoryToString = (category: PromptCategory) =>
  ({
    CODE: 'Код',
    IMAGE: 'Изображения',
    TEXT: 'Текст',
    OTHER: 'Другое',
  })[category]
