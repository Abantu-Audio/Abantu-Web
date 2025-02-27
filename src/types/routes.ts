export const MARKETING_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PRICING: '/pricing',
  // Other marketing pages
} as const

export const APP_ROUTES = {
  // These will be blocked from indexing
  DASHBOARD: '/app',
  LIBRARY: '/app/library',
  // Other app routes
} as const

export const ROUTES = {
  MARKETING: {
    HOME: '/',
    ABOUT: '/about',
    PRICING: '/pricing',
    CONTACT: '/contact',
  },
  APP: {
    HOME: '/app',
    LIBRARY: '/app/library',
    PLAYER: '/app/player',
    SETTINGS: '/app/settings',
  },
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
  },
} as const

export type AppRoute = typeof ROUTES.APP[keyof typeof ROUTES.APP]
export type MarketingRoute = typeof ROUTES.MARKETING[keyof typeof ROUTES.MARKETING]
export type AuthRoute = typeof ROUTES.AUTH[keyof typeof ROUTES.AUTH] 