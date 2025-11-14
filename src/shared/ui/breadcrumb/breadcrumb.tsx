import { Slot } from '@radix-ui/react-slot'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

import { cn } from '@/shared/utils/cn'

export const Breadcrumb = ({ ...props }: React.ComponentProps<'nav'>) => {
  return <nav {...props} />
}

export const BreadcrumbList = ({
  className,
  ...props
}: React.ComponentProps<'ol'>) => {
  return (
    <ol
      className={cn(
        'text-base-content flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
        className
      )}
      {...props}
    />
  )
}

export const BreadcrumbItem = ({
  className,
  ...props
}: React.ComponentProps<'li'>) => {
  return (
    <li
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  )
}

export const BreadcrumbLink = ({
  asChild,
  className,
  ...props
}: React.ComponentProps<typeof Link> & {
  asChild?: boolean
}) => {
  const Comp = asChild ? Slot : Link

  return (
    <Comp
      className={cn('hover:text-primary transition-colors', className)}
      {...props}
    />
  )
}

export const BreadcrumbPage = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('text-base font-normal', className)}
      {...props}
    />
  )
}

export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) => {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}
