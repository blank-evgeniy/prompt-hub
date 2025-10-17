import { jwtDecode } from 'jwt-decode'

export interface JwtPayload {
  name: string
  sub: string
  iat: number
  exp: number
}

export const decodeToken = (token: string) => {
  try {
    return jwtDecode<JwtPayload>(token)
  } catch {
    return null
  }
}
