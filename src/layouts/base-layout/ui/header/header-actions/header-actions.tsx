'use client'

import { useAuthStore } from '@/store/auth'

import { mapUserDtoToProfileCard } from '../../../model'
import { AuthLinks } from '../auth-links'
import { ProfileCard } from '../profile-card'

interface HeaderActionsProps {
  className?: string
}

export const HeaderActions = ({ className }: HeaderActionsProps) => {
  const { user, isAuth } = useAuthStore()

  if (!isAuth || !user) {
    return <AuthLinks className={className} />
  }

  return (
    <ProfileCard data={mapUserDtoToProfileCard(user)} className={className} />
  )
}
