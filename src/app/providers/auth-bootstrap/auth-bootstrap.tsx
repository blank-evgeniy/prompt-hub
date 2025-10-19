'use client'

import { useEffect } from 'react'

import { useAuthStore } from '@/store/auth'

export const AuthBootstrap = ({ children }: { children: React.ReactNode }) => {
  const bootstrap = useAuthStore((s) => s.bootstrap)
  const isBootstrapping = useAuthStore((s) => s.isBootstrapping)

  useEffect(() => {
    bootstrap()
  }, [bootstrap, isBootstrapping])

  if (isBootstrapping) {
    return <div className="sr-only">Загрузка...</div>
  }

  return children
}
