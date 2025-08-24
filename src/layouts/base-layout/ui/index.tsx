import { Container } from '@/shared/ui/container'
import { Header } from './header'

interface BaseLayoutProps {
  children: React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Container className="flex-1 py-6 md:py-10">{children}</Container>
    </div>
  )
}
