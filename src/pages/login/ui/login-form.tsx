'use client'

import { useForm } from 'react-hook-form'

import { routes } from '@/shared/configs/routes'
import { AppLink } from '@/shared/ui/app-link'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { ButtonLoader } from '@/shared/ui/loaders'
import { FieldMessage } from '@/shared/ui/field-message'

import { LoginSchema } from '../model/login-schema'

interface LoginFormProps {
  form: ReturnType<typeof useForm<LoginSchema>>
  isLoading: boolean
  onValid: (values: LoginSchema) => void
}

export const LoginForm = ({ form, isLoading, onValid }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  return (
    <form onSubmit={handleSubmit(onValid)} className="w-full max-w-md">
      <Card className="relative">
        <CardHeader>
          <h1 className="text-center text-3xl font-semibold">Вход</h1>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-4">
            <Input
              type="email"
              id="email"
              label="Почта"
              aria-invalid={errors.email ? 'true' : 'false'}
              message={errors.email?.message}
              placeholder="Введите email"
              {...register('email')}
            />
            <Input
              type="password"
              id="password"
              label="Пароль"
              placeholder="Введите пароль"
              aria-invalid={errors.password ? 'true' : 'false'}
              message={errors.password?.message}
              {...register('password')}
            />
            {errors.root?.message && (
              <FieldMessage>{errors.root.message}</FieldMessage>
            )}
          </div>

          <p className="text-center">
            Нет аккаунта? -{' '}
            <AppLink href={routes.auth.registration}>
              Зарегистрироваться
            </AppLink>
          </p>
        </CardContent>

        <CardFooter>
          <Button className="w-full" disabled={isLoading}>
            Войти {isLoading && <ButtonLoader />}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
