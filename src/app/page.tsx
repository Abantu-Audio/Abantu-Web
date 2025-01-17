import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
// import { BlackSection } from "@/components/BlackSection";
import { StoriesSection } from "@/components/StoriesSection";
import { UniversityPressSection } from "@/components/UniversityPressSection";
import { DiscordSection } from "@/components/DiscordSection";
import { BarsSection } from "@/components/BarsSection";
import { FooterSection } from "@/components/FooterSection";
import { CollectionsSection } from "@/components/CollectionsSection";

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
        <BarsSection />
        <FooterSection />
      </div>
    </main>
  );
}
