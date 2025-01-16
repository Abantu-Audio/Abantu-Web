"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { PrimaryButton } from "./PrimaryButton";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 left-0 w-[calc(100%-4rem)] bg-[#403554] z-40 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex flex-col h-full p-6">
        <div className="flex flex-col space-y-8 mt-16">
          <Link
            href="/"
            onClick={onClose}
            className="text-white text-lg hover:text-white/80 transition-colors"
          >
            Home
          </Link>
          {/* <Link
            href="/publishers"
            onClick={onClose}
            className="text-white text-lg hover:text-white/80 transition-colors"
          >
            For Publishers
          </Link>
          <Link
            href="/narrators"
            onClick={onClose}
            className="text-white text-lg hover:text-white/80 transition-colors"
          >
            For Narrators
          </Link> */}
          {/* <Link
            href="/store"
            onClick={onClose}
            className="text-white text-lg hover:text-white/80 transition-colors"
          >
            Merch Store
          </Link> */}
          <Link href="/onboarding">
            <PrimaryButton>
              Join Waitlist
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
} 