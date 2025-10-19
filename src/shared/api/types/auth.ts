import { UserResponseDto } from './user'

export interface LoginDto {
  username: string
  password: string
}

export interface RegisterDto {
  username: string
  password: string
}

export interface LoginResponseDto {
  accessToken: string
  user: UserResponseDto
}

export interface RefreshTokenResponseDto {
  accessToken: string
  user: UserResponseDto
}
