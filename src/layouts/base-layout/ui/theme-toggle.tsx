'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleClick = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  if (!isMounted) {
    return null
  }

  return (
    <button
      className="text-base-content/70 cursor-pointer [&_svg]:size-5"
      onClick={handleClick}
      aria-label="Переключить тему"
    >
      {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
    </button>
  )
}
