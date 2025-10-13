import { PromptCategory } from '../api/types'

export const promptCategoryOptions: { label: string; value: PromptCategory }[] =
  [
    { label: 'Код', value: 'CODE' },
    { label: 'Изображения', value: 'IMAGE' },
    { label: 'Текст', value: 'TEXT' },
    { label: 'Другое', value: 'OTHER' },
  ]
