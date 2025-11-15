import './styles/globals.css'

import { Toast } from '@/shared/ui/toast'

import { AuthBootstrap, QueryProvider, ThemeProvider } from './providers'

export const App = ({ children }: { children: React.ReactNode }) => (
  <QueryProvider>
    <ThemeProvider>
      <Toast />
      <AuthBootstrap>{children}</AuthBootstrap>
    </ThemeProvider>
  </QueryProvider>
)
