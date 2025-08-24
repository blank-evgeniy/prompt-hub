import { cn } from '@/shared/utils/cn'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: 'bg-primary text-on-primary hover:bg-primary/80',
        destructive: 'bg-error text-on-error hover:bg-error/80',
        outline:
          'border bg-surface text-on-surface hover:bg-primary hover:text-on-primary',
        secondary: 'bg-secondary text-on-secondary hover:bg-secondary/80',
        tertiary: 'bg-tertiary text-on-tertiary hover:bg-tertiary/80',
        ghost: 'hover:bg-surface-bright text-primary',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export const Button = ({
  asChild = false,
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </Comp>
  )
}
