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
    <Card className="p-6">
      <form id="step-0-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="text-sm text-muted-foreground">
            We&apos;ll send you updates about your position on the waitlist and notify you when we launch.
          </p>
        </div>
      </form>
    </Card>
  );
} 