import { create } from 'zustand'

import { profileApi } from '@/shared/api/services'
import { UserResponseDto } from '@/shared/api/types'

interface AuthState {
  user: UserResponseDto | null
  isAuth: boolean
  isBootstrapping: boolean

  setUser: (user: UserResponseDto | null) => void
  logout: () => void
  bootstrap: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuth: false,
  isBootstrapping: true,

  setUser: (user) => set({ user, isAuth: !!user }),
  logout: () => set({ user: null, isAuth: false }),

  bootstrap: async () => {
    try {
      const user = await profileApi.me()
      set({ user, isAuth: true, isBootstrapping: false })
    } catch {
      set({ user: null, isAuth: false, isBootstrapping: false })
    }
  },
}))
