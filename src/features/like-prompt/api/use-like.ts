import { useMutation, useQueryClient } from '@tanstack/react-query'

import { promptApi, promptQueries } from '@/shared/api/services'

export const useLike = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => promptApi.like(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: promptQueries.favoritesListKey(),
      })
    },
  })
}
