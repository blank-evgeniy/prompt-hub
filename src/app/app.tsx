import './styles/globals.css'

import { AuthBootstrap, QueryProvider, ThemeProvider } from './providers'

export const App = ({ children }: { children: React.ReactNode }) => (
  <QueryProvider>
    <ThemeProvider>
      <AuthBootstrap>{children}</AuthBootstrap>
    </ThemeProvider>
  </QueryProvider>
)
