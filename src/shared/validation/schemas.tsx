import z from 'zod'

export const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
})

export const requiredOption = (message = 'Выберите значение') =>
  z.custom<z.infer<typeof optionSchema>>(
    (val) => {
      if (val == null) return false
      return optionSchema.safeParse(val).success
    },
    { message }
  )

export const usernameSchema = z
  .string()
  .min(3, {
    message: 'Поле должно содержать не менее 3 символов',
  })
  .max(32, {
    message: 'Поле должно содержать не более 32 символов',
  })
  .regex(/^[a-zA-Z0-9_-]+$/, {
    message:
      'Поле может содержать только латинские буквы, цифры, символы "_" и "-"',
  })
