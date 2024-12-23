import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function BarsSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-[#333333] drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
              Drop a bar
            </h2>
            <p className="text-lg text-[#333333]/80">
              With our &apos;Bars&apos; feature, you can clip the realest lines from your favorite audiobooks and share them with your people. Show your everyone what&apos;s speaking to your soul.
            </p>

            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-6">
                <div className="w-3 h-3 rounded-full bg-[#6F4597] mt-2" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-[#6F4597]">
                    Catch the Vibes
                  </h3>
                  <p className="text-[#333333]/80">
                    Clip 15-30 seconds of the dopest moments and share them straight from the app.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6">
                <div className="w-3 h-3 rounded-full bg-[#6F4597] mt-2" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-[#6F4597]">
                    Start the conversation
                  </h3>
                  <p className="text-[#333333]/80">
                    Add your own thoughts or let the story speak for itself to connect with your audience on a deeper level.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6">
                <div className="w-3 h-3 rounded-full bg-[#6F4597] mt-2" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-[#6F4597]">
                    Set the Trend
                  </h3>
                  <p className="text-[#333333]/80">
                    Post to Instagram, Twitter, or TikTok and watch your people connect over the bars that move you.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-[#6F4597] text-white border-2 border-[#333333] shadow-[0_4px_0_0_rgba(51,51,51,1)] hover:shadow-none hover:translate-y-1 transition-all group">
              <span>Get Started</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Phone UI */}
          <div className="relative">
            <div className="relative w-full max-w-[529px] aspect-[529/620] mx-auto">
              <Image
                src="/bars.png"
                alt="Bars UI Preview"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 529px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}