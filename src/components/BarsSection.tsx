import Image from 'next/image';

export function BarsSection() {
  return (
    <section className="relative w-full flex items-center px-4 py-10 md:py-20 md:px-5 lg:px-7 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="space-y-3 md:space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-[#333333] drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
            Share a Bar
          </h2>
          <p className="text-md md:text-md text-[#333333]/80 max-w-lg">
            With our &apos;Bars&apos; feature, you can clip the best lines from your favorite
            audiobooks and share them with your people. Show your friends what&apos;s speaking to
            your soul.
          </p>

          <div className="space-y-6 md:space-y-7">
            {/* Feature 1 */}
            <div className="flex gap-4 md:gap-6">
              <div className="space-y-1.5">
                <h3 className="text-lg md:text-xl font-semibold text-[#6F4597]">Catch the Vibes</h3>
                <p className="text-md text-[#333333]/80">
                  Clip 15-30 seconds of the dopest moments and share them straight from the app.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 md:gap-6">
              <div className="space-y-1.5">
                <h3 className="text-lg md:text-xl font-semibold text-[#6F4597]">
                  Start the conversation
                </h3>
                <p className="text-md text-[#333333]/80">
                  Add your own thoughts or let the story speak for itself to connect with your
                  audience on a deeper level.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 md:gap-6">
              <div className="space-y-1.5">
                <h3 className="text-lg md:text-xl font-semibold text-[#6F4597]">Set the Trend</h3>
                <p className="text-md text-[#333333]/80">
                  Post to Instagram, Twitter, or TikTok and watch your people connect over the bars
                  that move you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Phone UI */}
        <div className="relative mt-7 lg:mt-0">
          <div className="relative block w-full max-w-[370px] aspect-[529/620] lg:ml-auto">
            <Image
              src="/bars.png"
              alt="Bars UI Preview"
              fill
              className="w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 370px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
