'use client'

import Link from 'next/link'
import { EditIcon, TrashIcon } from 'lucide-react'

import { Typography } from '@/shared/ui/typography'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'
import { Button } from '@/shared/ui/button'
import { routes } from '@/shared/routes'
import { Badge } from '@/shared/ui/badge/badge'
import { CopyButton } from '@/shared/ui/copy-button'
import { ExpandableText } from '@/shared/ui/expandable-text'
import { useBreakpoint } from '@/shared/hooks'

import { ProfilePrompt } from '../../model'
import { useDeletePrompt } from '../../api'

interface PromptCardProps {
  data: ProfilePrompt
}

export const PromptCard = ({ data }: PromptCardProps) => {
  const { mutate: deletePrompt, isPending: isDeleting } = useDeletePrompt()

  const { id, title, content, category } = data

  const { lg } = useBreakpoint()

  const handleDelete = () => deletePrompt(id)

  return (
    <Card className="space-y-2">
      <CardHeader className="flex flex-row items-start gap-4">
        <Typography as="h2" variant={'card-title'} className="flex-1">
          {title}
        </Typography>

        <Badge>{category}</Badge>
      </CardHeader>

      <CardContent className="flex flex-1 flex-row gap-2">
        <ExpandableText className="flex-1" text={content} maxLength={500} />
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
          onClick={handleDelete}
          isLoading={isDeleting}
        >
          {lg && 'Удалить'} <TrashIcon />
        </Button>
        <Button asChild variant={'secondary'}>
          <Link href={routes.profile.editPrompt(id)}>
            {lg && 'Редактировать'} <EditIcon />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
