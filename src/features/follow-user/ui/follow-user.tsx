import { HeartCrackIcon, HeartIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/shared/ui/button'

import { useFollow, useUnfollow } from '../api'

interface LikePromptProps {
  userId: string
  isFollowed: boolean
  onFollow: () => void
  onUnfollow: () => void
}

export const FollowUser = ({
  isFollowed,
  userId,
  onFollow,
  onUnfollow,
}: LikePromptProps) => {
  const [isFollowedLocal, setIsFollowedLocal] = useState(isFollowed)

  useEffect(() => {
    setIsFollowedLocal(isFollowed)
  }, [isFollowed])

  const { mutate: follow, isPending: isLikePending } = useFollow()
  const { mutate: unfollow, isPending: isDislikePending } = useUnfollow()

  const handleClick = () => {
    if (isFollowedLocal) {
      unfollow(userId, {
        onSuccess: () => {
          setIsFollowedLocal(false)
          onUnfollow()
        },
      })
    } else {
      follow(userId, {
        onSuccess: () => {
          setIsFollowedLocal(true)
          onFollow()
        },
      })
    }
  }

  const isPending = isLikePending || isDislikePending

  return (
    <Button
      variant={isFollowedLocal ? 'destructive' : 'default'}
      onClick={handleClick}
      disabled={isPending}
      isLoading={isPending}
    >
      {isFollowedLocal ? (
        <>
          Отписаться <HeartCrackIcon />
        </>
      ) : (
        <>
          Подписаться <HeartIcon />
        </>
      )}
    </Button>
  )
}
