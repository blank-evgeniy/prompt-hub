import { useMutation, useQueryClient } from '@tanstack/react-query'

import { authApi, profileQueries } from '@/shared/api/services'
import { LoginDto } from '@/shared/api/types'
import { saveAccessToken } from '@/shared/api/tokens/auth-tokens'

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: LoginDto) => authApi.login(data),
    onSuccess: (data) => {
      saveAccessToken(data.data.accessToken)
      queryClient.removeQueries({ queryKey: profileQueries.meKey() })
    },
  })
}
