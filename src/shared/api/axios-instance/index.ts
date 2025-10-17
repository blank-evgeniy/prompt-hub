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

interface FailedRequestQueueItem {
  resolve: (token: string) => void
  reject: (error: unknown) => void
}

let isRefreshing = false
let failedQueue: FailedRequestQueueItem[] = []

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error)
    else if (token) resolve(token)
  })
  failedQueue = []
}

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== '/auth/refresh'
    ) {
      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers['Authorization'] = `Bearer ${token}`
            }
            return axiosInstance(originalRequest)
          })
          .catch((err) => Promise.reject(err))
      }

      originalRequest._retry = true
      isRefreshing = true

      const currentToken = getAccessToken()
      if (!currentToken) {
        isRefreshing = false
        return Promise.reject(error)
      }

      try {
        console.log(1)
        const response = await authApi.refresh()
        console.log(2)
        const newAccessToken: string = response.data.accessToken
        saveAccessToken(newAccessToken)

        processQueue(null, newAccessToken)

        if (originalRequest.headers) {
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
        }
        return axiosInstance(originalRequest)
      } catch (tokenError) {
        console.log(3)

        processQueue(tokenError, null)
        clearAccessToken()
        return Promise.reject(tokenError)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
