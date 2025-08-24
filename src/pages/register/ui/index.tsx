import { routes } from '@/shared/configs/routes'
import { AppLink } from '@/shared/ui/app-link'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'

export const RegisterPage = () => {
  return (
    <Card className="relative w-full max-w-md">
      <CardHeader>
        <h1 className="text-center text-3xl font-semibold">Регистрация</h1>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-4">
          <Input type="email" id="email" label="Почта" />
          <Input type="password" id="password" label="Пароль" />
          <Input id="username" label="Имя пользователя" />
        </div>

        <p className="text-center">
          Уже есть аккаунт? - <AppLink href={routes.auth.login}>Войти</AppLink>
        </p>
      </CardContent>

      <CardFooter>
        <p className="text-center text-xs">
          Регистрируясь, вы соглашаетесь с{' '}
          <AppLink href={routes.public.privacy}>
            политикой конфиденциальности
          </AppLink>{' '}
          и{' '}
          <AppLink href={routes.public.terms}>условиями использования</AppLink>
        </p>

        <Button className="w-full">Создать аккаунт</Button>
      </CardFooter>
    </Card>
  )
}
