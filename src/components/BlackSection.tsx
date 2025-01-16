import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export function BlackSection() {
  return (
    <section className="relative w-full bg-[#0F0F0F] h-[600px] flex items-center overflow-hidden">
      <div className="absolute top-0 left-0 right-0 w-full">
        <Image
          src="/brush-stroke-top.svg"
          alt=""
          width={1440}
          height={117}
          className="w-full min-w-[1440px] object-cover"
          role="presentation"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full">
        <Image
          src="/brush-stroke.svg"
          alt=""
          width={1440}
          height={117}
          className="w-full min-w-[1440px] object-cover"
          priority
        />
      </div>

      <div className={`container mx-auto px-4 ${plusJakartaSans.className}`}>
        <div className="space-y-5 md:space-y-7 text-center lg:text-left">
          <h1 className="text-white text-5xl sm:text-6xl md:text-4xl lg:text-5xl font-black leading-tight">
            Why Abantu?
          </h1>
          
          <p className="text-white text-xs sm:text-base md:text-md max-w-lg mx-auto lg:mx-0 font-thin">
          On larger platforms, finding stories that reflect your culture, values, and experiences can feel impossible. At Abantu, we make it easy.</p>

          <p className="text-white text-xs sm:text-base md:text-md max-w-lg mx-auto lg:mx-0 font-thin">
          Our mission is to amplify underrepresented voices by curating audiobooks and dramas that educate, inspire, and connect. From banned books to untold histories, we ensure the stories you hear reflect the diversity of your journey and the truth of your identity.
          </p>
          <p className="text-white text-xs sm:text-base md:text-md max-w-lg mx-auto lg:mx-0 font-thin">
          With a focus on curation and community, we connect creators with listeners in ways no other platform can. Abantu isn’t just about listening—it’s about being seen, heard, and celebrated.
          </p>
        </div>

        <div className="relative mt-7 lg:mt-0 flex justify-center lg:justify-start">
        </div>
      </div>
    </section>
  );
} 