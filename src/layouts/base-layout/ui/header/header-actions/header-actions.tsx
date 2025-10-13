'use client'

import { useQuery } from '@tanstack/react-query'

import { profileQueries } from '@/shared/api/services'
import { Loader } from '@/shared/ui/loaders'

import { mapUserDtoToProfileCard } from '../../../model'
import { AuthLinks } from '../auth-links/auth-links'
import { ProfileCard } from '../profile-card/profile-card'

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
