'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { useBreakpoint } from '@/shared/hooks'
import { LightRays } from '@/shared/ui/light-rays'

const rayColors = [
  'var(--color-accent)',
  'var(--color-primary)',
  'var(--color-secondary)',
  'var(--color-success)',
  'var(--color-warning)',
  'var(--color-error)',
] as const

export const RaysBackground = () => {
  const { lg } = useBreakpoint()

  const [rayColor, setRayColor] = useState<(typeof rayColors)[number] | null>(
    null
  )
  const pathname = usePathname()

  useEffect(() => {
    setRayColor((prev) => {
      if (!prev) {
        const randomIndex = Math.floor(Math.random() * rayColors.length)
        return rayColors[randomIndex]
      }

      const available = rayColors.filter((c) => c !== prev)
      return available[Math.floor(Math.random() * available.length)]
    })
  }, [pathname])

  if (!lg) return null

  if (!rayColor) return null

  return <LightRays color={rayColor} />
}
