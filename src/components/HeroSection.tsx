import Image from "next/image";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function HeroSection() {
  return (
    <div className="relative w-full flex items-start px-4 pt-2 pb-10 md:py-12 md:px-5 lg:px-7">
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 max-w-6xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="space-y-5 md:space-y-7 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Our Stories.
            <br />
            Our Cultures.
          </h1>
          
          <p className="text-gray-800/80 text-sm sm:text-base md:text-lg max-w-lg mx-auto lg:mx-0">
          In a world where our voices are too often overlooked, we’re turning up the volume. Discover audiobooks that educate, empower, and celebrate your culture.
          </p>
          {/* Primary Button */}
          <div className="max-w-md mx-auto lg:mx-0">
            <PrimaryButton fullWidth>
              Join Waitlist
            </PrimaryButton>
          </div>
        </div>

        {/* Right Column - Image Content */}
        <div className="relative mt-7 lg:mt-0 flex justify-center lg:justify-start">
          {/* Main Image */}
          <div className="relative z-10">
            <Image
              src="/listen.png"
              alt="Hero illustration"
              width={370}
              height={469}
              className="relative w-full max-w-[720px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 