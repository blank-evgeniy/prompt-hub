import { useMutation } from '@tanstack/react-query'

import { authApi } from '@/shared/api/services'
import { LoginDto } from '@/shared/api/types'
import { saveAccessToken } from '@/shared/utils/auth-tokens'

export const useLogin = () =>
  useMutation({
    mutationFn: (data: LoginDto) => authApi.login(data),
    onSuccess: (data) => {
      saveAccessToken(data.data.accessToken)
    },
  })
