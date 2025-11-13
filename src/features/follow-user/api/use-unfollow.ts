import { useMutation } from '@tanstack/react-query'

import { usersApi } from '@/shared/api/services'

export const useUnfollow = () =>
  useMutation({
    mutationFn: (id: string) => usersApi.unfollow(id),
  })
