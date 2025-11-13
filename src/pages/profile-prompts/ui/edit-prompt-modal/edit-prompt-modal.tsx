'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { EditIcon } from 'lucide-react'
import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'

import { PromptSchema, promptSchema } from '@/entities/prompt'
import { PromptCategory } from '@/shared/api/types'
import { promptCategoryOptions } from '@/shared/consts'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '@/shared/ui/modal'
import { Select } from '@/shared/ui/select'
import { Textarea } from '@/shared/ui/textarea'

import { useEditPrompt } from '../../api'
import { ProfilePrompt } from '../../model'

interface EditPromptModalProps {
  prompt: ProfilePrompt
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export const EditPromptModal = ({
  prompt,
  isOpen,
  onClose,
  onSuccess,
}: EditPromptModalProps) => {
  const { mutate: editPrompt, isPending } = useEditPrompt(prompt.id)

  const { register, handleSubmit, formState, control, reset } =
    useForm<PromptSchema>({
      defaultValues: {
        title: prompt?.title || '',
        category: promptCategoryOptions.find(
          (category) => category.value === prompt.category
        ),
        prompt: prompt.content || '',
      },
      resolver: zodResolver(promptSchema),
    })

  const onSubmit = (data: PromptSchema) => {
    editPrompt(
      {
        title: data.title,
        content: data.prompt,
        category: data.category.value as PromptCategory,
      },
      {
        onSuccess: () => {
          onSuccess?.()
          onClose()
        },
      }
    )
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <Modal open={isOpen} onOpenChange={handleClose}>
      <ModalContent className="lg:max-w-5xl">
        <ModalHeader>
          <ModalTitle>Редактировать промпт</ModalTitle>
          <ModalDescription>
            Внесите изменения в ваш промпт и сохраните их.
          </ModalDescription>
        </ModalHeader>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Название"
            placeholder="Введите название, отражающее суть вашего промпта"
            message={formState.errors.title?.message}
            {...register('title')}
          />

          <Controller
            control={control}
            name="category"
            render={({ field, fieldState }) => (
              <Select
                label="Категория"
                placeholder="Выберите категорию промпта"
                options={promptCategoryOptions}
                message={fieldState.error?.message}
                isSearchable={false}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="prompt"
            render={({ field, fieldState }) => (
              <Textarea
                label="Промпт"
                placeholder="Введите текст промпта"
                maxLength={1000}
                message={fieldState.error?.message}
                {...field}
              />
            )}
          />

          <ModalFooter>
            <Button type="button" variant="outline" onClick={handleClose}>
              Отмена
            </Button>
            <Button type="submit" isLoading={isPending}>
              <EditIcon /> Сохранить изменения
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
