"use client"

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { PrimaryButton } from "./ui/PrimaryButton";

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
    <div className="bg-white rounded-3xl p-4 border-2 border-[#403455] shadow-[0_4px_0_0_rgba(51,51,51,1)]">
      <div className="flex justify-between items-start mb-4">
        <Image
          src="/quote.png"
          alt="quote"
          width={20}
          height={20}
          className="text-gray-800/80"
        />
        <div className="flex items-center gap-1">
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
    <div className="bg-white w-full">
      {/* Testimonials Section */}
      <section className="w-full pt-8 md:pt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-2xl lg:text-4xl font-bold text-gray-800">
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

      {/* New Footer Design */}
      <div className="bg-white px-4 md:px-12 pb-8 md:pb-12">
        <footer className="bg-black text-white py-8 md:py-16 px-4 rounded-[25px]">
          <div className="max-w-6xl mx-auto">
            {/* Join Community Section */}
            <div className="text-center mb-12 ">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Join the Community</h2>
              <p className="text-base md:text-sm lg:text-md mb-6 md:mb-8 max-w-md mx-auto">
                Bring representation and inspiration into your routine. Explore audiobooks that resonate.
              </p>
              
              {/* Email Subscription Form */}
              {/* <div className="flex flex-col gap-3 max-w-md mx-auto">
                <div className="relative flex-grow">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full h-[52px] px-4 md:px-6 rounded-full text-black"
                  />
                </div>
                <button className="bg-black text-white px-6 md:px-8 h-[52px] rounded-full border-2 border-white flex items-center justify-between">
                  <span>Start Listening</span>
                  <div className="w-7 h-7 rounded-full bg-[#6F4597] flex items-center justify-center ml-4">
                    <Image 
                      src="/icons/arrow-right.svg" 
                      alt="Subscribe" 
                      width={15} 
                      height={15}
                      className="invert"
                    />
                  </div>
                </button>
              </div> */}
              <Link href="/onboarding">
              <PrimaryButton>
                Join the waitlist
              </PrimaryButton>
              </Link>
            </div>

            {/* Footer Links and Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Logo and Copyright */}
              <div className="text-center md:text-left flex flex-col justify-between">
                <div>
                  <Link href="/" className="inline-block">
                    <Image 
                      src="/logo_white.png" 
                      alt="Abantu Audio Logo" 
                      width={113} 
                      height={47} 
                    />
                  </Link>
                  <p className="text-sm md:text-base">
                    ©2024 Abantu Audio
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center md:items-end">
                <nav className="flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center items-center">
                  <Link href="/" className="hover:text-gray-300 transition-colors whitespace-nowrap">
                    Home
                  </Link>
                  {/* <Link href="/narrators" className="hover:text-gray-300 transition-colors whitespace-nowrap">
                    For Narrators
                  </Link>
                  <Link href="/publishers" className="hover:text-gray-300 transition-colors whitespace-nowrap">
                    For Publishers
                  </Link>
                  <Link href="/merch" className="hover:text-gray-300 transition-colors whitespace-nowrap">
                    Merch
                  </Link> */}
                </nav>
              </div>

              {/* Social Links */}
              <div className="flex flex-col justify-end text-center md:text-right">
                <div>
                  <h3 className="font-semibold mb-4">Follow us</h3>
                  <div className="flex gap-6 md:gap-4 justify-center md:justify-end">
                    <Link href="https://www.facebook.com/abantuaudio/" className="hover:opacity-80 transition-opacity">
                      <Image 
                        src="/facebook.svg" 
                        alt="Facebook" 
                        width={24} 
                        height={24}
                        className="w-6 md:w-5"
                      />
                    </Link>
                    <Link href="https://www.linkedin.com/company/abantuaudio/" className="hover:opacity-80 transition-opacity">
                      <Image 
                        src="/linkedin.svg" 
                        alt="LinkedIn" 
                        width={24} 
                        height={24}
                        className="w-6 md:w-5"
                      />
                    </Link>
                    <Link href="https://www.instagram.com/abantuaudio/" className="hover:opacity-80 transition-opacity">
                      <Image 
                        src="/instagram.svg" 
                        alt="Instagram" 
                        width={26} 
                        height={26}
                        className="w-7 md:w-[22px]"
                      />
                    </Link>
                    <Link href="https://discord.gg/megnXExhaT" className="hover:opacity-80 transition-opacity">
                      <Image 
                        src="/discord_icon.svg" 
                        alt="Discord" 
                        width={31} 
                        height={24}
                        className="w-8 md:w-[27px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
