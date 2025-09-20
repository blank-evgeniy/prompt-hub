import { Container } from '@/shared/ui/container'
import { Header } from './header'

interface BaseLayoutProps {
  children: React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Container className="flex flex-1 flex-col">{children}</Container>
    </div>
  )
}
