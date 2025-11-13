import { HeartIcon } from 'lucide-react'

import { Button } from '@/shared/ui/button'

export const LikePrompt = () => {
  return (
    <Button
      size={'icon'}
      variant={'default'}
      aria-label="Добавить в избранное"
      title="Добавить в избранное"
    >
      <HeartIcon />
    </Button>
  )
}
