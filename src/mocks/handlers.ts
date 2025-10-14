import { http, HttpResponse } from 'msw'

import { CreatePromptDto, UpdatePromptDto } from '@/shared/api/types'

export const handlers = [
  // Profile
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
  http.patch('*/profile/edit', () => {
    return HttpResponse.json({
      id: '1',
      username: 'testuser2',
      bio: 'This is an updated test user.',
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-01-01T00:00:00Z',
      followersCount: 10,
      followingCount: 5,
      promptsCount: 3,
    })
  }),

  // Auth
  http.post('*/auth/logout', () => {
    return HttpResponse.json({ success: true })
  }),
  http.post('*/auth/register', () => {
    return HttpResponse.json({ accessToken: 'mocked_access_token' })
  }),
  http.post('*/auth/login', () => {
    return HttpResponse.json({ accessToken: 'mocked_access_token' })
  }),
  http.post('*/auth/refresh', () => {
    return HttpResponse.json({ accessToken: 'mocked_access_token' })
  }),

  // Prompts
  http.get('*/prompt/me', () => {
    return HttpResponse.json([
      {
        id: '1',
        title: 'Test Prompt 1',
        content: 'This is a test prompt.',
        category: 'TEXT',
        authorId: '1',
        createdAt: '2023-01-01T00:00:00Z',
        updatedAt: '2023-01-01T00:00:00Z',
        likesCount: 5,
        isLiked: true,
      },
      {
        id: '2',
        title: 'Test Prompt 2',
        content: 'This is another test prompt.',
        category: 'IMAGE',
        authorId: '1',
        createdAt: '2023-01-01T00:00:00Z',
        updatedAt: '2023-01-01T00:00:00Z',
        likesCount: 3,
        isLiked: false,
      },
    ])
  }),
  http.patch('*/prompt/:id', async ({ request, params }) => {
    const body = (await request.json()) as UpdatePromptDto
    const { id } = params

    return HttpResponse.json({
      id: id as string,
      title: body.title ?? 'Default title',
      content: body.content ?? 'Default content',
      category: body.category ?? 'TEXT',
      authorId: '1',
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: new Date().toISOString(),
      likeCount: 0,
      isLiked: false,
    })
  }),
  http.post('*/prompt', async ({ request }) => {
    const body = (await request.json()) as CreatePromptDto

    return HttpResponse.json({
      id: 'new-id',
      title: body.title,
      content: body.content,
      category: body.category,
      authorId: '1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      likeCount: 0,
      isLiked: false,
    })
  }),
  http.delete('*/prompt/:id', () => {
    return HttpResponse.json({ success: true })
  }),
]
