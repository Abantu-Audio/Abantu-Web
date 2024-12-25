import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  rating: number;
  coverUrl: string;
}

function BookCard({ title, author, rating, coverUrl }: BookCardProps) {
  return (
    <div className="max-w-[250px] mx-auto w-full">
      <div className="relative">
        {/* Book Cover - smaller on mobile */}
        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
          <Image
            src={coverUrl}
            alt={`${title} cover`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 250px, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        
        {/* Play Button - smaller on mobile */}
        <div className="absolute top-1/3 left-1/3">
          <div className="w-[56px] h-[52px] md:w-[76px] md:h-[72px] bg-[#6F459F] rounded-full border-2 border-[#333333] shadow-[0_4px_0_0_rgba(51,51,51,1)] flex items-center justify-center">
            <div className="w-0 h-0 border-t-[10px] md:border-t-[13px] border-t-transparent border-l-[18px] md:border-l-[22px] border-l-white border-b-[10px] md:border-b-[13px] border-b-transparent ml-2" />
          </div>
        </div>
      </div>

      {/* Book Info - smaller text on mobile */}
      <div className="mt-2 md:mt-3 space-y-1 md:space-y-1.5">
        <h3 className="text-lg md:text-xl font-semibold text-[#333333]">{title}</h3>
        <p className="text-[#333333]/80 text-xs md:text-sm">{author}</p>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 md:w-5 md:h-5 fill-[#FFBC57] text-[#FFBC57]" />
          <span className="text-[#333333] text-xs md:text-sm">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

export function StoriesSection() {
  const books = [
    {
      title: "Honeypot",
      author: "E. Patrick Johnson",
      rating: 4.8,
      coverUrl: "/honeypot.png"
    },
    {
      title: "Shango",
      author: "Rachel Hartman",
      rating: 4.6,
      coverUrl: "/shango.png"
    },
    {
      title: "Bloodlines of Sahael",
      author: "Dwayne A. Madry",
      rating: 4.6,
      coverUrl: "/bloodlines.png"
    },
    {
      title: "A brief Account of the destruction of the Indies",
      author: "Bartoome De Las Casas",
      rating: 4.5,
      coverUrl: "/indies.png"
    }
  ];

  return (
    <section className="bg-white w-full py-12 md:py-20 flex items-center">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0 mb-8 md:mb-10">
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] drop-shadow-[0_45px_45px_rgba(255,255,255,0.3)]">
              Stories That Move You
            </h2>
            <p className="text-sm md:text-base text-[#333333]/80 max-w-lg">
              Whether you&apos;re about leveling up, reconnecting with your roots, or just vibing, we&apos;ve got audiobooks that match your energy.
            </p>
          </div>

          <Button 
            size="default"
            className="hidden md:block bg-[#6F459F] hover:bg-[#6F459F]/90 text-white border-2 border-[#333333] shadow-[0_4px_0_0_rgba(51,51,51,1)]"
          >
            Join Waitlist
          </Button>
        </div>

        {/* Book Grid - smaller gap on mobile, 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
          {books.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
} 