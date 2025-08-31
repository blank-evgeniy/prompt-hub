import z from 'zod'

export const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
})

export const requiredOption = (message = 'Выберите значение') =>
  optionSchema.nullable().refine((val) => val !== null, { message })
