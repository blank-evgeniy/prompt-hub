import { useMutation, useQueryClient } from '@tanstack/react-query'

import { authApi, profileQueries } from '@/shared/api/services'
import { saveAccessToken } from '@/shared/api/tokens'
import { RegisterDto } from '@/shared/api/types'

export const useRegister = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: RegisterDto) => authApi.register(data),
    onSuccess: (data) => {
      saveAccessToken(data.data.accessToken)
      queryClient.removeQueries({ queryKey: profileQueries.meKey() })
    },
  })
}
