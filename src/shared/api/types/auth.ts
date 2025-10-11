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
}

export interface RefreshTokenResponseDto {
  accessToken: string
}
