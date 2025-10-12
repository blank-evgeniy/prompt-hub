'use client'

import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { EditIcon } from 'lucide-react'

import { Input } from '@/shared/ui/input'
import { Select } from '@/shared/ui/select'
import { Textarea } from '@/shared/ui/textarea'
import { Button } from '@/shared/ui/button'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
} from '@/shared/ui/modal'
import { promptCategoryOptions } from '@/shared/consts'
import { PromptCategory } from '@/shared/api/types'

import { ProfilePrompt } from '../../model'
import {
  createPromptSchema,
  CreatePromptSchema,
} from '../../../create-prompt/model'
import { useEditPrompt } from '../../api'

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
    useForm<CreatePromptSchema>({
      defaultValues: {
        title: prompt?.title || '',
        category: promptCategoryOptions.find(
          (category) => category.value === prompt.category
        ),
        prompt: prompt.content || '',
      },
      resolver: zodResolver(createPromptSchema),
    })

  const onSubmit = (data: CreatePromptSchema) => {
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

          <Textarea
            label="Промпт"
            placeholder="Введите текст промпта"
            maxLength={1000}
            message={formState.errors.prompt?.message}
            defaultValue={prompt.content}
            {...register('prompt')}
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
