import { Check } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import Image from "next/image";

export function DiscordSection() {
  return (
    <section className="relative w-full flex items-center px-4 py-10 md:py-20 md:px-5 lg:px-7 bg-white">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-7 lg:gap-10 max-w-6xl mx-auto">
        {/* Content */}
        <div className="flex flex-col justify-center space-y-5 md:space-y-7 order-1 lg:order-none">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#333333] drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
            Join the Tribe
          </h2>
          
          <p className="text-[#333333]/80 text-sm sm:text-base md:text-lg mt-0">
            Pull up to the Abantu Discord—a place where we chop it up about books, culture, and everything in between. Join the tribe and be part of the movement.
          </p>

          <div className="space-y-4 md:space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#F4EDFD] flex items-center justify-center">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <p className="text-[#333333]/80 text-sm sm:text-base md:text-lg">
                Channels for book clubs, cultural discussions, and exclusive events.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#F4EDFD] flex items-center justify-center">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <p className="text-[#333333]/80 text-sm sm:text-base md:text-lg">
                Be the first to hear about new drops and get early access to features.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#F4EDFD] flex items-center justify-center">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <p className="text-[#333333]/80 text-sm sm:text-base md:text-lg">
                Link up with a community that gets you.
              </p>
            </div>
          </div>

          <div className="pt-5">
            <PrimaryButton>
              Join the discord
            </PrimaryButton>
          </div>
        </div>
        <div className="lg-hidden flex flex-1 flex-col b-4 items-center justify-center">
          <Image
            src="/abantu-discord.png"
            alt="Abantu Discord Logo"
            width={300}
            height={55}
            className="mb-8"
          />
          <Image
            src="/discord.png"
            alt="Discord Community Preview"
            width={720}
            height={480}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
} 