import { InfiniteData, useQueryClient } from '@tanstack/react-query'

import { promptQueries } from '@/shared/api/services'
import { PromptResponseWithAuthorDto } from '@/shared/api/types'

export const useRemoveFromFavoritesCache = () => {
  const queryClient = useQueryClient()

  const remove = (promptId: string) =>
    queryClient.setQueryData<InfiniteData<PromptResponseWithAuthorDto[]>>(
      promptQueries.favoritesListKey(),
      (old) => {
        if (!old) return old

        const filtered = {
          ...old,
          pages: old.pages.map((page) =>
            page.filter((prompt) => prompt.id !== promptId)
          ),
        }

        console.log(filtered)
        return filtered
      }
    )

  return remove
}
