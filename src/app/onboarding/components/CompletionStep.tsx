"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function CompletionStep() {
  return (
    <Card className="p-6 border-gray-200 shadow-sm">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-[#6F459F]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900">Welcome to the Abantu Community!</h3>
          <p className="text-gray-600">
            Thank you for joining our waitlist. We&apos;re excited to have you on board!
          </p>
        </div>
        <div className="pt-4">
          <PrimaryButton
            onClick={() => window.open('https://discord.gg/megnXExhaT', '_blank')}
          >
            Join our Discord
          </PrimaryButton>
        </div>
      </div>
    </Card>
  );
} 