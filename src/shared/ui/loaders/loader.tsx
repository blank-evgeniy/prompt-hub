import { cn } from '@/shared/utils/cn'

export const Loader = ({ className }: { className?: string }) => (
  <span
    role="status"
    aria-label="загрузка"
    className={cn(
      'border-primary inline-block size-5 shrink-0 animate-spin rounded-full border border-r-transparent',
      className
    )}
  />
)
