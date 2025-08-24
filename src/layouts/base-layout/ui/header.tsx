import { routes } from '@/shared/configs/routes'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { ScrollTextIcon } from 'lucide-react'
import Link from 'next/link'
import { HeaderActions } from './header-actions'

export const Header = () => {
  return (
    <header className="shadow-sm">
      <Container className="flex items-center gap-8 py-4">
        <div className="flex items-center gap-2">
          <Link
            href={routes.public.home}
            className="text-primary p-xs hover:opacity-80"
          >
            <ScrollTextIcon />
          </Link>

          <Button asChild size={'sm'} variant={'ghost'}>
            <Link href={routes.public.home}>PromptHub</Link>
          </Button>
        </div>

        <HeaderActions className="ml-auto" />
      </Container>
    </header>
  )
}
