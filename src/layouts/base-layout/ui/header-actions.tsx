'use client'

import { Loader } from '@/shared/ui/loaders'
import { useProfile } from '@/shared/hooks/queries'

import { AuthLinks } from './auth-links'
import { ProfileCard } from './profile-card'

interface HeaderActionsProps {
  className?: string
}

export const HeaderActions = ({ className }: HeaderActionsProps) => {
  const { data: profile, isLoading } = useProfile()

  if (isLoading) {
    return <Loader className={className} />
  }

  if (!profile) {
    return <AuthLinks className={className} />
  }

  if (profile) {
    return <ProfileCard className={className} />
  }
}
