import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('*/profile/me', () => {
    return HttpResponse.json({
      id: '1',
      username: 'testuser',
      bio: 'This is a test user.',
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-01-01T00:00:00Z',
      followersCount: 10,
      followingCount: 5,
      promptsCount: 3,
    })
  }),

  http.post('*/auth/logout', () => {
    return HttpResponse.json({ success: true })
  }),
]
