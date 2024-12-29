import Image from "next/image";

interface BookCardProps {
  title: string;
  author: string;
  rating: number;
  coverUrl: string;
}

function BookCard({ title, author, coverUrl }: BookCardProps) {
  return (
    <div className="max-w-[200px] mx-auto w-full">
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
      </div>

      {/* Book Info - smaller text on mobile */}
      <div className="mt-2 md:mt-3 space-y-1 md:space-y-1.5">
        <h3 className="text-lg md:text-xl font-semibold text-[#333333]">{title}</h3>
        <p className="text-[#333333]/80 text-xs md:text-sm">{author}</p>
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
    },
  ];

  return (
    <section className="bg-white w-full py-12 md:py-12 flex items-start">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

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