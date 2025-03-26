import { WaitlistForm } from '@/components/WaitlistForm';

export default function WaitlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Join Our Waitlist</h1>
        <p className="text-gray-600 mb-8">
          Be among the first to experience Abantu Audio. Sign up for our waitlist and we&apos;ll notify you when we launch.
        </p>
        <WaitlistForm />
      </div>
    </div>
  );
} 