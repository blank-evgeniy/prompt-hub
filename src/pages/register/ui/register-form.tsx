'use client'

import { useForm } from 'react-hook-form'

import { routes } from '@/shared/routes'
import { AppLink } from '@/shared/ui/app-link'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { ButtonLoader } from '@/shared/ui/loaders'
import { FieldMessage } from '@/shared/ui/field-message'

import { RegisterSchema } from '../model'

interface RegisterFormProps {
  form: ReturnType<typeof useForm<RegisterSchema>>
  isLoading: boolean
  onValid: (values: RegisterSchema) => void
}

export const RegisterForm = ({
  form,
  isLoading,
  onValid,
}: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  return (
    <form onSubmit={handleSubmit(onValid)} className="w-full max-w-md">
      <Card className="bg-base-100/70 relative">
        <CardHeader>
          <h1 className="text-center text-3xl font-semibold">Регистрация</h1>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-4">
            <Input
              id="username"
              label="Имя пользователя"
              placeholder="Введите имя пользователя"
              aria-invalid={errors.username ? 'true' : 'false'}
              message={errors.username?.message}
              autoComplete="username"
              {...register('username')}
            />
            <Input
              type="password"
              id="password"
              label="Пароль"
              placeholder="Введите пароль"
              aria-invalid={errors.password ? 'true' : 'false'}
              message={errors.password?.message}
              autoComplete="new-password"
              {...register('password')}
            />

            {errors.root?.message && (
              <FieldMessage>{errors.root.message}</FieldMessage>
            )}
          </div>

          <p className="text-center">
            Уже есть аккаунт? -{' '}
            <AppLink href={routes.auth.login}>Войти</AppLink>
          </p>
        </CardContent>

        <CardFooter>
          <p className="text-center text-xs">
            Регистрируясь, вы соглашаетесь с{' '}
            <AppLink href={routes.public.privacy}>
              политикой конфиденциальности
            </AppLink>{' '}
            и{' '}
            <AppLink href={routes.public.terms}>
              условиями использования
            </AppLink>
          </p>

          <Button className="w-full" type="submit" disabled={isLoading}>
            Создать аккаунт
            {isLoading && <ButtonLoader />}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
