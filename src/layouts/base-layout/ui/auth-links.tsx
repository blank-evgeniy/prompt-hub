import Link from 'next/link'

import { routes } from '@/shared/routes'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/utils/cn'

export const AuthLinks = ({ className }: { className?: string }) => (
  <div className={cn('flex items-center gap-4', className)}>
    <Button asChild variant={'ghost'}>
      <Link href={routes.auth.registration}>Регистрация</Link>
    </Button>
    <Button asChild>
      <Link href={routes.auth.login}>Вход</Link>
    </Button>
  </div>
)
