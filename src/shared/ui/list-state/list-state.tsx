import { Loader } from '../loaders'
import { Typography } from '../typography'

export type ListStateProps<T> = {
  items: T[]
  isLoading?: boolean
  isLoadingMore?: boolean
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
  isLoadingMore,
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

  return (
    <div className={containerClassName}>
      {items.map(children)}
      {isLoadingMore && <Loader className="mx-auto mt-4" />}
    </div>
  )
}
