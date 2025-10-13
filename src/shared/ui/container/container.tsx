import { cn } from '@/shared/utils/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        'max-w-container mx-auto w-full min-w-0 px-4 md:px-8',
        className
      )}
    >
      {children}
    </div>
  )
}
