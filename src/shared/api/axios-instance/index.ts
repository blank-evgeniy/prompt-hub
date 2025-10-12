import axios from 'axios'

import { authApi } from '../services'
import {
  clearAccessToken,
  getAccessToken,
  saveAccessToken,
} from '../tokens/auth-tokens'

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

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      const currentToken = getAccessToken()

      if (!currentToken) {
        return Promise.reject(error)
      }

      try {
        const newAccessToken = (await authApi.refresh()).data.accessToken
        saveAccessToken(newAccessToken)

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`

        return axiosInstance(originalRequest)
      } catch (tokenError) {
        clearAccessToken()
        return Promise.reject(tokenError)
      }
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
