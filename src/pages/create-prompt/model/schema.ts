import { requiredOption } from '@/shared/validation'
import z from 'zod'

export const createPromptSchema = z.object({
  prompt: z.string().min(3, { message: 'Введите текст промпта' }),
  title: z.string().min(1, { message: 'Введите название промпта' }).max(50, {
    message: 'Название не должно превышать 50 символов',
  }),
  category: requiredOption('Выберите категорию'),
})

export type CreatePromptSchema = z.infer<typeof createPromptSchema>
