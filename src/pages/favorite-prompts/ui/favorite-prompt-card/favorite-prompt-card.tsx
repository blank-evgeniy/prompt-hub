import Link from 'next/link'

import { BasePromptCard, Prompt } from '@/entities/prompt'
import { MiniUserCard, User } from '@/entities/user'
import { LikePrompt } from '@/features/like-prompt'
import { routes } from '@/shared/routes'
import { CopyButton } from '@/shared/ui/copy-button'

interface FavoritePromptCardProps {
  prompt: Prompt
  author: User
  isLiked: boolean
  onDislike?: () => void
}

export const FavoritePromptCard = ({
  prompt,
  author,
  isLiked,
  onDislike,
}: FavoritePromptCardProps) => {
  return (
    <BasePromptCard
      data={prompt}
      authorSlot={
        <Link
          className="hover:opacity-70"
          href={routes.public.user(author.name)}
        >
          <MiniUserCard data={author} />
        </Link>
      }
      actionsSlot={
        <>
          <CopyButton
            title="Копировать"
            aria-label="Копировать"
            text={prompt.content}
            size={'icon'}
            variant={'accent'}
          />
          <LikePrompt
            onDislike={onDislike}
            promptId={prompt.id}
            isLiked={isLiked}
          />
        </>
      }
    />
  )
}
