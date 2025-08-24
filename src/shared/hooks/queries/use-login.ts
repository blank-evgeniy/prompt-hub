import { useMutation, useQueryClient } from '@tanstack/react-query'

import { authApi } from '@/shared/api/services'
import { LoginDto } from '@/shared/api/types'
import { saveAccessToken } from '@/shared/utils/auth-tokens'

import { queryKeyService } from './query-key-service'

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: LoginDto) => authApi.login(data),
    onSuccess: (data) => {
      saveAccessToken(data.data.accessToken)
      queryClient.removeQueries({ queryKey: queryKeyService.getProfile() })
    },
  })
}
