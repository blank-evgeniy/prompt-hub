import { UserSearchIcon } from 'lucide-react'
import Link from 'next/link'

import { routes } from '@/shared/routes'
import { Avatar } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardHeader } from '@/shared/ui/card'
import { Typography } from '@/shared/ui/typography'

import { User } from '../../model'

interface UserCardProps {
  data: User
}

export const UserCard = ({ data }: UserCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center gap-4">
      <Avatar src={data.avatar?.url} backgroundColor={data.avatar?.color} />
      <Typography variant={'card-title'} className="min-w-0 truncate">
        {data.name}
      </Typography>

      <Button asChild className="ml-auto">
        <Link href={routes.public.user(data.name)}>
          Посмотреть <UserSearchIcon />
        </Link>
      </Button>
    </CardHeader>
    {data.description && (
      <CardContent>
        <Typography variant={'description'}>{data.description}</Typography>
      </CardContent>
    )}
  </Card>
)
