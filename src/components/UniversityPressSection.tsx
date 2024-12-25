'use client';

import { FC } from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export const UniversityPressSection: FC = () => {
  return (
    <section className="relative w-full bg-white py-10 md:py-20 sm:mb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-5 lg:px-7 flex flex-col lg:flex-row gap-7 lg:gap-10">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-[#333333] mb-5 lg:mb-7">
            Bridging Knowledge & Culture
          </h2>
          
          <p className="text-[#333333]/80 text-sm sm:text-base md:text-lg mb-10">
            Aligning with academia is about more than partnerships—it&apos;s about trust. In a time when fake news dominates and reliable information feels scarce, we amplify stories rooted in knowledge and truth.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#6F4597] mt-2" />
              <div>
                <h3 className="text-[#6F4597] text-lg md:text-xl font-semibold mb-2">
                  Credibility Meets Culture
                </h3>
                <p className="text-[#333333]/80 text-sm sm:text-base">
                  University presses bring depth and truth to a world hungry for real stories.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#6F4597] mt-2" />
              <div>
                <h3 className="text-[#6F4597] text-lg md:text-xl font-semibold mb-2">
                  Edutainment
                </h3>
                <p className="text-[#333333]/80 text-sm sm:text-base">
                  We blend educational content with entertainment, proving that learning can be exciting.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#6F4597] mt-2" />
              <div>
                <h3 className="text-[#6F4597] text-lg md:text-xl font-semibold mb-2">
                  Empowering Students
                </h3>
                <p className="text-[#333333]/80 text-sm sm:text-base">
                  Our Northwestern partnership gives students hands-on experience in audiobook narration and production, all while earning pay and class credit.
                </p>
              </div>
            </div>
          </div>

          <PrimaryButton withArrow className="mt-10 mb-20">
            Learn More
          </PrimaryButton>
        </div>

        <div className="flex-1 relative min-h-[400px] lg:min-h-[600px]">
          <Image
            src="/studio.png"
            alt="University Press"
            fill
            className="object-cover rounded-lg"
          />

          <div className="absolute bottom-4 right-4 lg:bottom-0 lg:right-0 bg-white border-2 border-b-4 border-[#403554] rounded-lg p-4 w-full max-w-[320px] lg:max-w-[351px] shadow-lg">
            <h3 className="text-lg md:text-xl font-bold text-[#333333] mb-3">
              Why University Presses?
            </h3>
            <p className="text-[#333333]/80 text-sm sm:text-base">
              They&apos;re the hidden gems of publishing—producing trusted, groundbreaking content that deserves a bigger spotlight. We&apos;re here to make that happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 