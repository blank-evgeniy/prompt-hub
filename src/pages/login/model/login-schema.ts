import z from 'zod'

export const loginSchema = z.object({
  password: z.string(),
  email: z.email({ message: 'Некорректная почта' }),
})

export type LoginSchema = z.infer<typeof loginSchema>
