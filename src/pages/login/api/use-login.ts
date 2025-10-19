import { useMutation } from '@tanstack/react-query'

import { authApi } from '@/shared/api/services'
import { saveAccessToken } from '@/shared/api/tokens/auth-tokens'
import { LoginDto } from '@/shared/api/types'
import { useAuthStore } from '@/store/auth'

export const useLogin = () => {
  const setUser = useAuthStore((s) => s.setUser)

  return useMutation({
    mutationFn: (data: LoginDto) => authApi.login(data),
    onSuccess: (data) => {
      saveAccessToken(data.data.accessToken)
      setUser(data.data.user)
    },
  })
}
