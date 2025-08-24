import axios from 'axios'
import { getAccessToken } from '@/shared/utils/auth-tokens'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  async (request) => {
    const accessToken = getAccessToken()
    if (accessToken) {
      request.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return request
  },
  (error) => Promise.reject(error)
)

export default axiosInstance
