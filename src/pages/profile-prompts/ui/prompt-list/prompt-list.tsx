'use client'

import { useQuery } from '@tanstack/react-query'

import { promptQueries } from '@/shared/api/services/prompt'
import { ListState } from '@/shared/ui/list-state'

import { mapProfilePromptsResponse } from '../../model'
import { PromptCard } from '../prompt-card'
import { useDeletePrompt } from '../../api'

export const PromptList = () => {
  const {
    data: prompts,
    isLoading,
    isError,
  } = useQuery(promptQueries.profileList())

  const { mutate, isPending } = useDeletePrompt()

  return (
    <ListState
      containerClassName="grid lg:grid-cols-2 grid-cols-1 gap-6"
      items={prompts?.map(mapProfilePromptsResponse) || []}
      isLoading={isLoading}
      isError={isError}
    >
      {(prompt) => (
        <PromptCard
          onDelete={mutate}
          isDeleting={isPending}
          key={prompt.id}
          data={prompt}
        />
      )}
    </ListState>
  )
}
