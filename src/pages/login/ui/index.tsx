import { routes } from '@/shared/configs/routes'
import { AppLink } from '@/shared/ui/app-link'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'

export const LoginPage = () => {
  return (
    <Card className="relative w-full max-w-md">
      <CardHeader>
        <h1 className="text-center text-3xl font-semibold">Вход</h1>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-4">
          <Input type="email" id="email" label="Почта" />
          <Input type="password" id="password" label="Пароль" />
        </div>

        <p className="text-center">
          Нет аккаунта? -{' '}
          <AppLink href={routes.auth.registration}>Зарегистрироваться</AppLink>
        </p>
      </CardContent>

      <CardFooter>
        <Button className="w-full">Войти</Button>
      </CardFooter>
    </Card>
  )
}
