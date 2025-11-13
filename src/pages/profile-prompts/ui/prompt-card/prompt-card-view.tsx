'use client'

import { EditIcon, TrashIcon } from 'lucide-react'
import * as React from 'react'

import { BasePromptCard } from '@/entities/prompt'
import { useBreakpoint } from '@/shared/hooks'
import { Button } from '@/shared/ui/button'
import { CopyButton } from '@/shared/ui/copy-button'

import { ProfilePrompt } from '../../model'

interface PromptCardViewProps {
  data: ProfilePrompt
  onDelete: () => void
  onEdit: () => void
  isDeleting: boolean
}

export const PromptCardView = ({
  data,
  isDeleting,
  onDelete,
  onEdit,
}: PromptCardViewProps) => {
  const { lg } = useBreakpoint()

  return (
    <BasePromptCard
      data={data}
      actionsSlot={
        <>
          <CopyButton
            title="Копировать"
            aria-label="Копировать"
            text={data.content}
            size={'icon'}
          />

          <Button
            variant={'destructive'}
            onClick={onDelete}
            isLoading={isDeleting}
          >
            {lg && 'Удалить'} <TrashIcon />
          </Button>
          <Button variant={'secondary'} onClick={onEdit}>
            {lg && 'Редактировать'} <EditIcon />
          </Button>
        </>
      }
    />
  )
}
