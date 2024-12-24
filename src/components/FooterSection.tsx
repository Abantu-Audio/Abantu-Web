import Image from "next/image";
import Link from "next/link";

interface TestimonialProps {
  quote: string;
  author: string;
  rating: number;
  authorImage: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "I love the clean and simple design. The site has great features too, like the online audio player and personal bookshelf.",
    author: "Dr. Patrick Johnson",
    rating: 4.8,
    authorImage: ""
  },
  {
    quote: "As an English teacher it's an excellent resource for my students. With thousands of audiobooks from numerous sources.",
    author: "Floyd Miles",
    rating: 4.6,
    authorImage: ""
  },
  {
    quote: "The platform has transformed how I consume literature. The audio quality and narrator selection are exceptional.",
    author: "Guy Hawkins",
    rating: 4.6,
    authorImage: ""
  }
];

function TestimonialCard({ quote, author, rating, authorImage }: TestimonialProps) {
  return (
    <div className="bg-white rounded-lg p-6 border-2 border-[#403455] shadow-[0_4px_0_0_rgba(51,51,51,1)]">
      <div className="flex justify-between items-start mb-6">
        <Image
          src="/quote.png"
          alt="quote"
          width={24}
          height={24}
          className="text-gray-800/80"
        />
        <div className="flex items-center gap-1">
          <Image 
            src="/star.png" 
            alt="star" 
            width={24} 
            height={24} 
            className="text-[#FFBC57]"
          />
          <span className="text-gray-800">{rating}</span>
        </div>
      </div>
      
      <p className="text-gray-800/80 mb-8 min-h-[128px]">{quote}</p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          {authorImage ? (
            <Image 
              src={authorImage} 
              alt={author} 
              width={48} 
              height={48}
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
        <span className="text-gray-800">{author}</span>
      </div>
    </div>
  );
}

export function FooterSection() {
  return (
    <>
      <section className="bg-[#FFF9F2] w-full pt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800">
              What The Tribe is Saying...
            </h2>
            <div className="flex gap-4">
              <button className="w-12 h-[46px] rounded-lg border-2 border-gray-800 flex items-center justify-center bg-white shadow-[0_4px_0_0_rgba(51,51,51,1)]">
                <Image 
                  src="/icons/arrow-left.svg" 
                  alt="Previous" 
                  width={24} 
                  height={24} 
                />
              </button>
              <button className="w-12 h-[46px] rounded-lg border-2 border-gray-800 flex items-center justify-center bg-[#6F4597] shadow-[0_4px_0_0_rgba(51,51,51,1)]">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#FFF9F2] w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Logo and Copyright */}
            <div className="space-y-4">
              <Image 
                src="/logo.png" 
                alt="Abantu Audio Logo" 
                width={126} 
                height={32} 
                className="mb-4"
              />
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
                <Link href="/narrators" className="text-gray-800/80 hover:text-gray-800 text-sm md:text-base">
                  For Narrators
                </Link>
                <Link href="/publishers" className="text-gray-800/80 hover:text-gray-800 text-sm md:text-base">
                  For Publishers
                </Link>
                <Link href="/merch" className="text-gray-800/80 hover:text-gray-800 text-sm md:text-base">
                  Merch
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">CONTACT</h3>
              <div className="flex flex-col space-y-4">
                <p className="text-gray-800/80 text-sm md:text-base">+1 (000) 000-0000</p>
                <p className="text-gray-800/80 text-sm md:text-base">holla@abantuaudio.com</p>
              </div>
              
              {/* Social Media */}
              <div className="pt-6">
                <h3 className="font-semibold text-gray-800 mb-4 text-sm md:text-base">Follow us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-[#44A1D5]">
                    <Image 
                      src="/facebook.svg" 
                      alt="Facebook" 
                      width={20} 
                      height={20}
                    />
                  </Link>
                  <Link href="#" className="text-[#2982D5]">
                    <Image 
                      src="/linkedin.svg" 
                      alt="LinkedIn" 
                      width={20} 
                      height={20}
                    />
                  </Link>
                  <Link href="#" className="text-[#2982D5]">
                    <Image 
                      src="/instagram.svg" 
                      alt="Twitter" 
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
