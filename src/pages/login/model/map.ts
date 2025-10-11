import { LoginDto } from '@/shared/api/types'
import { LoginSchema } from './schema'

export const mapLoginSchemaToLoginDto = (values: LoginSchema): LoginDto => ({
  username: values.username.trim(),
  password: values.password.trim(),
})
