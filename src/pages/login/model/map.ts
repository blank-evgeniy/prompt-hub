import { LoginDto } from '@/shared/api/types'
import { LoginSchema } from './schema'

export const mapLoginSchemaToLoginDto = (values: LoginSchema): LoginDto => ({
  email: values.email.trim(),
  password: values.password.trim(),
})
