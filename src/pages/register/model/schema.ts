import z from 'zod'

export const registerSchema = z.object({
  password: z
    .string()
    .min(6, { message: 'Поле должно содержать не менее 6 символов' })
    .max(32, { message: 'Поле должно содержать не более 32 символов' }),
  username: z
    .string()
    .min(3, {
      message: 'Поле должно содержать не менее 3 символов',
    })
    .max(32, {
      message: 'Поле должно содержать не более 32 символов',
    })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: 'Поле должно содержать только буквы и цифры',
    }),
})

export type RegisterSchema = z.infer<typeof registerSchema>
