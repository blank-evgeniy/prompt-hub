import axiosInstance from '../axios-instance'
import {
  LoginDto,
  LoginResponseDto,
  RefreshTokenResponseDto,
  RegisterDto,
} from '../types'

export const authApi = {
  login: (data: LoginDto) =>
    axiosInstance.post<LoginResponseDto>('/auth/login', data),
  register: (data: RegisterDto) => axiosInstance.post('/auth/register', data),
  logout: () => axiosInstance.post<void>('/auth/logout'),
  refresh: () => axiosInstance.post<RefreshTokenResponseDto>('/auth/refresh'),
}
