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
    myPrompts: '/prompts',
    createPrompt: '/prompts/create',
    editPrompt: (id: string) => `/prompts/${id}/edit`,
  },
}
