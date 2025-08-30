import axiosInstance from '../axios-instance'
import { LoginDto, LoginResponseDto, RegisterDto } from '../types'

export const authApi = {
  login: (data: LoginDto) =>
    axiosInstance.post<LoginResponseDto>('/auth/login', data),
  register: (data: RegisterDto) => axiosInstance.post('/auth/register', data),
  // TODO: add logout
  logout: () => new Promise((resolve) => resolve(null)),
}
