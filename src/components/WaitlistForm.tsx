"use client"

import { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from '@/components/ui/use-toast';
import { z } from 'zod';

const prospectSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phoneNumber: z.string().optional(),
});

type ProspectInput = z.infer<typeof prospectSchema>;

export function WaitlistForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const client = generateClient();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get('email') as string,
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      phoneNumber: formData.get('phoneNumber') as string,
    };

    try {
      const validatedData = prospectSchema.parse(data);
      
      await client.models.Prospect.create({
        ...validatedData,
        status: 'PENDING',
      });

      toast({
        title: 'Success!',
        description: 'Thank you for joining our waitlist. We\'ll be in touch soon!',
      });

      (event.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: 'There was an error submitting your information. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Input
          type="email"
          name="email"
          placeholder="Email address"
          required
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Input
            type="text"
            name="firstName"
            placeholder="First name"
            required
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Input
            type="text"
            name="lastName"
            placeholder="Last name"
            required
            className="w-full"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Input
          type="tel"
          name="phoneNumber"
          placeholder="Phone number (optional)"
          className="w-full"
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Join Waitlist'}
      </Button>
    </form>
  );
} 