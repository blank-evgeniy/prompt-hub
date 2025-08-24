import { cn } from '@/shared/utils/cn'

export const Loader = ({ className }: { className?: string }) => (
  <span
    role="status"
    aria-label="загрузка"
    className={cn(
      'border-primary size-5 animate-spin rounded-full border border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.1s_linear_infinite]',
      className
    )}
  />
)
