import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Plus_Jakarta_Sans } from "next/font/google";
import { Metadata, Viewport } from 'next';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

// Root layout that applies to all routes
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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

// Remove the viewport from metadata if it exists
export const metadata: Metadata = {
  title: {
    template: '%s | Your App Name',
    default: 'Your App Name',
  },
  description: 'Your app description',
  // Remove viewport configuration from here if present
};

// Add separate viewport export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
