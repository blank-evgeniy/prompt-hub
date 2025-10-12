import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/utils/cn'

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-field text-sm font-medium transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-content hover:bg-primary/80',
        destructive: 'bg-error text-error-content hover:bg-error/80',
        outline:
          'border bg-transparent text-base-content hover:bg-primary hover:text-primary-content',
        secondary: 'bg-secondary text-secondary-content hover:bg-secondary/80',
        accent: 'bg-accent text-accent-content hover:bg-accent/80',
        ghost: 'hover:bg-base-300 text-primary',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: "size-9 [&_svg:not([class*='size-'])]:size-5",
        'icon-sm': "size-7 [&_svg:not([class*='size-'])]:size-4",
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
    isLoading?: boolean
  }

export const Button = ({
  asChild = false,
  variant,
  size,
  className,
  children,
  isLoading,
  disabled,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      disabled={isLoading || disabled}
      className={cn(buttonVariants({ variant, size, className }), {
        'opacity-50': disabled,
        'animate-pulse': isLoading,
      })}
      {...props}
    >
      {children}
    </Comp>
  )
}
