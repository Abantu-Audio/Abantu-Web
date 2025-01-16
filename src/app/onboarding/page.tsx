"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { WelcomeStep } from "./components/WelcomeStep";
import { PersonalInfoStep } from "./components/PersonalInfoStep";
import { InterestsStep } from "./components/InterestsStep";
import { CompletionStep } from "./components/CompletionStep";
// import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface OnboardingData {
  email?: string;
  firstName?: string;
  lastName?: string;
  age?: string;
  location?: string;
  ethnicity?: string;
  genres?: string[];
}

interface StepComponentProps {
  onDataSubmit: (data: Partial<OnboardingData>) => void;
}

const steps = [
  {
    title: "Welcome to Abantu",
    description: "Join our community of storytellers and listeners",
    component: WelcomeStep as React.ComponentType<StepComponentProps>,
  },
  {
    title: "Tell us about yourself",
    description: "Help us personalize your experience",
    component: PersonalInfoStep as React.ComponentType<StepComponentProps>,
  },
  {
    title: "Your interests",
    description: "Select the genres and topics that interest you",
    component: InterestsStep as React.ComponentType<StepComponentProps>,
  },
  {
    title: "Almost there",
    description: "Final step to complete your registration",
    component: CompletionStep as React.ComponentType<StepComponentProps>,
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<OnboardingData>({});
  const [showExitDialog, setShowExitDialog] = useState(false);
  // const { toast } = useToast();
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleStepSubmit = async (stepData: Partial<OnboardingData>) => {
    const newFormData = { ...formData, ...stepData };
    setFormData(newFormData);

    if (currentStep === steps.length - 1) {
      router.push('/');


      // try {
      //   const response = await fetch('/api/waitlist', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(newFormData),
      //   });

      //   if (!response.ok) {
      //     throw new Error('Failed to submit waitlist form');
      //   }

      //   toast({
      //     title: "Success!",
      //     description: "You've been added to our waitlist. Check your email for next steps!",
      //   });
      // } catch (error) {
      //   toast({
      //     title: "Error",
      //     description: "Failed to join the waitlist. Please try again.",
      //     variant: "destructive",
      //   });
      //   return;
      // }
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 0) {
      setShowExitDialog(true);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <AlertDialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 hover:bg-accent"
          onClick={() => setShowExitDialog(true)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Exit onboarding</span>
        </Button>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to exit?</AlertDialogTitle>
            <AlertDialogDescription>
              Your progress will be lost if you leave the onboarding process.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => router.push('/')}>
              Yes, exit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex-1 container max-w-3xl mx-auto px-4 py-8">
        {/* Progress bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="mt-2 text-sm text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>

        {/* Step content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{steps[currentStep].title}</h1>
            <p className="text-muted-foreground mt-2">
              {steps[currentStep].description}
            </p>
          </div>

          <div className="min-h-[400px]">
            <CurrentStepComponent onDataSubmit={handleStepSubmit} />
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handleBack}
            >
              Back
            </Button>
            <Button form={`step-${currentStep}-form`} type="submit">
              {currentStep === steps.length - 1 ? "Complete" : "Continue"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 