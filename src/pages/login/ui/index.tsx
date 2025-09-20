'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { routes } from '@/app/routes'
import { translateBackendError } from '@/shared/api/errors'

import { LoginForm } from './login-form'
import { loginSchema, LoginSchema } from '../model/login-schema'
import { mapLoginSchemaToLoginDto } from '../utils/mappers'
import { useLogin } from '../api'

export const LoginPage = () => {
  const router = useRouter()

  const form = useForm<LoginSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  const { mutate, isPending } = useLogin()

  const onValid = (values: LoginSchema) => {
    mutate(mapLoginSchemaToLoginDto(values), {
      onSuccess: () => router.push(routes.public.home),
      onError: (error) =>
        form.setError('root', { message: translateBackendError(error) }),
    })
  }

  return <LoginForm form={form} isLoading={isPending} onValid={onValid} />
}
