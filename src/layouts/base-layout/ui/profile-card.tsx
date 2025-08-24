'use client'

import { useLogout } from '@/shared/hooks/queries'
import { Button } from '@/shared/ui/button'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { mutate, isPending } = useLogout()

  return (
    <Button
      size={'sm'}
      variant={'destructive'}
      onClick={() => mutate()}
      className={className}
      disabled={isPending}
    >
      выйти
    </Button>
  )
}
