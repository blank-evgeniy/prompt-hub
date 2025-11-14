'use client'

import { useQuery } from '@tanstack/react-query'

import { mapPromptResponse } from '@/entities/prompt'
import { usersQueries } from '@/shared/api/services'
import { routes } from '@/shared/routes'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/ui/breadcrumb'
import { ListState } from '@/shared/ui/list-state'
import { Typography } from '@/shared/ui/typography'

import { PromptCard } from './prompt-card'

interface UserPromptsPageProps {
  username: string
}

export const UserPromptsPage = ({ username }: UserPromptsPageProps) => {
  const { data, isLoading } = useQuery(usersQueries.prompts(username))

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <Typography className="sr-only" as="h1">
        Промпты
      </Typography>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={routes.public.user(username)}>
              {username}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Промпты</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <ListState
        items={data ?? []}
        isLoading={isLoading}
        containerClassName="flex flex-col gap-4"
      >
        {(prompt) => (
          <PromptCard
            key={prompt.id}
            isLiked={prompt.isLiked}
            prompt={mapPromptResponse(prompt)}
          />
        )}
      </ListState>
    </main>
  )
}
