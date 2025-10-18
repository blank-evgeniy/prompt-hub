export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref']

export type PageParams<T extends Record<string, string>> = {
  params: Promise<T>
}
