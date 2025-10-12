import { ScrollTextIcon } from 'lucide-react'
import Link from 'next/link'

import { routes } from '@/shared/routes'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'

import { HeaderActions } from './header-actions'
import { ThemeToggle } from './theme-toggle'

export const Header = () => {
  return (
    <header className="border-b">
      <Container className="flex items-center gap-8 py-2">
        <div className="flex items-center gap-2">
          <Link
            href={routes.public.home}
            className="text-primary p-xs hover:opacity-80"
          >
            <ScrollTextIcon />
          </Link>

          <Button asChild size={'sm'} variant={'ghost'} className="font-mono">
            <Link href={routes.public.home}>PromptHub</Link>
          </Button>
        </div>

        <div className="ml-auto flex gap-4">
          <ThemeToggle />
          <HeaderActions />
        </div>
      </Container>
    </header>
  )
}
