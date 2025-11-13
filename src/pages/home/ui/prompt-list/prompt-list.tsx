'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { mapPromptResponse } from '@/entities/prompt'
import { mapPromptAuthorResponse } from '@/entities/user'
import { promptQueries } from '@/shared/api/services/prompt'
import { ListState } from '@/shared/ui/list-state'

import { PromptCard } from '../prompt-card/prompt-card'

export const PromptList = () => {
  const {
    data: prompts,
    isLoading,
    isFetchingNextPage,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(promptQueries.promptsList({ limit: 10 }))

  const { ref, inView } = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage])

  return (
    <div>
      <ListState
        containerClassName="flex flex-col gap-4 flex-1"
        items={prompts ?? []}
        isLoading={isLoading}
        isLoadingMore={isFetchingNextPage}
        isError={isError}
      >
        {(prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={mapPromptResponse(prompt)}
            author={mapPromptAuthorResponse(prompt.author)}
          />
        )}
      </ListState>
      <div ref={ref} />
    </div>
  )
}
