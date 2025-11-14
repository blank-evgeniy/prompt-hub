import { ProfilePage } from '@/pages/profile'
import { PageParams } from '@/shared/types'

const User = async ({ params }: PageParams<{ username: string }>) => {
  const { username } = await params

  return <ProfilePage username={username} />
}

export default User
