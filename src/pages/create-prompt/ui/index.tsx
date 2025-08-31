'use client'

import { useRouter } from 'next/navigation'

import { routes } from '@/app/routes'

import { Typography } from '@/shared/ui/typography'

import { CreatePromptForm } from './create-prompt-form'

export const CreatePromptPage = () => {
  const router = useRouter()

  const handleCreatePrompt = () => {
    router.push(routes.public.home)
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <header className="space-y-2">
        <Typography variant="h1" as="h1">
          Создать промпт
        </Typography>
        <Typography variant={'description'} as="p">
          Создайте свой уникальный промпт за считанные минуты и делитесь им с
          миром.
        </Typography>
        <Typography
          variant={'description'}
          as="p"
          className="border-outline border-l pl-4"
        >
          Промпт — это текстовое указание или вопрос, который помогает
          искусственному интеллекту понять, что именно вы хотите получить в
          ответ. Чем точнее промпт, тем лучше результат!
        </Typography>
      </header>

      <CreatePromptForm onSuccess={handleCreatePrompt} />
    </main>
  )
}
