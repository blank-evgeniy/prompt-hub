import { cn } from '@/shared/utils/cn'
import { Label } from '../label'
import { FieldMessage } from '../field-message'
import { Typography } from '../typography'

type TextareaProps = React.ComponentProps<'textarea'> & {
  label?: string
  message?: string
}

export const Textarea = ({
  className,
  ref,
  value,
  label,
  message,
  id,
  disabled,
  maxLength,
  ...props
}: TextareaProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <Label htmlFor={id} data-disabled={disabled} className="mb-2 text-sm">
          {label}
        </Label>
      )}
      <textarea
        ref={ref}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        value={value}
        className={cn(
          'placeholder:text-on-surface-var selection:bg-primary-container selection:text-on-primary-container border-outline flex w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:border-primary',
          'aria-invalid:border-error aria-invalid:text-error',
          className
        )}
        {...props}
      />
      {maxLength && (
        <Typography variant="label" className="mt-1">
          {typeof value === 'string' ? value.length : 0} / {maxLength}
        </Typography>
      )}
      {message && <FieldMessage className="mt-1">{message}</FieldMessage>}
    </div>
  )
}
