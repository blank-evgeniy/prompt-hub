import { useMutation } from '@tanstack/react-query'

import { promptApi } from '@/shared/api/services'

export const useDislike = () =>
  useMutation({
    mutationFn: (id: string) => promptApi.dislike(id),
  })
