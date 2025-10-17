'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { translateBackendError } from '@/shared/api/errors'
import { routes } from '@/shared/routes'

import { useRegister } from '../api'
import {
  mapRegisterSchemaToRegisterDto,
  RegisterSchema,
  registerSchema,
} from '../model'
import { RegisterForm } from './register-form'

export const RegisterPage = () => {
  const router = useRouter()

  const form = useForm<RegisterSchema>({
    defaultValues: {
      password: '',
      username: '',
    },
    resolver: zodResolver(registerSchema),
  })

  const { mutate, isPending } = useRegister()

  const onSubmit = (values: RegisterSchema) => {
    mutate(mapRegisterSchemaToRegisterDto(values), {
      onSuccess: () => router.replace(routes.public.home),
      onError: (error) =>
        form.setError('root', { message: translateBackendError(error) }),
    })
  }

  const onValid = (values: RegisterSchema) => {
    onSubmit(values)
  }

  return <RegisterForm form={form} isLoading={isPending} onValid={onValid} />
}
