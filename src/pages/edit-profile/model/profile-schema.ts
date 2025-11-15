import z from 'zod'

import { usernameSchema } from '@/shared/validation'

export const profileSchema = z.object({
  username: usernameSchema,
  bio: z.string().max(500, {
    message: 'Поле должно содержать не более 500 символов',
  }),
})

export type ProfileSchema = z.infer<typeof profileSchema>
