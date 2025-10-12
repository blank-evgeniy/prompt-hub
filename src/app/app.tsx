import { QueryProvider, ThemeProvider } from './providers'

import './styles/globals.css'

export const App = ({ children }: { children: React.ReactNode }) => (
  <QueryProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </QueryProvider>
)
