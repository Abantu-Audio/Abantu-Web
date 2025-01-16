"use client"

import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

interface Book {
  title: string;
  author: string;
  rating: number;
  coverUrl: string;
}

interface BookCardProps extends Book {
  priority?: boolean;
}

function BookCard({ title, author, coverUrl, priority = false }: BookCardProps) {
  return (
    <div className="w-[200px] group cursor-pointer">
      <div className="relative transition-transform duration-300 group-hover:scale-105">
        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
          <Image
            src={coverUrl}
            alt={`${title} by ${author} book cover`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 200px, 200px"
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
          />
        </div>
      </div>
      <div className="mt-2 text-sm">
        <h3 className="font-medium truncate">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 truncate">{author}</p>
      </div>
    </div>
  );
}

const books: Book[] = [
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
] as const;

export function StoriesSection() {
  return (
    <section className="w-full py-12 md:py-16" aria-label="Featured Stories">
      <Splide
        hasTrack={false}
        extensions={{ AutoScroll }}
        options={{
          type: 'loop',
          gap: '1.5rem',
          drag: 'free',
          arrows: false,
          pagination: false,
          perPage: 4,
          autoScroll: {
            speed: 0.4,
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
          },
          perMove: 1,
          fixedWidth: '200px',
          breakpoints: {
            1024: {
              perPage: 3,
            },
            768: {
              perPage: 2,
              fixedWidth: '200px',
              gap: '1rem',
            },
            480: {
              perPage: 1,
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
                <BookCard {...book} priority={index < 2} />
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>
      </Splide>
    </section>
  );
} 