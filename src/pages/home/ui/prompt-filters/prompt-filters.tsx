import { PromptCategory } from '@/shared/api/types'
import { promptCategoryOptions } from '@/shared/consts'
import { Card, CardContent } from '@/shared/ui/card'
import { Select } from '@/shared/ui/select'

import { getSortParamsFromOption } from '../../helpers'
import { PromptsFiltersSchema, promptsSortOptions } from '../../model'
import { PromptSortOptionValue } from '../../model'

interface PromptFiltersProps {
  filters: PromptsFiltersSchema
  onFiltersChange: (filters: PromptsFiltersSchema) => void
}

export const PromptFilters = ({
  filters,
  onFiltersChange,
}: PromptFiltersProps) => {
  const handleCategoryChange = (
    category: PromptCategory | null | undefined
  ) => {
    onFiltersChange({ ...filters, category: category ?? null })
  }

  const handleSortChange = (sort: PromptSortOptionValue | null | undefined) => {
    if (!sort) return

    const { sortBy, sortOrder } = getSortParamsFromOption(sort)

    onFiltersChange({ ...filters, sortBy, order: sortOrder })
  }

  return (
    <Card className="!sticky top-4 flex w-xs shrink-0">
      <CardContent>
        <Select
          label="Категория"
          placeholder="Выберите категорию"
          isClearable
          defaultValue={promptCategoryOptions.find(
            ({ value }) => value === filters.category
          )}
          options={promptCategoryOptions}
          onChange={(newValue) => handleCategoryChange(newValue?.value)}
        />

        <Select
          label="Сортировка"
          defaultValue={promptsSortOptions.find(
            ({ value }) => value === `${filters.sortBy}-${filters.order}`
          )}
          options={promptsSortOptions}
          onChange={(newValue) => handleSortChange(newValue?.value)}
        />
      </CardContent>
    </Card>
  )
}
