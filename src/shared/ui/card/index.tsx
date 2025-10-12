import { cn } from '@/shared/utils/cn'

type CardProps = React.ComponentProps<'div'>

export const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-box flex flex-col gap-6 py-6 shadow-sm',
        'bg-base-200 border-base-300 text-base-content border',
        className
      )}
      {...props}
    />
  )
}

type CardHeaderProps = React.ComponentProps<'div'>

export const CardHeader = ({ className, ...props }: CardHeaderProps) => {
  return <div className={cn('px-6', className)} {...props} />
}

type CardContentProps = React.ComponentProps<'div'>

export const CardContent = ({ className, ...props }: CardContentProps) => {
  return (
    <div className={cn('flex flex-col gap-6 px-6', className)} {...props} />
  )
}

type CardFooterProps = React.ComponentProps<'div'>

export const CardFooter = ({ className, ...props }: CardFooterProps) => {
  return (
    <div
      className={cn('flex flex-col gap-4 px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}
