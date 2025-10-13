'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useThemeToggle } from '../model'

export const ThemeToggle = () => {
  const { onToggle, theme } = useThemeToggle()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <button
      className="text-base-content/70 cursor-pointer [&_svg]:size-5"
      onClick={onToggle}
      aria-label="Переключить тему"
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  )
}
