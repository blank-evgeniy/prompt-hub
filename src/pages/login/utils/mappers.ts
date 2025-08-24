import { LoginDto } from '@/shared/api/types'
import { LoginSchema } from '../model/login-schema'

export const mapLoginSchemaToLoginDto = (values: LoginSchema): LoginDto => ({
  email: values.email.trim(),
  password: values.password.trim(),
})
