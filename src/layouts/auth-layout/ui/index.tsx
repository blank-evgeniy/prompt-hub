import { routes } from '@/shared/routes'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { ScrollTextIcon } from 'lucide-react'
import Link from 'next/link'
import { RaysBackground } from './rays-background'

interface AuthLayoutProps {
  children: React.ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <RaysBackground />

      <Container className="flex flex-1 flex-col items-center justify-center gap-8 py-8 md:py-10 xl:-translate-y-16 xl:py-16">
        <div className="flex items-center gap-2">
          <Link
            href={routes.public.home}
            className="text-primary p-xs hover:opacity-80"
          >
            <ScrollTextIcon />
          </Link>

          <Button asChild className="font-mono text-2xl" variant={'ghost'}>
            <Link href={routes.public.home}>PromptHub</Link>
          </Button>
        </div>

        {children}
      </Container>
    </main>
  )
}
