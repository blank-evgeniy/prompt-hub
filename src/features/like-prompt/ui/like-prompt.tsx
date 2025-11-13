import { HeartIcon, LoaderIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/shared/ui/button'

import { useDislike, useLike } from '../api'

interface LikePromptProps {
  promptId: string
  isLiked: boolean
}

export const LikePrompt = ({ isLiked, promptId }: LikePromptProps) => {
  const [isLikedLocal, setIsLikedLocal] = useState(isLiked)

  useEffect(() => {
    setIsLikedLocal(isLiked)
  }, [isLiked])

  const { mutate: like, isPending: isLikePending } = useLike()
  const { mutate: dislike, isPending: isDislikePending } = useDislike()

  const handleClick = () => {
    if (isLikedLocal) {
      dislike(promptId, {
        onSuccess: () => setIsLikedLocal(false),
      })
    } else {
      like(promptId, {
        onSuccess: () => setIsLikedLocal(true),
      })
    }
  }

  const isPending = isLikePending || isDislikePending

  return (
    <Button
      size={'icon'}
      variant={isLikedLocal ? 'default' : 'outline'}
      aria-label="Добавить в избранное"
      title="Добавить в избранное"
      onClick={handleClick}
      disabled={isPending}
    >
      {isPending ? <LoaderIcon className="animate-spin" /> : <HeartIcon />}
    </Button>
  )
}
