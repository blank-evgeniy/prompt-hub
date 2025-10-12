import { Loader } from '../loaders'
import { Typography } from '../typography'

type ListStateProps<T> = {
  items: T[]
  isLoading?: boolean
  isError?: boolean
  containerClassName?: string
  errorSlot?: React.ReactNode
  loadingSlot?: React.ReactNode
  emptySlot?: React.ReactNode
  children: (item: T) => React.ReactNode
}

export const ListState = <T,>({
  items,
  isLoading,
  isError,
  errorSlot,
  loadingSlot,
  emptySlot,
  containerClassName,
  children,
}: ListStateProps<T>) => {
  if (isLoading) {
    return loadingSlot ?? <Loader className="mx-auto" />
  }

  if (isError) {
    return (
      errorSlot ?? (
        <Typography variant={'paragraph'} className="text-error">
          При загрузке данных произошла ошибка
        </Typography>
      )
    )
  }

  if (items.length === 0) {
    return (
      emptySlot ?? (
        <Typography variant={'paragraph'} className="text-base-content/50">
          Ничего не найдено
        </Typography>
      )
    )
  }

  return <div className={containerClassName}>{items.map(children)}</div>
}
