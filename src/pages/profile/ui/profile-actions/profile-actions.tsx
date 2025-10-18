'use client'

import { FileTextIcon } from 'lucide-react'
import Link from 'next/link'

import { routes } from '@/shared/routes'
import { Button } from '@/shared/ui/button'
import { Card, CardContent } from '@/shared/ui/card'
import { Typography } from '@/shared/ui/typography'

export const ProfileActions = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" className="mb-4">
          Навигация
        </Typography>

        <div className="grid gap-3">
          <Button asChild size="lg" className="justify-start">
            <Link href={routes.profile.createPrompt}>
              <FileTextIcon className="size-5" />
              Создать новый промпт
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="justify-start">
            <Link href={routes.profile.myPrompts}>
              <FileTextIcon className="size-5" />
              Мои промпты
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
