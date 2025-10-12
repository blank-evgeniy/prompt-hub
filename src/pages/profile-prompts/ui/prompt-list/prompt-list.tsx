'use client'

import { ProfilePromptsProvider } from '../../model'
import { PromptListContent } from './prompt-list-content'

export const PromptList = () => {
  return (
    <ProfilePromptsProvider>
      <PromptListContent />
    </ProfilePromptsProvider>
  )
}
