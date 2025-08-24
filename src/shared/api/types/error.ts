export interface BackendError {
  message: string
  errors?: {
    [field: string]: string | string[]
  }
  code?: string
}

export interface FieldError {
  field: string
  message: string
}

export interface TranslatedError {
  message: string
  fieldErrors?: FieldError[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  originalError?: any
}
