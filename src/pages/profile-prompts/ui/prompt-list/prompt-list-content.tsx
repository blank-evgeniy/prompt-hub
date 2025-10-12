'use client'

import { useQuery } from '@tanstack/react-query'

import { promptQueries } from '@/shared/api/services/prompt'
import { ListState } from '@/shared/ui/list-state'

import {
  mapProfilePromptsResponse,
  useProfilePromptsContext,
} from '../../model'
import { EditPromptModal } from '../edit-prompt-modal'
import { PromptCard } from '../prompt-card'

export const PromptListContent = () => {
  const { isEditModalOpen, editingPrompt, closeEditModal } =
    useProfilePromptsContext()

  const {
    data: prompts,
    isLoading,
    isError,
  } = useQuery(promptQueries.profileList())

  return (
    <>
      <ListState
        containerClassName="flex flex-col gap-4"
        items={prompts?.map(mapProfilePromptsResponse) || []}
        isLoading={isLoading}
        isError={isError}
      >
        {(prompt) => <PromptCard key={prompt.id} data={prompt} />}
      </ListState>

      {editingPrompt && (
        <EditPromptModal
          isOpen={isEditModalOpen}
          prompt={editingPrompt}
          onClose={closeEditModal}
        />
      )}
    </>
  )
}
