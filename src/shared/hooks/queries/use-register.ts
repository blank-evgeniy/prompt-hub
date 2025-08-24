import { useMutation } from '@tanstack/react-query'

import { authApi } from '@/shared/api/services'
import { RegisterDto } from '@/shared/api/types'

export const useRegister = () =>
  useMutation({
    mutationFn: (data: RegisterDto) => authApi.register(data),
  })
