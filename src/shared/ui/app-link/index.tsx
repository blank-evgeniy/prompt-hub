import { cn } from '@/shared/utils/cn'
import Link from 'next/link'

type AppLinkProps = React.ComponentProps<typeof Link>

export const AppLink = ({ className, ...props }: AppLinkProps) => {
  return (
    <Link
      className={cn('text-primary underline hover:opacity-80', className)}
      {...props}
    />
  )
}
