import { Check } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function DiscordSection() {
  return (
    <section className="relative w-full flex items-center px-4 py-10 md:py-20 md:px-5 lg:px-7 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 max-w-6xl mx-auto">
        {/* Left side - Image */}
        <div className="relative">
          <img
            src="/discord.png"
            alt="Discord Community Preview"
            className="w-full max-w-[720px] h-auto mx-auto lg:mx-0"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-5 md:space-y-7 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#333333] drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
            Where The Conversation Starts
          </h2>
          <p className="text-[#333333]/80 text-sm sm:text-base md:text-lg">
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
      </div>
    </section>
  );
} 