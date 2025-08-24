import { cn } from '@/shared/utils/cn'
import { Label } from '../label'

type InputProps = React.ComponentProps<'input'> & {
  label?: string
}

export const Input = ({
  className,
  type,
  ref,
  label,
  id,
  disabled,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <Label htmlFor={id} data-disabled={disabled} className="text-sm">
          {label}
        </Label>
      )}
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        id={id}
        className={cn(
          'placeholder:text-on-surface-var selection:bg-primary-container selection:text-on-primary-container border-outline flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:border-primary',
          'aria-invalid:border-error aria-invalid:text-error',
          className
        )}
        {...props}
      />
    </div>
  )
}
