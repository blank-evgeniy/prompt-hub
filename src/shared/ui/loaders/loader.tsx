import { LoaderCircleIcon } from 'lucide-react'

import { cn } from '@/shared/utils/cn'

export const Loader = ({ className }: { className?: string }) => (
  <LoaderCircleIcon
    role="status"
    aria-label="загрузка"
    className={cn(
      'text-primary inline-block size-5 shrink-0 animate-spin',
      className
    )}
  />
)
