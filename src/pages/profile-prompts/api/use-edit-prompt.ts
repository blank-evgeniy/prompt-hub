import { useMutation, useQueryClient } from '@tanstack/react-query'

import { promptApi } from '@/shared/api/services'
import { promptQueries } from '@/shared/api/services/prompt'
import { PromptResponseDto, UpdatePromptDto } from '@/shared/api/types'

export const useEditPrompt = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdatePromptDto) => promptApi.update(id, data),
    onSuccess: (updatedPrompt) => {
      queryClient.setQueryData<PromptResponseDto[]>(
        promptQueries.profileListKey(),
        (old) => {
          if (!old) return old
          return old.map((prompt) =>
            prompt.id === id ? { ...prompt, ...updatedPrompt } : prompt
          )
        }
      )
    },
  })
}
