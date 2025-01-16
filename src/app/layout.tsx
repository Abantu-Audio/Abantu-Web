import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Abantu',
  description: 'Our Stories. Our Cultures.',
  icons: {
    icon: [
      {
        url: '/favicon.jpg',
        href: '/favicon.jpg',
      }
    ],
    shortcut: '/favicon.jpg',
    apple: {
      url: '/favicon.jpg',
    }
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
