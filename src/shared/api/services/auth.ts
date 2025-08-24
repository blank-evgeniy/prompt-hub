import axiosInstance from '../axios-instance'
import { LoginDto, RegisterDto } from '../types'

export const authApi = {
  login: (data: LoginDto) => axiosInstance.post('/auth/login', data),
  register: (data: RegisterDto) => axiosInstance.post('/auth/register', data),
}
