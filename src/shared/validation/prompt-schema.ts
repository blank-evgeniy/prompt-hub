import z from 'zod'

import { requiredOption } from './schemas'

export const promptSchema = z.object({
  prompt: z.string().min(3, { message: 'Введите текст промпта' }),
  title: z
    .string()
    .min(3, {
      message: 'Название не должно быть меньше 3 символов',
    })
    .max(50, {
      message: 'Название не должно превышать 50 символов',
    }),
  category: requiredOption('Выберите категорию'),
})

export type PromptSchema = z.infer<typeof promptSchema>
