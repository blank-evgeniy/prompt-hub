'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { mapPromptResponse } from '@/entities/prompt'
import { mapPromptAuthorResponse } from '@/entities/user'
import { promptQueries } from '@/shared/api/services'
import { ListState } from '@/shared/ui/list-state'

import { PromptsFiltersSchema } from '../../model'
import { PromptCard } from '../prompt-card'

interface PromptListProps {
  filters: PromptsFiltersSchema
}

export const PromptList = ({ filters }: PromptListProps) => {
  const {
    data: prompts,
    isLoading,
    isFetchingNextPage,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    promptQueries.promptsList({
      limit: 10,
      category: filters.category ?? undefined,
      sortBy: filters.sortBy,
      order: filters.order,
    })
  )

  const { ref, inView } = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage])

  return (
    <div className="flex flex-1">
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
            isLiked={prompt.isLiked}
            prompt={mapPromptResponse(prompt)}
            author={mapPromptAuthorResponse(prompt.author)}
          />
        )}
      </ListState>
      <div ref={ref} />
    </div>
  )
}
