export const profileBase = '/profile'

export const routes = {
  public: {
    home: '/',
    privacy: '/privacy',
    terms: '/terms',
    user: (username: string) => `/user/${username}`,
    userPrompts: (username: string) => `/user/${username}/prompts`,
    userFollowers: (username: string) => `/user/${username}/followers`,
    userFollowing: (username: string) => `/user/${username}/following`,
  },

  auth: {
    login: '/login',
    registration: '/register',
  },

  profile: {
    edit: `${profileBase}/edit`,
    myPrompts: `${profileBase}/prompts`,
    createPrompt: `${profileBase}/prompts/create`,
    favorites: '/favorites',
  },
} as const

export type Routes = typeof routes
