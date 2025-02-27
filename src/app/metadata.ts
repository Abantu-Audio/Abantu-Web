import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Abantu Audio | Curated Audiobooks',
    template: '%s | Abantu Audio'
  },
  description: 'Discover curated audiobooks and dramas that amplify underrepresented voices. Explore stories that educate, inspire, and celebrate culture.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#6F4597'
      }
    ]
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    minimumScale: 1,
  },
  themeColor: '#6F4597',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Abantu Audio'
  },
  applicationName: 'Abantu Audio',
  formatDetection: {
    telephone: false
  },
  other: {
    'msapplication-TileColor': '#6F4597',
    'msapplication-config': '/browserconfig.xml'
  }
}; 