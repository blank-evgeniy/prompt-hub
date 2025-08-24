import { useMutation, useQueryClient } from '@tanstack/react-query'

import { authApi } from '@/shared/api/services'
import { clearAccessToken } from '@/shared/utils/auth-tokens'

import { queryKeyService } from './query-key-service'

export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      clearAccessToken()
      queryClient.setQueryData(queryKeyService.getProfile(), null)
    },
  })
}
