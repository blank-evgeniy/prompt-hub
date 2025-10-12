import { useMutation, useQueryClient } from '@tanstack/react-query'

import { promptApi } from '@/shared/api/services'
import { promptQueries } from '@/shared/api/services/prompt'
import { PromptResponseDto } from '@/shared/api/types'

export const useDeletePrompt = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => promptApi.remove(id),
    onSuccess: (data, variables) => {
      queryClient.setQueryData<PromptResponseDto[]>(
        promptQueries.profileListKey(),
        (old) => {
          if (!old) return old
          return old.filter((prompt) => prompt.id !== variables)
        }
      )
    },
  })
}
