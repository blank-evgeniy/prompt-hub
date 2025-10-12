import { cn } from '@/shared/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'

export const typographyVariants = cva('text-base-content', {
  variants: {
    variant: {
      h1: 'text-2xl font-semibold',
      h2: 'text-xl font-medium',
      h3: 'text-lg font-medium',
      'card-title': 'text-lg font-semibold',
      paragraph: 'text-base',
      description: 'text-sm text-base-content/70',
      label: 'text-xs',
    },
  },
  defaultVariants: {
    variant: 'paragraph',
  },
})

export type TypographyProps<T extends React.ElementType> = {
  as?: T
} & React.ComponentPropsWithoutRef<T> &
  VariantProps<typeof typographyVariants>

export const Typography = <T extends React.ElementType = 'span'>({
  as,
  className,
  variant,
  ...props
}: TypographyProps<T>) => {
  const Component = as || 'span'

  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  )
}
