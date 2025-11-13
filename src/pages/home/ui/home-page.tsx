'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

import { Typography } from '@/shared/ui/typography'

import { parseFiltersFromSearchParams } from '../helpers'
import { PromptsFiltersSchema } from '../model'
import { PromptFilters } from './prompt-filters'
import { PromptList } from './prompt-list'

export const HomePage = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const filters = useMemo(
    () => parseFiltersFromSearchParams(searchParams as URLSearchParams),
    [searchParams]
  )

  const handleFiltersChange = (nextFilters: PromptsFiltersSchema) => {
    const params = new URLSearchParams()

    Object.entries(nextFilters).forEach(([key, value]) => {
      if (value) params.set(key, String(value))
    })

    router.replace(`?${params.toString()}`, { scroll: false })
  }

  return (
    <main>
      <Typography variant={'h1'} className="sr-only">
        Промпты
      </Typography>

      <div className="flex items-start gap-6">
        <PromptFilters
          filters={filters}
          onFiltersChange={handleFiltersChange}
        />
        <PromptList filters={filters} />
      </div>
    </main>
  )
}
