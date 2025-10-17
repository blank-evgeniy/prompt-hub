export const profileBase = '/profile'

export const routes = {
  public: {
    home: '/',
    privacy: '/privacy',
    terms: '/terms',
  },

  auth: {
    login: '/login',
    registration: '/register',
  },

  profile: {
    base: profileBase,
    myPrompts: `${profileBase}/prompts`,
    createPrompt: `${profileBase}/prompts/create`,
    editPrompt: (id: string) => `${profileBase}/prompts/${id}/edit`,
  },
} as const

export type Routes = typeof routes
