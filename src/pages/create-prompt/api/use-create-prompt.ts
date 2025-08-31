import { promptsApi } from '@/shared/api/services'
import { CreatePromptDto } from '@/shared/api/types'
import { useMutation } from '@tanstack/react-query'

export const useCreatePrompt = () => {
  return useMutation({
    mutationFn: (data: CreatePromptDto) => promptsApi.create(data),
  })
}
