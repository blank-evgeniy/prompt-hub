'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { translateBackendError } from '@/shared/api/errors'
import { routes } from '@/shared/routes'

import { useLogin } from '../api'
import { LoginSchema, loginSchema, mapLoginSchemaToLoginDto } from '../model'
import { LoginForm } from './login-form'

export const LoginPage = () => {
  const router = useRouter()

  const form = useForm<LoginSchema>({
    defaultValues: {
      username: '',
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
