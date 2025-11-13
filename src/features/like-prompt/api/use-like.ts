import { useMutation } from '@tanstack/react-query'

import { promptApi } from '@/shared/api/services'

export const useLike = () =>
  useMutation({
    mutationFn: (id: string) => promptApi.like(id),
  })
