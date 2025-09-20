'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { routes } from '@/shared/routes'
import { translateBackendError } from '@/shared/api/errors'

import {
  registerSchema,
  RegisterSchema,
  mapRegisterSchemaToRegisterDto,
} from '../model'
import { RegisterForm } from './register-form'
import { useRegister } from '../api'

export const RegisterPage = () => {
  const router = useRouter()

  const form = useForm<RegisterSchema>({
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
    resolver: zodResolver(registerSchema),
  })

  const { mutate, isPending } = useRegister()

  const onSubmit = (values: RegisterSchema) => {
    mutate(mapRegisterSchemaToRegisterDto(values), {
      onSuccess: () => router.push(routes.auth.login),
      onError: (error) =>
        form.setError('root', { message: translateBackendError(error) }),
    })
  }

  const onValid = (values: RegisterSchema) => {
    onSubmit(values)
  }

  return <RegisterForm form={form} isLoading={isPending} onValid={onValid} />
}
