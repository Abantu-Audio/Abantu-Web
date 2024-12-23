'use client';

import Image from "next/image";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function UniversityPressSection() {
  return (
    <section className="relative w-full min-h-[913px] bg-white">
      <div className="container mx-auto px-10 py-32 flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <h2 className="text-5xl font-bold text-[#333333] mb-8">
            Bridging Knowledge & Culture
          </h2>
          
          <p className="text-[#333333]/80 text-xl mb-16 max-w-[666px]">
            Aligning with academia is about more than partnerships—it's about trust. In a time when fake news dominates and reliable information feels scarce, we amplify stories rooted in knowledge and truth.
          </p>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-3 h-3 rounded-full bg-[#6F4597] mt-3" />
              <div>
                <h3 className="text-[#6F4597] text-2xl font-semibold mb-2">
                  Credibility Meets Culture
                </h3>
                <p className="text-[#333333]/80 text-lg max-w-[531px]">
                  University presses bring depth and truth to a world hungry for real stories.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-3 h-3 rounded-full bg-[#6F4597] mt-3" />
              <div>
                <h3 className="text-[#6F4597] text-2xl font-semibold mb-2">
                  Edutainment
                </h3>
                <p className="text-[#333333]/80 text-lg max-w-[531px]">
                  We blend educational content with entertainment, proving that learning can be exciting.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-3 h-3 rounded-full bg-[#6F4597] mt-3" />
              <div>
                <h3 className="text-[#6F4597] text-2xl font-semibold mb-2">
                  Empowering Students
                </h3>
                <p className="text-[#333333]/80 text-lg max-w-[531px]">
                  Our Northwestern partnership gives students hands-on experience in audiobook narration and production, all while earning pay and class credit.
                </p>
              </div>
            </div>
          </div>

          <PrimaryButton withArrow className="mt-16">
            Learn More
          </PrimaryButton>
        </div>

        <div className="flex-1 relative">
            <Image
              src="/studio.png"
              alt="University Press"
              fill
              className="object-cover rounded-xl"
            />

          <div className="absolute bottom-0 right-[240px] bg-white border-2 border-b-4 border-[#403554] rounded-lg p-6 w-[390px] shadow-lg">
            <h3 className="text-2xl font-bold text-[#333333] mb-4">
              Why University Presses?
            </h3>
            <p className="text-[#333333]/80">
              They're the hidden gems of publishing—producing trusted, groundbreaking content that deserves a bigger spotlight. We're here to make that happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 