import { useMutation, useQueryClient } from '@tanstack/react-query'

import { authApi, profileQueries } from '@/shared/api/services'
import { clearAccessToken } from '@/shared/api/tokens/auth-tokens'

export const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      clearAccessToken()
      queryClient.setQueryData(profileQueries.meKey(), null)
    },
  })
}
