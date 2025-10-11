export interface LoginDto {
  email: string
  password: string
}

export interface RegisterDto {
  email: string
  username: string
  password: string
}

export interface LoginResponseDto {
  accessToken: string
}

export interface RefreshTokenResponseDto {
  accessToken: string
}
