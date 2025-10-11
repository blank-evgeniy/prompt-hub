import { RegisterDto } from '@/shared/api/types'
import { RegisterSchema } from './schema'

export const mapRegisterSchemaToRegisterDto = (
  values: RegisterSchema
): RegisterDto => ({
  username: values.username.trim(),
  password: values.password.trim(),
})
