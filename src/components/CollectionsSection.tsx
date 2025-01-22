'use client';

import Image from 'next/image';

export function CollectionsSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-0 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 items-center">
          {/* Left black box with text */}
          <div className="w-full lg:w-[375px]">
            <div className="bg-black rounded-[20px] sm:rounded-[30px] p-6 sm:p-8 h-full flex flex-col justify-center">
              {/* Title section at the top */}
              <div>
                <h2 className="text-4xl sm:text-4xl font-bold text-white mb-12 mt-4 sm:mt-8 sm:w-[50%]">
                  Discover Curated Collections
                </h2>
              </div>

              {/* Body content at the bottom */}
              <div className="space-y-8 sm:space-y-12">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    What Are Collections?
                  </h3>
                  <p className="text-white text-sm font-light leading-relaxed">
                    Our curated collections are carefully crafted playlists of audiobooks 
                    and dramas, organized around themes like cultural pride, family learning, 
                    and personal growth.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    Why They Matter
                  </h3>
                  <p className="text-white text-sm font-light leading-relaxed">
                    We do the hard work for you, making it easy to discover meaningful 
                    stories that inspire, educate, and resonate with your world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side with collection mockups */}
          <div className="flex flex-1 justify-evenly items-center">
            <div className="h-[400px] sm:h-[500px] lg:h-[600px]">
              <Image
                src="/collection-common-wind.png"
                alt="Collection preview"
                width={275}
                height={0}
                className="object-contain"
                priority
              />
            </div>
            <div className="h-[400px] sm:h-[500px] lg:h-[600px]">
              <Image
                src="/collection-afrofuture.png"
                alt="Collection preview"
                width={275}
                height={0}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 