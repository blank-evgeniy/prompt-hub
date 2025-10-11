import z from 'zod'

export const loginSchema = z.object({
  password: z.string({ message: 'Введите пароль' }),
  username: z.string({ message: 'Введите логин' }),
})

export type LoginSchema = z.infer<typeof loginSchema>
