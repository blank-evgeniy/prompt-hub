import { cn } from '@/shared/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'

const cardVariants = cva('flex flex-col gap-6 rounded-xl py-6 shadow-sm', {
  variants: {
    variant: {
      default: 'bg-surface-bright text-on-surface',
      primary: 'bg-primary text-on-primary',
      secondary: 'bg-secondary text-on-secondary',
      tertiary: 'bg-tertiary text-on-tertiary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type CardProps = React.ComponentProps<'div'> & VariantProps<typeof cardVariants>

export const Card = ({ className, variant, ...props }: CardProps) => {
  return <div className={cn(cardVariants({ variant, className }))} {...props} />
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
