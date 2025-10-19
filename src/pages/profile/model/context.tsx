'use client'

import { useQuery } from '@tanstack/react-query'
import * as React from 'react'

import { usersQueries } from '@/shared/api/services'
import { UserResponseDto } from '@/shared/api/types'
import { useAuthStore } from '@/store/auth'

interface UserProfileContextType {
  isCurrentUser: boolean
  user: UserResponseDto | null
  error: Error | null
  isLoading: boolean
  isError: boolean
}

const UserProfileContext = React.createContext<
  UserProfileContextType | undefined
>(undefined)

interface UserProfileProviderProps {
  username: string
  children: React.ReactNode
}

export const UserProfileProvider = ({
  username,
  children,
}: UserProfileProviderProps) => {
  const {
    data: profile,
    isLoading,
    isError,
    error,
  } = useQuery(usersQueries.one(username))

  const user = useAuthStore((s) => s.user)

  const isCurrentUser = user?.username === username

  return (
    <UserProfileContext.Provider
      value={{
        isCurrentUser,
        user: profile ?? null,
        isLoading,
        isError,
        error,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  )
}

export const useUserProfile = () => {
  const context = React.useContext(UserProfileContext)

  if (context === undefined) {
    throw new Error('useUserProfile must be used within a UserProfileProvider')
  }

  return context
}
