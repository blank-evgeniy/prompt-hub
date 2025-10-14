'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { PlusIcon } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'

import { promptCategoryOptions } from '@/shared/consts'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Select } from '@/shared/ui/select'
import { Textarea } from '@/shared/ui/textarea'

import { useCreatePrompt } from '../../api'
import {
  CreatePromptSchema,
  createPromptSchema,
  defaultCreatePromptValues,
  mapCreatePromptSchemaToCreatePromptDto,
} from '../../model'

interface CreatePromptFormProps {
  onSuccess: () => void
}

export const CreatePromptForm = ({ onSuccess }: CreatePromptFormProps) => {
  const { register, handleSubmit, formState, control } =
    useForm<CreatePromptSchema>({
      defaultValues: defaultCreatePromptValues,
      resolver: zodResolver(createPromptSchema),
    })

  const { mutate: createPrompt, isPending } = useCreatePrompt()

  const onSubmit = (data: CreatePromptSchema) => {
    createPrompt(mapCreatePromptSchemaToCreatePromptDto(data), {
      onSuccess,
    })
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
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
        {...register('prompt')}
      />

      <Button type="submit" className="self-end" isLoading={isPending}>
        Создать {!isPending && <PlusIcon />}
      </Button>
    </form>
  )
}
