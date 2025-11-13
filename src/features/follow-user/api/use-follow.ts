import { useMutation } from '@tanstack/react-query'

import { usersApi } from '@/shared/api/services'

export const useFollow = () => {
  return useMutation({
    mutationFn: (id: string) => usersApi.follow(id),
  })
}
