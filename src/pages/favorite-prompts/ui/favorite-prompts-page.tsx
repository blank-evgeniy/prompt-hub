'use client'

import { Typography } from '@/shared/ui/typography'

import { FavoritePromptsList } from './favorite-prompts-list'

export const FavoritePromptsPage = () => {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <Typography variant={'h1'} as="h1">
        Избранные промпты
      </Typography>

      <FavoritePromptsList />
    </main>
  )
}
