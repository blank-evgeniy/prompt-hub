import { cn } from '@/shared/utils/cn'

type FieldMessageProps = React.HTMLAttributes<HTMLParagraphElement>

export const FieldMessage = ({ className, ...props }: FieldMessageProps) => {
  return <p className={cn('text-error text-sm', className)} {...props} />
}
