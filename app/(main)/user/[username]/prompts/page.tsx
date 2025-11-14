import { UserPromptsPage } from '@/pages/user-prompts'
import { PageParams } from '@/shared/types'

const User = async ({ params }: PageParams<{ username: string }>) => {
  const { username } = await params

  return <UserPromptsPage username={username} />
}

export default User
