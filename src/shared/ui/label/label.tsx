'use client'

import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@/shared/utils/cn'

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root>

function Label({ className, ...props }: LabelProps & { className?: string }) {
  return (
    <LabelPrimitive.Root
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
        className
      )}
      {...props}
    />
  )
}

export { Label }
