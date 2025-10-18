import { Typography } from '@/shared/ui/typography'

import { PromptList } from './prompt-list'

export const ProfilePromptsPage = () => {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <Typography variant={'h1'} as="h1">
        Промпты
      </Typography>

      <PromptList />
    </main>
  )
}
