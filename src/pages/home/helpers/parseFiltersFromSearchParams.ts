import { promptsFiltersSchema } from '../model'

export function parseFiltersFromSearchParams(params: URLSearchParams) {
  const raw = Object.fromEntries(params.entries())
  const result = promptsFiltersSchema.safeParse(raw)

  if (result.success) {
    return result.data
  }

  console.warn(
    'Invalid filters in URL, fallback to defaults:',
    result.error.issues
  )

  return promptsFiltersSchema.parse({})
}
