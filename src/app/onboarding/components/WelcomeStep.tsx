"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface WelcomeStepProps {
  onDataSubmit: (data: { email: string }) => void;
}

export function WelcomeStep({ onDataSubmit }: WelcomeStepProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onDataSubmit({ email });
  };

  return (
    <Card className="p-6 border-gray-200 shadow-sm">
      <form id="step-0-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border-gray-300 focus:border-[#6F459F] focus:ring-[#6F459F]"
          />
          <p className="text-sm text-gray-600">
            We&apos;ll send you updates about your position on the waitlist and notify you when we launch.
          </p>
        </div>
      </form>
    </Card>
  );
} 