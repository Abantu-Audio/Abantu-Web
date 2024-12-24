import Image from "next/image";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function HeroSection() {
  return (
    <div className="relative w-full flex items-center px-4 py-10 md:py-20 md:px-5 lg:px-7">
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 max-w-6xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="space-y-5 md:space-y-7 text-center lg:text-left">
          <h1 className="text-3xl sm:text-[2.8rem] md:text-5xl lg:text-6xl font-bold leading-tight">
            Our Stories.
            <br />
            Our Cultures.
          </h1>
          
          <p className="text-gray-800/80 text-sm sm:text-base md:text-lg max-w-lg mx-auto lg:mx-0">
            Dive into audiobooks and dramas that hit different—stories that make you feel seen, inspired, and ready to move.
          </p>
          {/* Primary Button */}
          <PrimaryButton fullWidth>
            Join Waitlist
          </PrimaryButton>
        </div>

        {/* Right Column - Image Content */}
        <div className="relative mt-7 lg:mt-0">
          {/* Main Image */}
          <div className="relative z-10">
            <Image
              src="/listen.png"
              alt="Hero illustration"
              width={370}
              height={469}
              className="relative mx-auto lg:ml-auto w-full max-w-[720px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 