import { Badge } from '@/shared/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'
import { ExpandableText } from '@/shared/ui/expandable-text'
import { Typography } from '@/shared/ui/typography'

import { getPromptCategoryLabel, Prompt } from '../../model'

interface BasePromptCardProps {
  data: Prompt
  authorSlot?: React.ReactNode
  actionsSlot?: React.ReactNode
}

export const BasePromptCard = ({
  data: { title, category, content },
  actionsSlot,
  authorSlot,
}: BasePromptCardProps) => {
  const hasFooter = Boolean(actionsSlot || authorSlot)

  return (
    <Card className="space-y-2">
      <CardHeader className="flex flex-row items-start gap-4">
        <Typography as="h2" variant={'card-title'} className="flex-1">
          {title}
        </Typography>

        <Badge>{getPromptCategoryLabel(category)}</Badge>
      </CardHeader>

      <CardContent className="flex flex-1 flex-row gap-2">
        <ExpandableText className="flex-1" text={content} maxLength={300} />
      </CardContent>

      {hasFooter ? (
        <CardFooter className="flex min-w-0 flex-row gap-4">
          {authorSlot}
          <div className="ml-auto flex gap-2">{actionsSlot}</div>
        </CardFooter>
      ) : null}
    </Card>
  )
}
