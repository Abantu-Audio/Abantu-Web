"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PersonalInfoStepProps {
  onDataSubmit: (data: {
    firstName: string;
    lastName: string;
    age: string;
    location: string;
  }) => void;
}

export function PersonalInfoStep({ onDataSubmit }: PersonalInfoStepProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    location: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onDataSubmit(formData);
  };

  return (
    <Card className="p-6">
      <form id="step-1-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">Age group</Label>
          <Select
            value={formData.age}
            onValueChange={(value) => handleChange("age", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your age group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-18">Under 18</SelectItem>
              <SelectItem value="18-24">18-24</SelectItem>
              <SelectItem value="25-34">25-34</SelectItem>
              <SelectItem value="35-44">35-44</SelectItem>
              <SelectItem value="45-plus">45+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="City, Country"
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
            required
          />
        </div>
      </form>
    </Card>
  );
} 