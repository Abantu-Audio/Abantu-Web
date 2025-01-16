"use client"

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  rating: number;
  authorImage: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "The uniqueness and availability of books that I may not heard of - you are doing the research for me. That is a bonus.",
    author: "Stephanie Walton",
    rating: 4.8,
    authorImage: ""
  },
  {
    quote: "I love the fact that it is innovative and enticing to young adults who are currently working on achieving higher levels of education both through or outside of an institution, and seeking cultural enrichment.",
    author: "Michelle A.",
    rating: 4.6,
    authorImage: ""
  },
  {
    quote: "Tells stories omitted at school, sheds light on the history of minorities, awesome quality.",
    author: "Annonymous",
    rating: 4.6,
    authorImage: ""
  },
  {
    quote: "This is amazing. I've been looking and yearning for something like this. Thank you",
    author: "IG: ILOVEYOUTHOUGH",
    rating: 4.9,
    authorImage: ""
  },
  {
    quote: "It brings knowledge to our history that is forgotten or not even taught.",
    author: "Anonymous",
    rating: 4.7,
    authorImage: ""
  },
  {
    quote: "The merge of innovation & education is exceptional",
    author: "Inga Macingwane",
    rating: 4.8,
    authorImage: ""
  }
];

function useCarousel(items: TestimonialProps[], autoPlayInterval = 5000) {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerGroup = isMobile ? 1 : 3;
  const totalGroups = Math.ceil(items.length / itemsPerGroup);

  const next = useCallback(() => {
    setCurrentGroup((current) => (current + 1) % totalGroups);
  }, [totalGroups]);

  const previous = useCallback(() => {
    setCurrentGroup((current) => (current - 1 + totalGroups) % totalGroups);
  }, [totalGroups]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(next, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next, autoPlayInterval]);

  return {
    currentGroup,
    setCurrentGroup,
    next,
    previous,
    setIsAutoPlaying,
    totalGroups,
    itemsPerGroup,
    isMobile
  };
}

function TestimonialCard({ quote, author, authorImage }: TestimonialProps) {
  return (
    <div className="bg-white rounded-lg p-4 border-2 border-[#403455] shadow-[0_4px_0_0_rgba(51,51,51,1)]">
      <div className="flex justify-between items-start mb-4">
        <Image
          src="/quote.png"
          alt="quote"
          width={20}
          height={20}
          className="text-gray-800/80"
        />
        <div className="flex items-center gap-1">
          {/* <Image 
            src="/star.png" 
            alt="star" 
            width={20} 
            height={20} 
            className="text-[#FFBC57]"
          /> */}
          {/* <span className="text-sm text-gray-800">{rating}</span> */}
        </div>
      </div>
      
      <p className="text-gray-800/80 text-sm mb-6 min-h-[96px]">{quote}</p>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          {authorImage ? (
            <Image 
              src={authorImage} 
              alt={author} 
              width={40} 
              height={40}
              className="object-cover"
            />
          ) : (
            <div 
              className={`w-full h-full ${
                Math.random() < 0.33
                  ? "bg-gray-600"
                  : Math.random() < 0.66
                  ? "bg-gray-500"
                  : "bg-gray-400"
              }`}
              aria-label={`${author}'s avatar placeholder`}
            />
          )}
        </div>
        <span className="text-sm text-gray-800">{author}</span>
      </div>
    </div>
  );
}

export function FooterSection() {
  const { 
    currentGroup, 
    next, 
    previous, 
    setIsAutoPlaying, 
    totalGroups, 
    setCurrentGroup,
    itemsPerGroup,
  } = useCarousel(testimonials);

  return (
    <>
      <section className="bg-[#FFF9F2] w-full pt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800">
              What The Tribe is Saying...
            </h2>
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  previous();
                  setIsAutoPlaying(false);
                }}
                className="w-12 h-[46px] rounded-lg border-2 border-gray-800 flex items-center justify-center bg-white shadow-[0_4px_0_0_rgba(51,51,51,1)] hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <Image 
                  src="/icons/arrow-left.svg" 
                  alt="Previous" 
                  width={24} 
                  height={24} 
                />
              </button>
              <button 
                onClick={() => {
                  next();
                  setIsAutoPlaying(false);
                }}
                className="w-12 h-[46px] rounded-lg border-2 border-gray-800 flex items-center justify-center bg-[#6F4597] shadow-[0_4px_0_0_rgba(51,51,51,1)] hover:bg-[#5d3b7e] transition-colors"
                aria-label="Next testimonial"
              >
                <Image 
                  src="/icons/arrow-right.svg" 
                  alt="Next" 
                  width={24} 
                  height={24}
                  className="rotate-180"
                />
              </button>
            </div>
          </div>
          
          <div className="relative overflow-hidden mb-16">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentGroup * 100}%)`,
              }}
            >
              {Array.from({ length: totalGroups }).map((_, groupIndex) => (
                <div 
                  key={groupIndex}
                  className="flex gap-4 lg:gap-8 min-w-full"
                >
                  {testimonials
                    .slice(
                      groupIndex * itemsPerGroup,
                      groupIndex * itemsPerGroup + itemsPerGroup
                    )
                    .map((testimonial, index) => (
                      <div 
                        key={index}
                        className="md:flex-1 w-full"
                      >
                        <TestimonialCard {...testimonial} />
                      </div>
                    ))}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalGroups }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentGroup(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentGroup === index ? 'bg-[#6F4597]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#FFF9F2] w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Logo and Copyright */}
            <div className="space-y-4">
              <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Abantu Audio Logo" 
                width={126} 
                height={32} 
                className="mb-4"
              />
              </Link>
              <p className="text-gray-800/80 text-sm md:text-base">
                ©2016-2024 Abantu Audio. All rights reserved
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">NAVIGATION</h3>
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-800/80 hover:text-gray-800 text-sm md:text-base">
                  Home
                </Link>
                {/* <Link href="/narrators" className="text-gray-800/80 hover:text-gray-800 text-sm md:text-base">
                  For Narrators
                </Link>
                <Link href="/publishers" className="text-gray-800/80 hover:text-gray-800 text-sm md:text-base">
                  For Publishers
                </Link> */}
                {/* <Link href="/merch" className="text-gray-800/80 hover:text-gray-800 text-sm md:text-base">
                  Merch
                </Link> */}
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">CONTACT</h3>
              <div className="flex flex-col space-y-4">
                {/* <p className="text-gray-800/80 text-sm md:text-base">+1 (000) 000-0000</p> */}
                <p className="text-gray-800/80 text-sm md:text-base">holla@abantuaudio.com</p>
              </div>
              
              {/* Social Media */}
              <div className="pt-6">
                <h3 className="font-semibold text-gray-800 mb-4 text-sm md:text-base">Follow us</h3>
                <div className="flex space-x-4">
                  <Link href="https://www.facebook.com/abantuaudio/" className="text-[#44A1D5]">
                    <Image 
                      src="/facebook.svg" 
                      alt="Facebook" 
                      width={20} 
                      height={20}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/company/abantuaudio/" className="text-[#2982D5]">
                    <Image 
                      src="/linkedin.svg" 
                      alt="LinkedIn" 
                      width={20} 
                      height={20}
                    />
                  </Link>
                  <Link href="https://www.instagram.com/abantuaudio/" className="text-[#2982D5]">
                    <Image 
                      src="/instagram.svg" 
                      alt="Instagram" 
                      width={22} 
                      height={22}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
