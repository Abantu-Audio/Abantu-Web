import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function Header() {
  return (
    <nav className="h-[143px] bg-[#FFF9F2] px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Abantu Logo"
            width={194}
            height={57}
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-16 text-[#403554]">
          <Link href="/">Home</Link>
          <Link href="/publishers">For Publishers</Link>
          <Link href="/narrators">For Narrators</Link>
          <Link href="/store">Merch Store</Link>
        </div>

        {/* CTA Button */}
        <PrimaryButton>
          Join Waitlist
        </PrimaryButton>
      </div>
    </nav>
  );
}
