import Image from "next/image";

export function BlackSection() {
  return (
    <section className="relative w-full bg-[#0F0F0F] h-[808px] overflow-hidden">
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

      <div className="container mx-auto px-4">
      </div>
    </section>
  );
} 