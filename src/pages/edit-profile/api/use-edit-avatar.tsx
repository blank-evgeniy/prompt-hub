import { useMutation, useQueryClient } from '@tanstack/react-query'

import { profileApi, profileQueries } from '@/shared/api/services'
import { UpdateAvatarDto, UserResponseDto } from '@/shared/api/types'
import { useAuthStore } from '@/store/auth'

export const useEditAvatar = () => {
  const updateUser = useAuthStore((s) => s.updateUser)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateAvatarDto) => profileApi.editAvatar(data),
    onSuccess: (_data, variables) => {
      queryClient.setQueryData<UserResponseDto>(
        profileQueries.meKey(),
        (old) => {
          if (!old) return old
          return { ...old, avatarUrl: variables.avatarUrl }
        }
      )
      updateUser(variables)
    },
  })
}
