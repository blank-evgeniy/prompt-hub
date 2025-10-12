'use client'

import { useState } from 'react'

import { Typography } from '../typography'

export type ExpandableTextProps = {
  className?: string
  maxLength?: number
  text: string
}

export const ExpandableText = ({
  text,
  maxLength = 100,
  className,
}: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const shouldExpand = text.length > maxLength

  if (!shouldExpand)
    return (
      <Typography variant={'paragraph'} as="p" className={className}>
        {text}
      </Typography>
    )

  return (
    <Typography variant={'paragraph'} as="p" className={className}>
      {isExpanded ? `${text} ` : `${text.substring(0, maxLength)}... `}

      {text.length > maxLength && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary cursor-pointer underline hover:opacity-80"
        >
          {isExpanded ? 'Скрыть' : 'Показать полностью'}
        </button>
      )}
    </Typography>
  )
}
