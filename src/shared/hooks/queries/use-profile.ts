import { useQuery } from '@tanstack/react-query'

import { profileApi } from '@/shared/api/services'

import { queryKeyService } from './query-key-service'

export const useProfile = () =>
  useQuery({
    queryKey: queryKeyService.getProfile(),
    queryFn: () => profileApi.me(),
    retry: 1,
  })
