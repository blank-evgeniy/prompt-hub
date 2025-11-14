import { BasePromptCard, Prompt } from '@/entities/prompt'
import { LikePrompt } from '@/features/like-prompt'
import { CopyButton } from '@/shared/ui/copy-button'

interface PromptCardProps {
  prompt: Prompt

  isLiked: boolean
}

export const PromptCard = ({ prompt, isLiked }: PromptCardProps) => {
  return (
    <BasePromptCard
      data={prompt}
      actionsSlot={
        <>
          <CopyButton
            title="Копировать"
            aria-label="Копировать"
            text={prompt.content}
            size={'icon'}
            variant={'accent'}
          />
          <LikePrompt promptId={prompt.id} isLiked={isLiked} />
        </>
      }
    />
  )
}
