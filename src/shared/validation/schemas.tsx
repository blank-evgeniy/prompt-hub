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
