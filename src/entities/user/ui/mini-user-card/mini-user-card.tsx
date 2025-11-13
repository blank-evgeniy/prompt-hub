import { Avatar } from '@/shared/ui/avatar'
import { Typography } from '@/shared/ui/typography'

import { User } from '../../model'

interface MiniUserCardProps {
  data: User
}

export const MiniUserCard = ({ data }: MiniUserCardProps) => (
  <div className="mr-auto flex min-w-0 shrink-0 items-center gap-2">
    <Avatar
      size={'sm'}
      src={data.avatar?.url}
      backgroundColor={data.avatar?.color}
    />

    <div className="flex min-w-0 flex-col">
      <h3 className="truncate font-medium">{data.name}</h3>
      {data.description && (
        <Typography variant={'description'} className="min-w-0 truncate">
          {data.description}
        </Typography>
      )}
    </div>
  </div>
)
