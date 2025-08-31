'use client'

import BaseSelect, { Props as BaseSelectProps } from 'react-select'
import { Label } from '../label'
import { FieldMessage } from '../field-message'
import { useId } from 'react'
import { cn } from '@/shared/utils/cn'

interface GroupBase<Option> {
  readonly options: readonly Option[]
  readonly label?: string
}

export type DefaultOption = { value: string; label: string }

type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = BaseSelectProps<Option, IsMulti, Group> & {
  label?: string
  message?: string
}

export const Select = <
  Option extends DefaultOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  label,
  message,
  id,
  isDisabled,
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
  const reactId = useId()

  return (
    <div className="flex flex-col">
      {label && (
        <Label htmlFor={id} data-disabled={isDisabled} className="mb-2 text-sm">
          {label}
        </Label>
      )}
      <BaseSelect
        instanceId={id ?? reactId}
        theme={(theme) => ({ ...theme, borderRadius: 6 })}
        isDisabled={isDisabled}
        unstyled
        classNames={{
          control: ({ isFocused, isDisabled }) =>
            cn(
              'flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none',
              'placeholder:text-on-surface-var selection:bg-primary-container selection:text-on-primary-container border-outline',
              isFocused && 'border-primary',
              isDisabled && 'pointer-events-none cursor-not-allowed opacity-50',
              props['aria-invalid'] && 'border-error text-error'
            ),
          valueContainer: () => 'p-0 m-0',
          indicatorsContainer: () => 'gap-1',
          input: () => 'text-base',
          singleValue: () => 'text-base',
          placeholder: () => 'text-on-surface-var',
          menu: () =>
            'mt-1 rounded-md border border-outline bg-surface shadow-md overflow-hidden',
          option: ({ isFocused, isSelected }) =>
            cn(
              'cursor-pointer px-3 py-2 text-base',
              isFocused && 'bg-primary-container text-on-primary-container',
              isSelected && 'bg-primary text-on-primary'
            ),
        }}
        {...props}
      />

      {message && <FieldMessage className="mt-1">{message}</FieldMessage>}
    </div>
  )
}
