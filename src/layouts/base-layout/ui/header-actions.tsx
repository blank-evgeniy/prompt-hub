'use client'

import { useQuery } from '@tanstack/react-query'

import { Loader } from '@/shared/ui/loaders'
import { profileQueries } from '@/shared/api/services'

import { AuthLinks } from './auth-links'
import { ProfileCard } from './profile-card'
import { mapUserDtoToProfileCard } from '../model'

interface HeaderActionsProps {
  className?: string
}

export const HeaderActions = ({ className }: HeaderActionsProps) => {
  const { data: profile, isLoading } = useQuery(profileQueries.me())

  if (isLoading) {
    return <Loader className={className} />
  }

  if (!profile) {
    return <AuthLinks className={className} />
  }

  if (profile) {
    return (
      <ProfileCard
        data={mapUserDtoToProfileCard(profile)}
        className={className}
      />
    )
  }
}
