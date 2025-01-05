"use client"

import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

interface BookCardProps {
  title: string;
  author: string;
  rating: number;
  coverUrl: string;
}

function BookCard({ title, coverUrl }: BookCardProps) {
  return (
    <div className="w-[200px]">
      <div className="relative">
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
    <section className=" w-full py-12 md:py-12">
        <Splide
          hasTrack={false}
          extensions={{ AutoScroll }}
          options={{
            type: 'loop',
            gap: '0.75rem',
            drag: 'free',
            arrows: false,
            pagination: false,
            perPage: 4,
            autoScroll: {
              speed: 0.4,
              pauseOnHover: false,
              pauseOnFocus: true,
              rewind: false,
            },
            perMove: 1,
            fixedWidth: '200px',
            breakpoints: {
              768: {
                fixedWidth: '200px',
                gap: '0.75rem',
              },
              480: {
                fixedWidth: '200px',
                gap: '0.75rem',
              },
            },
          }}
          aria-label="Books Carousel"
        >
          <div className="custom-wrapper">
            <SplideTrack>
              {books.map((book, index) => (
                <SplideSlide key={`${book.title}-${index}`}>
                  <BookCard {...book} />
                </SplideSlide>
              ))}
            </SplideTrack>
          </div>
        </Splide>
    </section>
  );
} 