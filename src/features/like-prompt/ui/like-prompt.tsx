import { HeartIcon, LoaderIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useAuthToast } from '@/shared/hooks'
import { Button } from '@/shared/ui/button'

import { useDislike, useLike } from '../api'

interface LikePromptProps {
  promptId: string
  isLiked: boolean
  onLike?: () => void
  onDislike?: () => void
}

export const LikePrompt = ({
  isLiked,
  promptId,
  onLike,
  onDislike,
}: LikePromptProps) => {
  const { ensureAuth, isAuth } = useAuthToast()

  const [isLikedLocal, setIsLikedLocal] = useState(isLiked)

  useEffect(() => {
    setIsLikedLocal(isLiked)
  }, [isLiked])

  useEffect(() => {
    if (!isAuth) setIsLikedLocal(false)
  }, [isAuth])

  const { mutate: like, isPending: isLikePending } = useLike()
  const { mutate: dislike, isPending: isDislikePending } = useDislike()

  const handleClick = () => {
    if (!ensureAuth()) return

    if (isLikedLocal) {
      dislike(promptId, {
        onSuccess: () => {
          setIsLikedLocal(false)
          onDislike?.()
        },
      })
    } else {
      like(promptId, {
        onSuccess: () => {
          setIsLikedLocal(true)
          onLike?.()
        },
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
