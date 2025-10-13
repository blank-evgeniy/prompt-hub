import { cn } from '@/shared/utils/cn'

import { FieldMessage } from '../field-message'
import { Label } from '../label'

type InputProps = React.ComponentProps<'input'> & {
  label?: string
  message?: string
}

export const Input = ({
  className,
  type,
  ref,
  label,
  message,
  id,
  disabled,
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <Label htmlFor={id} data-disabled={disabled} className="mb-2 text-sm">
          {label}
        </Label>
      )}
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        id={id}
        className={cn(
          'placeholder:text-base-content/50 selection:bg-primary selection:text-primary-content border-base-content/50 rounded-field flex h-9 w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:border-primary',
          'aria-invalid:border-error aria-invalid:text-error',
          className
        )}
        {...props}
      />

      {message && <FieldMessage className="mt-1">{message}</FieldMessage>}
    </div>
  )
}
