import { UserResponseDto } from '@/shared/api/types'
import { ProfileCardData } from '../types'

export const mapUserDtoToProfileCard = (
  profile: UserResponseDto
): ProfileCardData => {
  return {
    username: profile.username,
    avatarUrl: profile.avatarUrl,
  }
}
