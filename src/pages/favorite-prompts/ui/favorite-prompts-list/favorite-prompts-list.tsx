'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { mapPromptResponse } from '@/entities/prompt'
import { mapPromptAuthorResponse } from '@/entities/user'
import { promptQueries } from '@/shared/api/services'
import { ListState } from '@/shared/ui/list-state'

import { useRemoveFromFavoritesCache } from '../../helpers'
import { FavoritePromptCard } from '../favorite-prompt-card'

export const FavoritePromptsList = () => {
  const {
    data: prompts,
    isLoading,
    isFetchingNextPage,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(promptQueries.favoritesList())
  const { ref, inView } = useInView({ threshold: 0.5 })

  const removePrompt = useRemoveFromFavoritesCache()

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage])

  return (
    <>
      <ListState
        containerClassName="flex flex-col gap-4"
        items={prompts ?? []}
        isLoading={isLoading}
        isLoadingMore={isFetchingNextPage}
        isError={isError}
      >
        {(prompt) => (
          <FavoritePromptCard
            key={prompt.id}
            isLiked={prompt.isLiked}
            onDislike={() => removePrompt(prompt.id)}
            prompt={mapPromptResponse(prompt)}
            author={mapPromptAuthorResponse(prompt.author)}
          />
        )}
      </ListState>
      <div ref={ref} />
    </>
  )
}
