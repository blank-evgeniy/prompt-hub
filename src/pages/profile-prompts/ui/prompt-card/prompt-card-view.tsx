'use client'

import { EditIcon, TrashIcon } from 'lucide-react'
import * as React from 'react'

import { useBreakpoint } from '@/shared/hooks'
import { Badge } from '@/shared/ui/badge/badge'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'
import { CopyButton } from '@/shared/ui/copy-button'
import { ExpandableText } from '@/shared/ui/expandable-text'
import { Typography } from '@/shared/ui/typography'

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
  const { title, content, category } = data

  const { lg } = useBreakpoint()

  return (
    <Card className="space-y-2">
      <CardHeader className="flex flex-row items-start gap-4">
        <Typography as="h2" variant={'card-title'} className="flex-1">
          {title}
        </Typography>

        <Badge>{category}</Badge>
      </CardHeader>

      <CardContent className="flex flex-1 flex-row gap-2">
        <ExpandableText className="flex-1" text={content} maxLength={300} />
      </CardContent>

      <CardFooter className="flex flex-row justify-end gap-2">
        <CopyButton
          title="Копировать"
          aria-label="Копировать"
          text={content}
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
      </CardFooter>
    </Card>
  )
}
