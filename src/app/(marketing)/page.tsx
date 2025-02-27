// This will be the main marketing page
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StoriesSection } from "@/components/StoriesSection";
import { DiscordSection } from "@/components/DiscordSection";
import { FooterSection } from "@/components/FooterSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { Metadata } from 'next';
import { Organization, WithContext } from 'schema-dts'

export const metadata: Metadata = {
  title: 'Abantu Audio | Curated Audiobooks',
  description: 'Discover curated audiobooks and dramas that amplify underrepresented voices.',
  openGraph: {
    // ... your existing OpenGraph metadata
  },
  // Ensure marketing pages are indexed
  robots: {
    index: true,
    follow: true,
  }
};

export default function HomePage() {
  const orgSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Abantu Audio",
    url: "https://abantuaudio.com",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Header />
      <HeroSection />
      <StoriesSection />
      <CollectionsSection />
      <DiscordSection />
      <FooterSection />
    </>
  )
} 