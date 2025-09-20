import { QueryProvider } from './providers'

import './styles/globals.css'

export const App = ({ children }: { children: React.ReactNode }) => (
  <QueryProvider>{children}</QueryProvider>
)
