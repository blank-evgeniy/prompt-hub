'use client'

import { useTheme } from 'next-themes'

export const useThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const onToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return { onToggle, theme: resolvedTheme }
}
