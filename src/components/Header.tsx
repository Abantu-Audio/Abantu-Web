"use client";

import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { MobileNav } from "@/components/ui/MobileNav";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="h-[100px] bg-[#FFF9F2] px-4 md:px-5 lg:px-7 relative">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="w-full md:w-auto flex md:justify-start">
          <Image
            src="/logo.png"
            alt="Abantu Logo"
            width={160}
            height={47}
            className="w-[120px] md:w-[160px] h-auto"
            priority
          />
        </div> 
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span 
              className={`block h-0.5 w-full bg-[#403554] transform transition-all duration-300 origin-center ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span 
              className={`block h-0.5 w-full bg-[#403554] transition-all duration-200 ${
                isMobileMenuOpen ? 'opacity-0 translate-x-2' : ''
              }`}
            />
            <span 
              className={`block h-0.5 w-full bg-[#403554] transform transition-all duration-300 origin-center ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>

        {/* Desktop Navigation Container */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-8">
          {/* Navigation Links */}
          <div className="flex flex-1 justify-center items-center gap-8 lg:gap-16 text-[#403554]">
            <Link href="/">Home</Link>
            <Link href="/publishers">For Publishers</Link>
            <Link href="/narrators">For Narrators</Link>
            <Link href="/store">Merch Store</Link>
          </div>

          {/* CTA Button - Hidden on mobile, visible from md breakpoint */}
          <Link href="/onboarding">
            <PrimaryButton>
              Join Waitlist
            </PrimaryButton>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <MobileNav 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
      </div>
    </nav>
  );
}
