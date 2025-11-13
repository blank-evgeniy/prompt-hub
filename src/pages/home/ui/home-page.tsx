import { Card, CardHeader } from '@/shared/ui/card'
import { Typography } from '@/shared/ui/typography'

import { PromptList } from './prompt-list'

export const HomePage = () => {
  return (
    <main>
      <Typography variant={'h1'} className="sr-only">
        Промпты
      </Typography>

      <div className="flex gap-6">
        <Card className="border-accent sticky top-12 h-[calc(100vh-var(--header-height)-32px)] w-xs shrink-0">
          <CardHeader>
            <Typography variant={'h2'}>Фильтры</Typography>
          </CardHeader>
        </Card>
        <PromptList />
      </div>
    </main>
  )
}
