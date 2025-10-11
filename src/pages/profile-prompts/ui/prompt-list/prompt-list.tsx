'use client'

import { useQuery } from '@tanstack/react-query'

import { promptQueries } from '@/shared/api/services/prompt'
import { ListState } from '@/shared/ui/list-state'

import { mapProfilePromptsResponse } from '../../model'
import { PromptCard } from '../prompt-card'

export const PromptList = () => {
  const {
    data: prompts,
    isLoading,
    isError,
  } = useQuery(promptQueries.profileList())

  return (
    <ListState
      containerClassName="flex flex-col gap-6"
      items={prompts?.map(mapProfilePromptsResponse) || []}
      isLoading={isLoading}
      isError={isError}
    >
      {(prompt) => <PromptCard key={prompt.id} data={prompt} />}
    </ListState>
  )
}
