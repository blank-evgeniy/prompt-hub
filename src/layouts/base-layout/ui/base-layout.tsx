import { Container } from '@/shared/ui/container'

import { Header } from './header'

interface BaseLayoutProps {
  children: React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Container className="my-4 flex flex-1 flex-col lg:my-6">
        {children}
      </Container>
    </div>
  )
}
