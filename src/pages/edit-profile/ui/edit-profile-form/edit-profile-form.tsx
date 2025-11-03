import { zodResolver } from '@hookform/resolvers/zod'
import { isAxiosError } from 'axios'
import { Controller, useForm } from 'react-hook-form'

import { translateBackendError } from '@/shared/api/errors'
import { UserResponseDto } from '@/shared/api/types'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/ui/card'
import { FieldMessage } from '@/shared/ui/field-message'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { Typography } from '@/shared/ui/typography'

import { useEditProfile } from '../../api'
import { profileSchema } from '../../model'

interface EditAvatarFormProps {
  user: Pick<UserResponseDto, 'username' | 'bio'>
}

export const EditProfileForm = ({ user }: EditAvatarFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    control,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: user.username,
      bio: user.bio || '',
    },
  })

  const { mutate, isPending } = useEditProfile()

  const onSubmit = handleSubmit((data) =>
    mutate(data, {
      onSuccess: (data) =>
        reset({
          username: data.username,
          bio: data.bio ?? '',
        }),
      onError: (error) => {
        if (!isAxiosError(error)) {
          return
        }

        setError('root', { message: translateBackendError(error) })
      },
    })
  )

  const disableActions = isPending || !isDirty

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardHeader>
          <Typography variant="h2">Общая информация</Typography>
        </CardHeader>

        <CardContent>
          <Input
            label="Имя пользователя"
            placeholder="Введите имя..."
            aria-invalid={errors.username ? 'true' : 'false'}
            message={errors.username?.message}
            {...register('username')}
          />
          <Controller
            control={control}
            name="bio"
            render={({ field, fieldState }) => (
              <Textarea
                label="О себе"
                maxLength={500}
                placeholder="Напишите о себе..."
                aria-invalid={fieldState.error ? 'true' : 'false'}
                message={fieldState.error?.message}
                {...field}
              />
            )}
          />

          {errors.root?.message && (
            <FieldMessage>{errors.root.message}</FieldMessage>
          )}
        </CardContent>

        <CardFooter className="flex flex-row justify-end">
          <Button
            variant="outline"
            onClick={() => reset()}
            type="button"
            disabled={disableActions}
          >
            Сбросить
          </Button>
          <Button type="submit" disabled={disableActions} isLoading={isPending}>
            Сохранить
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
