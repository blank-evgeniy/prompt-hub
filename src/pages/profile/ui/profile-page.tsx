'use client'

import { UserProfileProvider } from '../model'
import { ProfilePageState } from './profile-page-state'

interface ProfilePageProps {
  username: string
  currentUsername?: string
}

export const ProfilePage = ({ username }: ProfilePageProps) => {
  return (
    <main className="mx-auto max-w-3xl">
      <UserProfileProvider username={username}>
        <ProfilePageState />
      </UserProfileProvider>
    </main>
  )
}
