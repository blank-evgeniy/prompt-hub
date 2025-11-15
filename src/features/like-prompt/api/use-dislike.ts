import { useMutation, useQueryClient } from '@tanstack/react-query'

import { promptApi, promptQueries } from '@/shared/api/services'

export const useDislike = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => promptApi.dislike(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: promptQueries.favoritesListKey(),
      })
    },
  })
}
