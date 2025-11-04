export interface UpdateProfileDto {
  bio?: string | null
  username?: string
}

export interface UpdateAvatarDto {
  url: string | null
  color?: string | null
}
