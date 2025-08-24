export interface UserResponseDto {
  id: string
  email: string
  username: string
  bio?: string | null
  avatarUrl?: string | null
  createdAt: string
  updatedAt: string
  followersCount: number
  followingCount: number
  promptsCount: number
  isFollowed?: boolean | null
}

export interface FollowerResponseDto {
  id: string
  username: string
  avatarUrl?: string | null
}

export interface FollowingResponseDto {
  id: string
  username: string
  avatarUrl?: string | null
}
