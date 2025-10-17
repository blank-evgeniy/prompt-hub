import { useMutation, useQueryClient } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { authApi, profileQueries } from '@/shared/api/services'
import { promptQueries } from '@/shared/api/services/prompt'
import { clearAccessToken } from '@/shared/api/tokens'
import { isProtectedRoute, routes } from '@/shared/routes'

export const useLogout = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const pathname = usePathname()

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSettled: () => {
      clearAccessToken()

      queryClient.removeQueries({
        queryKey: profileQueries.meKey(),
        exact: true,
      })
      queryClient.removeQueries({
        queryKey: promptQueries.profileListKey(),
        exact: true,
      })

      if (!pathname) {
        router.push(routes.public.home)
        return
      }

      if (isProtectedRoute(pathname)) {
        router.push(routes.public.home)
      }
    },
  })
}
