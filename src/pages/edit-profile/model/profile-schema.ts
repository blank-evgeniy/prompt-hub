import z from 'zod'

export const profileSchema = z.object({
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
  bio: z.string().max(500, {
    message: 'Поле должно содержать не более 500 символов',
  }),
})

export type ProfileSchema = z.infer<typeof profileSchema>
