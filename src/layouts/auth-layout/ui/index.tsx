import { routes } from '@/shared/configs/routes'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { ScrollTextIcon } from 'lucide-react'
import Link from 'next/link'

interface AuthLayoutProps {
  children: React.ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="bg-tertiary/20 absolute top-10 left-10 hidden size-1200 rounded-full blur-xl lg:block"></div>
      <div className="bg-secondary/20 absolute top-0 right-10 hidden size-1000 rounded-full blur-xl lg:block"></div>

      <Container className="flex flex-1 flex-col items-center justify-start gap-8 py-8 md:py-10 xl:py-16">
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
