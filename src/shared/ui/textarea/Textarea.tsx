'use client'

import { useState } from 'react'

import { cn } from '@/shared/utils/cn'

import { Label } from '../label'
import { FieldMessage } from '../field-message'
import { Typography } from '../typography'

type TextareaProps = React.ComponentProps<'textarea'> & {
  label?: string
  message?: string
}

export const Textarea = ({
  className,
  ref,
  label,
  message,
  id,
  disabled,
  maxLength,
  defaultValue,
  onChange,
  ...props
}: TextareaProps) => {
  const [charCount, setCharCount] = useState(
    typeof defaultValue === 'string' ? defaultValue.length : 0
  )

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(event.target.value.length)
    onChange?.(event)
  }

  const updateHeight = (el: HTMLTextAreaElement) => {
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateHeight(e.target)
    handleChange(e)
  }

  return (
    <div className="flex flex-col">
      {label && (
        <Label htmlFor={id} data-disabled={disabled} className="mb-2 text-sm">
          {label}
        </Label>
      )}
      <textarea
        ref={ref}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        className={cn(
          'placeholder:text-base-content/50 selection:bg-primary selection:text-primary-content border-base-content/50 rounded-field flex w-full min-w-0 overflow-hidden border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:border-primary',
          'aria-invalid:border-error aria-invalid:text-error',
          className
        )}
        onInput={handleInput}
        onChange={handleChange}
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
