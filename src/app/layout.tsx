import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6F4597" />
        <meta name="msapplication-TileColor" content="#6F4597" />
        <meta name="theme-color" content="#6F4597" />
      </head>
      <body className={plusJakartaSans.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
