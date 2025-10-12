import './styles/globals.css'

import { QueryProvider, ThemeProvider } from './providers'

export const App = ({ children }: { children: React.ReactNode }) => (
  <QueryProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </QueryProvider>
)
