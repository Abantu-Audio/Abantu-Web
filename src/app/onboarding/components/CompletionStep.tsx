"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface CompletionStepProps {
  onDataSubmit: () => void;
}

export function CompletionStep({ onDataSubmit }: CompletionStepProps) {
  return (
    <Card className="p-6">
      <form id="step-3-form" onSubmit={(e) => {
        e.preventDefault();
        onDataSubmit();
      }}>
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">You're all set!</h3>
            <p className="text-muted-foreground">
              Thank you for joining our waitlist. We'll keep you updated on our
              progress and let you know when we're ready to launch.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">What's next?</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• You'll receive a confirmation email shortly</li>
              <li>• We'll send you updates about your position on the waitlist</li>
              <li>• You'll be among the first to know when we launch</li>
            </ul>
          </div>
        </div>
      </form>
    </Card>
  );
} 