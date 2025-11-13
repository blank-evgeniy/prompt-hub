export interface UserResponseDto {
  id: string
  username: string
  bio?: string | null
  avatar?: AvatarInfo
  createdAt: string
  updatedAt: string
  followersCount: number
  followingCount: number
  promptsCount: number
  isFollowed?: boolean | null
}

export interface AvatarInfo {
  url?: string | null
  color?: string | null
}

export interface FollowerResponseDto {
  id: string
  username: string
  avatar?: AvatarInfo
  bio?: string
}

export interface FollowingResponseDto {
  id: string
  username: string
  avatar?: AvatarInfo
  bio?: string
}
