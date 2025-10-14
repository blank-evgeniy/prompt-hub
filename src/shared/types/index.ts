export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref']
