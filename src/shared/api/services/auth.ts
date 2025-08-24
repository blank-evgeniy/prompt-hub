import axiosInstance from '../axios-instance'
import { LoginDto, LoginResponse, RegisterDto } from '../types'

export const authApi = {
  login: (data: LoginDto) =>
    axiosInstance.post<LoginResponse>('/auth/login', data),
  register: (data: RegisterDto) => axiosInstance.post('/auth/register', data),
}
