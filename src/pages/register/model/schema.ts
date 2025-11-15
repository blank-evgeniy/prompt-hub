import z from 'zod'

import { usernameSchema } from '@/shared/validation'

export const registerSchema = z.object({
  password: z
    .string()
    .min(6, { message: 'Поле должно содержать не менее 6 символов' })
    .max(32, { message: 'Поле должно содержать не более 32 символов' }),
  username: usernameSchema,
})

export type RegisterSchema = z.infer<typeof registerSchema>
