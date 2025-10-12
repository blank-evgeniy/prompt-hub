'use client'

import * as React from 'react'

import { ProfilePrompt } from './types'

interface ProfilePromptsContextType {
  editingPrompt: ProfilePrompt | null
  setEditingPrompt: (prompt: ProfilePrompt | null) => void
  isEditModalOpen: boolean
  openEditModal: (prompt: ProfilePrompt) => void
  closeEditModal: () => void
}

const ProfilePromptsContext = React.createContext<
  ProfilePromptsContextType | undefined
>(undefined)

interface ProfilePromptsProviderProps {
  children: React.ReactNode
}

export const ProfilePromptsProvider = ({
  children,
}: ProfilePromptsProviderProps) => {
  const [editingPrompt, setEditingPrompt] =
    React.useState<ProfilePrompt | null>(null)

  const isEditModalOpen = editingPrompt !== null

  const openEditModal = React.useCallback((prompt: ProfilePrompt) => {
    setEditingPrompt(prompt)
  }, [])

  const closeEditModal = React.useCallback(() => {
    setEditingPrompt(null)
  }, [])

  return (
    <ProfilePromptsContext.Provider
      value={{
        editingPrompt,
        setEditingPrompt,
        isEditModalOpen,
        openEditModal,
        closeEditModal,
      }}
    >
      {children}
    </ProfilePromptsContext.Provider>
  )
}

export const useProfilePromptsContext = () => {
  const context = React.useContext(ProfilePromptsContext)

  if (context === undefined) {
    throw new Error(
      'useProfilePromptsContext must be used within a ProfilePromptsProvider'
    )
  }

  return context
}
