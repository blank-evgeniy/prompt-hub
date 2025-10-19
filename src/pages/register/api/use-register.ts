import { useMutation } from '@tanstack/react-query'

import { authApi } from '@/shared/api/services'
import { saveAccessToken } from '@/shared/api/tokens'
import { RegisterDto } from '@/shared/api/types'
import { useAuthStore } from '@/store/auth'

export const useRegister = () => {
  const setUser = useAuthStore((s) => s.setUser)

  return useMutation({
    mutationFn: (data: RegisterDto) => authApi.register(data),
    onSuccess: (data) => {
      saveAccessToken(data.data.accessToken)
      setUser(data.data.user)
    },
  })
}
