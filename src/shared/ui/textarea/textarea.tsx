'use client'

import { forwardRef, useEffect, useRef, useState } from 'react'

import { cn } from '@/shared/utils/cn'

import { FieldMessage } from '../field-message'
import { Label } from '../label'
import { Typography } from '../typography'

type TextareaProps = React.ComponentProps<'textarea'> & {
  label?: string
  message?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      message,
      id,
      disabled,
      maxLength,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const localRef = useRef<HTMLTextAreaElement>(null)
    const [charCount, setCharCount] = useState(value ? String(value).length : 0)

    const updateHeight = (el: HTMLTextAreaElement) => {
      el.style.height = 'auto'
      el.style.height = `${el.scrollHeight}px`
    }

    useEffect(() => {
      if (!ref) return
      if (typeof ref === 'function') ref(localRef.current)
      else ref.current = localRef.current
    }, [ref])

    useEffect(() => {
      if (!localRef.current) return
      const str = value ? String(value) : ''
      setCharCount(str.length)
      updateHeight(localRef.current)
    }, [value])

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(event)
    }

    return (
      <div className="flex flex-col">
        {label && (
          <Label htmlFor={id} data-disabled={disabled} className="mb-2 text-sm">
            {label}
          </Label>
        )}
        <textarea
          ref={localRef}
          id={id}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
          className={cn(
            'placeholder:text-base-content/50 selection:bg-primary selection:text-primary-content border-base-content/50 rounded-field flex w-full min-w-0 resize-none overflow-hidden border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
            'focus-visible:border-primary',
            'aria-invalid:border-error aria-invalid:text-error',
            className
          )}
          {...props}
        />
        {maxLength && (
          <Typography variant="label" className="mt-1">
            {charCount} / {maxLength}
          </Typography>
        )}
        {message && <FieldMessage className="mt-1">{message}</FieldMessage>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
