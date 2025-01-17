import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StoriesSection } from "@/components/StoriesSection";
import { UniversityPressSection } from "@/components/UniversityPressSection";
import { DiscordSection } from "@/components/DiscordSection";
import { FooterSection } from "@/components/FooterSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abantu Audio | Curated Audiobooks',
  description: 'Discover curated audiobooks and dramas that amplify underrepresented voices. Explore stories that educate, inspire, and celebrate culture.',
  keywords: 'Curated audiobooks, Black and Latinx stories, Diverse voices, Cultural representation, Edutainment, Audiobook collections',
  openGraph: {
    title: 'Abantu Audio | Amplifying underrepresented voices',
    description: 'Explore curated audiobooks and dramas that inspire, educate, and celebrate diverse cultures. Join the Abantu movement today.',
    images: [
      {
        url: '/splash-hero.png',
        width: 1200,
        height: 630,
        alt: 'Abantu Audio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abantu Audio | Curated Audiobooks',
    description: 'Discover and listen to culturally relevant audiobooks',
    images: ['/splash-hero.png'],
  },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F2] w-full">
      <div className="mx-auto">
        <Header />
        <HeroSection />
        <StoriesSection />
        <CollectionsSection />
        <UniversityPressSection />
        <DiscordSection />
        <FooterSection />
      </div>
    </main>
  );
}
