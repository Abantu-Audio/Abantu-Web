"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { WelcomeStep } from "./components/WelcomeStep";
import { PersonalInfoStep } from "./components/PersonalInfoStep";
import { InterestsStep } from "./components/InterestsStep";
import { CompletionStep } from "./components/CompletionStep";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { generateClient } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import { createProspect } from '@/graphql/mutations';
import { amplifyConfig } from '@/config/amplify';
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
import { PrimaryButton } from "@/components/ui/PrimaryButton";

interface OnboardingData {
  email?: string;
  firstName?: string;
  lastName?: string;
  age?: string;
  location?: string;
  ethnicity?: string;
  genres?: string[];
}

interface CreateProspectResponse {
  data?: {
    createProspect: {
      id: string;
      email: string;
      status: string;
    };
  };
  errors?: Array<{ message: string }>;
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
    title: "",
    description: "",
    component: CompletionStep as React.ComponentType<StepComponentProps>,
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<OnboardingData>({});
  const [showExitDialog, setShowExitDialog] = useState(false);
  const { toast } = useToast();
  const [isConfigured, setIsConfigured] = useState(false);
  const client = generateClient();

  // Configure Amplify on the client side
  useEffect(() => {
    try {
      console.log('Configuring Amplify with:', {
        endpoint: amplifyConfig.API.GraphQL.endpoint,
        region: amplifyConfig.API.GraphQL.region,
        hasApiKey: !!amplifyConfig.API.GraphQL.apiKey,
      });
      
      Amplify.configure(amplifyConfig, { ssr: true });
      setIsConfigured(true);
      console.log('Amplify configured successfully');
    } catch (error) {
      console.error('Amplify configuration error:', error);
      toast({
        title: "Configuration Error",
        description: "There was an error setting up the application. Please try again later.",
        variant: "destructive",
      });
    }
  }, [toast]);

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleStepSubmit = async (stepData: Partial<OnboardingData>) => {
    const newFormData = { ...formData, ...stepData };
    setFormData(newFormData);

    // Trigger prospect creation at step 3 (InterestsStep)
    if (currentStep === 2) {
      if (!isConfigured) {
        console.error('Amplify not configured');
        toast({
          title: "Error",
          description: "The application is not properly configured. Please try again later.",
          variant: "destructive",
        });
        return;
      }

      if (!newFormData.email) {
        toast({
          title: "Error",
          description: "Email is required to join the waitlist.",
          variant: "destructive",
        });
        return;
      }

      try {
        console.log('Submitting prospect data:', {
          email: newFormData.email,
          firstName: newFormData.firstName || null,
          lastName: newFormData.lastName || null,
          hasAge: !!newFormData.age,
          hasLocation: !!newFormData.location,
          hasEthnicity: !!newFormData.ethnicity,
          genresCount: newFormData.genres?.length || 0,
        });

        const result = await client.graphql({
          query: createProspect,
          variables: {
            input: {
              email: newFormData.email,
              firstName: newFormData.firstName || null,
              lastName: newFormData.lastName || null,
              age: newFormData.age || null,
              location: newFormData.location || null,
              ethnicity: newFormData.ethnicity || null,
              genres: newFormData.genres || [],
              status: 'PENDING'
            }
          }
        }) as CreateProspectResponse;

        console.log('GraphQL response:', result);

        if (result.errors && result.errors.length > 0) {
          throw new Error(result.errors[0].message);
        }

        if (!result.data?.createProspect) {
          throw new Error('Failed to create prospect');
        }

        toast({
          title: "Success!",
          description: "You've been added to our waitlist. Check your email for next steps!",
        });
        
        // Only proceed to next step after successful submission
        setCurrentStep(currentStep + 1);
      } catch (error) {
        console.error('Waitlist submission error:', {
          error,
          isError: error instanceof Error,
          message: error instanceof Error ? error.message : String(error),
          stack: error instanceof Error ? error.stack : undefined,
        });
        
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "Failed to join the waitlist. Please try again.",
          variant: "destructive",
        });
        return;
      }
    } else if (currentStep === steps.length - 1) {
      // Final step (CompletionStep) just redirects home
      router.push('/');
    } else {
      // For all other steps, just proceed to next step
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
    <div className="min-h-screen bg-white flex flex-col relative">
      <div className="absolute top-4 left-1/2 -translate-x-1/2">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Abantu Audio"
            width={120}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>
      </div>

      <AlertDialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 hover:bg-gray-100 z-10"
          onClick={() => setShowExitDialog(true)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Exit onboarding</span>
        </Button>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-gray-900">Are you sure you want to exit?</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600">
              Your progress will be lost if you leave the onboarding process.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-900">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => router.push('/')}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Yes, exit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex-1 container max-w-3xl mx-auto px-4 pt-24 pb-8">
        {/* Progress bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2 bg-gray-100 [&>div]:bg-[#6F459F]" />
          <div className="mt-2 text-sm text-gray-600">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>

        {/* Step content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{steps[currentStep].title}</h1>
            <p className="text-gray-600 mt-2">
              {steps[currentStep].description}
            </p>
          </div>

          <div className="min-h-[400px] [&_input]:text-base [&_input]:border-gray-300 [&_input]:focus:border-[#6F459F] [&_input]:focus:ring-[#6F459F]">
            {currentStep === steps.length - 1 ? (
              <CompletionStep />
            ) : (
              <CurrentStepComponent onDataSubmit={handleStepSubmit} />
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between pt-6">
            {currentStep !== steps.length - 1 && (
              <Button
                variant="outline"
                onClick={handleBack}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Back
              </Button>
            )}
            {currentStep === steps.length - 1 ? (
              <div className="ml-auto">
                <PrimaryButton
                  buttonStyle="secondary"
                  onClick={() => router.push('/')}
                  withArrow
                >
                  Return Home
                </PrimaryButton>
              </div>
            ) : (
              <PrimaryButton 
                form={`step-${currentStep}-form`} 
                type="submit"
                withArrow
              >
                {currentStep === 2 ? "Complete Registration" : "Continue"}
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 