import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { routes } from '@/shared/routes'
import { useAuthStore } from '@/store/auth'

export const useAuthToast = () => {
  const isAuth = useAuthStore((s) => s.isAuth)
  const router = useRouter()

  const ensureAuth = () => {
    if (isAuth) return true

    toast.error('Войдите в аккаунт', {
      action: {
        label: 'Войти',
        onClick: () => router.push(routes.auth.login),
      },
    })

    return false
  }

  return { isAuth, ensureAuth }
}
