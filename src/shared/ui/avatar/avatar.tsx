'use client'
import { cva, VariantProps } from 'class-variance-authority'
import { UserIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/shared/utils/cn'

const avatarVariants = cva(
  'rounded-full overflow-hidden flex items-center justify-center shrink-0 aspect-square',
  {
    variants: {
      size: {
        sm: 'size-8 p-1',
        md: 'size-10 p-1',
        lg: 'size-16 p-3',
        xl: 'size-24 p-4',
        '2xl': 'size-32 p-6',
      },
      variant: {
        circle: 'rounded-full',
        square: 'rounded-md',
      },
    },
    defaultVariants: {
      size: 'sm',
      variant: 'circle',
    },
  }
)

type AvatarProps = {
  src?: string | null
  backgroundColor?: string | null
  className?: string
} & VariantProps<typeof avatarVariants> &
  React.HTMLAttributes<HTMLDivElement>

export const Avatar = ({
  className,
  src,
  size,
  variant,
  backgroundColor,
  ...props
}: AvatarProps) => {
  const bgColorCn = backgroundColor ?? 'bg-primary'

  return (
    <div
      className={cn(avatarVariants({ size, variant, className }), bgColorCn)}
      {...props}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="Avatar" className="size-full object-cover" />
      ) : (
        <UserIcon className="size-full text-black" />
      )}
    </div>
  )
}
