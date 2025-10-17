import { profileBase, routes } from './routes'

export const isProtectedRoute = (path: string) => path.startsWith(profileBase)

export const isPublicRoute = (path: string) =>
  (Object.values(routes.auth) as string[]).includes(path)
