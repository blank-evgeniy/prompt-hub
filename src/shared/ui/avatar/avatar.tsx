'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

import { cn } from '@/shared/utils/cn'

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full border',
        className
      )}
      {...props}
    />
  )
}

type AvatarImageProps = Omit<
  React.ComponentProps<typeof AvatarPrimitive.Image>,
  'src'
> & {
  src?: string | null
}

function AvatarImage({ className, src, ...props }: AvatarImageProps) {
  const fixedSrc = src ?? undefined

  return (
    <AvatarPrimitive.Image
      src={fixedSrc}
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        'bg-base-300 text-base-content flex size-full items-center justify-center rounded-full',
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarFallback, AvatarImage }
