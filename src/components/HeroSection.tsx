import Image from "next/image";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function HeroSection() {
  return (
    <div className="relative w-full flex items-center px-4 py-12 md:py-24 md:px-6 lg:px-8">
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Our Stories.
            <br />
            Our Cultures.
          </h1>
          
          <p className="text-gray-800/80 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            Dive into audiobooks and dramas that hit different—stories that make you feel seen, inspired, and ready to move.
          </p>
          {/* Primary Button */}
          <PrimaryButton fullWidth>
            Join Waitlist
          </PrimaryButton>
        </div>

        {/* Right Column - Image Content */}
        <div className="relative mt-8 lg:mt-0">
          {/* Main Image */}
          <div className="relative z-10">
            <Image
              src="/listen.png"
              alt="Hero illustration"
              width={411}
              height={521}
              className="relative mx-auto lg:ml-auto w-full max-w-[800px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 