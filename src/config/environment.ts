export const config = {
  isProduction: process.env.NODE_ENV === 'production',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  },
  routes: {
    app: {
      home: '/app',
      library: '/app/library',
      player: '/app/player',
    },
    marketing: {
      home: '/',
      about: '/about',
      pricing: '/pricing',
    },
    auth: {
      login: '/auth/login',
      register: '/auth/register',
    },
  },
} as const 