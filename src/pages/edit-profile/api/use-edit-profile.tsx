import { useMutation, useQueryClient } from '@tanstack/react-query'

import { profileApi, profileQueries } from '@/shared/api/services'
import { UpdateProfileDto, UserResponseDto } from '@/shared/api/types'
import { useAuthStore } from '@/store/auth'

export const useEditProfile = () => {
  const updateUser = useAuthStore((s) => s.updateUser)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateProfileDto) => profileApi.edit(data),
    onSuccess: (data) => {
      queryClient.setQueryData<UserResponseDto>(
        profileQueries.meKey(),
        (old) => {
          if (!old) return old
          return { ...old, ...data }
        }
      )
      updateUser(data)
    },
  })
}
