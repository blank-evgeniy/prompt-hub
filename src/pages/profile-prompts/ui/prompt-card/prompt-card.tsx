'use client'

import * as React from 'react'

import { useDeletePrompt } from '../../api'
import { ProfilePrompt, useProfilePromptsContext } from '../../model'
import { PromptCardView } from './prompt-card-view'

interface PromptCardProps {
  data: ProfilePrompt
}

export const PromptCard = ({ data }: PromptCardProps) => {
  const { mutate: deletePrompt, isPending: isDeleting } = useDeletePrompt()

  const { openEditModal } = useProfilePromptsContext()

  const handleDelete = () => deletePrompt(data.id)

  const handleOpenEdit = () => openEditModal(data)

  return (
    <PromptCardView
      data={data}
      onDelete={handleDelete}
      onEdit={handleOpenEdit}
      isDeleting={isDeleting}
    />
  )
}
