import { useMutation, useQueryClient } from '@tanstack/react-query'

import { promptApi } from '@/shared/api/services'
import { promptQueries } from '@/shared/api/services/prompt'
import { CreatePromptDto, PromptResponseDto } from '@/shared/api/types'

export const useCreatePrompt = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreatePromptDto) => promptApi.create(data),
    onSuccess: (data) => {
      queryClient.setQueryData<PromptResponseDto[]>(
        promptQueries.profileListKey(),
        (old) => {
          if (!old) return old
          return [...old, data]
        }
      )
    },
  })
}
