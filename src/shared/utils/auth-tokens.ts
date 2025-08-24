import Cookies from 'js-cookie'
import { ACCESS_TOKEN_KEY } from '../consts'

export const getAccessToken = () => {
  const authToken = Cookies.get(ACCESS_TOKEN_KEY)
  return authToken || null
}

export const saveAccessToken = (authToken: string) => {
  Cookies.set(ACCESS_TOKEN_KEY, authToken, { expires: 7 })
}

export const clearAccessToken = () => {
  Cookies.remove(ACCESS_TOKEN_KEY)
}
