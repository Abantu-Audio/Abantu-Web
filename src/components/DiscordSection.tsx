import { Check } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function DiscordSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4">
        {/* Left side - Image */}
        <div className="relative">
          <div className="">
            <img
              src="/discord.png"
              alt="Discord Community Preview"
              className=""
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[40px] font-bold text-[#333333] mb-4 drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
            Where The Conversation Starts
          </h2>
          <p className="text-[#333333] opacity-80 text-xl mb-12">
            Pull up to the Abantu Discord—a place where we chop it up about books, culture, and everything in between. Join the tribe and be part of the movement.
          </p>

          <div className="space-y-5 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-[#F4EDFD] flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <p className="text-[#333333] opacity-80 text-lg">
                Channels for book clubs, cultural discussions, and exclusive events.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-[#F4EDFD] flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <p className="text-[#333333] opacity-80 text-lg">
                Be the first to hear about new drops and get early access to features.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-[#F4EDFD] flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <p className="text-[#333333] opacity-80 text-lg">
                Link up with a community that gets you.
              </p>
            </div>
          </div>

          <PrimaryButton>
            Join the discord
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
} 