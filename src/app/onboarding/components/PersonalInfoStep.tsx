"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { OnboardingData } from "../types";

const ethnicityOptions = [
  { value: "black_american", label: "Black American" },
  { value: "indigenous_american", label: "Indigenous American" },
  { value: "white_american", label: "White American" },
  { value: "african", label: "African" },
  { value: "caribbean", label: "Caribbean" },
  { value: "indian", label: "Indian" },
  { value: "hispanic_latino", label: "Hispanic or Latino" },
  { value: "middle_eastern", label: "Middle Eastern" },
  { value: "mixed_heritage", label: "Mixed Heritage" },
  { value: "pacific_islander", label: "Pacific Islander" },
  { value: "asian", label: "Asian" },
  { value: "southeast_asian", label: "Southeast Asian" },
  { value: "other", label: "Other" },
  { value: "prefer_not_to_say", label: "Prefer not to say" },
] as const;

const genderOptions = [
  { value: "woman", label: "Woman" },
  { value: "man", label: "Man" },
  { value: "non_binary", label: "Non-binary" },
  { value: "other", label: "Other" },
  { value: "prefer_not_to_say", label: "Prefer not to say" },
] as const;

// Add countries list (you might want to move this to a separate file)
const countries = [
  // North America
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  
  // Caribbean
  { value: "BB", label: "Barbados" },
  { value: "BS", label: "Bahamas" },
  { value: "CU", label: "Cuba" },
  { value: "DM", label: "Dominica" },
  { value: "DO", label: "Dominican Republic" },
  { value: "HT", label: "Haiti" },
  { value: "JM", label: "Jamaica" },
  { value: "TT", label: "Trinidad and Tobago" },
  
  // South America
  { value: "AR", label: "Argentina" },
  { value: "BO", label: "Bolivia" },
  { value: "BR", label: "Brazil" },
  { value: "CL", label: "Chile" },
  { value: "CO", label: "Colombia" },
  { value: "EC", label: "Ecuador" },
  { value: "GY", label: "Guyana" },
  { value: "PY", label: "Paraguay" },
  { value: "PE", label: "Peru" },
  { value: "SR", label: "Suriname" },
  { value: "UY", label: "Uruguay" },
  { value: "VE", label: "Venezuela" },
  
  // Africa
  { value: "NG", label: "Nigeria" },
  { value: "GH", label: "Ghana" },
  { value: "SN", label: "Senegal" },
  { value: "ET", label: "Ethiopia" },
  { value: "KE", label: "Kenya" },
  { value: "ZA", label: "South Africa" },
  { value: "UG", label: "Uganda" },
  { value: "CM", label: "Cameroon" },
  { value: "CI", label: "Côte d'Ivoire" },
  
  // Europe
  { value: "GB", label: "United Kingdom" },
  { value: "FR", label: "France" },
  { value: "DE", label: "Germany" },
  { value: "NL", label: "Netherlands" },
  { value: "PT", label: "Portugal" },
  
  // Other
  { value: "OTHER", label: "Other" }
] as const;

interface FormErrors {
  firstName?: string;
  lastName?: string;
  age?: string;
  gender?: string;
  city?: string;
  country?: string;
  ethnicity?: string;
}

interface PersonalInfoStepProps {
  onDataSubmit: (data: Partial<OnboardingData>) => void;
}

export function PersonalInfoStep({ onDataSubmit }: PersonalInfoStepProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    city: "",
    country: "",
    ethnicity: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "firstName":
      case "lastName":
        if (!value.trim()) return "This field is required";
        if (value.length < 2) return "Must be at least 2 characters";
        if (!/^[a-zA-Z\s-']+$/.test(value)) return "Only letters, spaces, hyphens and apostrophes allowed";
        return "";
      case "city":
        if (!value.trim()) return "This field is required";
        if (value.length < 2) return "Must be at least 2 characters";
        return "";
      case "age":
      case "gender":
      case "country":
      case "ethnicity":
        if (!value) return "Please select an option";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Validate on change if field has been touched
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    let hasErrors = false;

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) {
        newErrors[field as keyof FormErrors] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, field) => ({ ...acc, [field]: true }), {}));

    if (!hasErrors) {
      const location = `${formData.city}, ${formData.country}`;
      onDataSubmit({ ...formData, location });
    }
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
              onBlur={() => handleBlur("firstName")}
              className={errors.firstName ? "border-red-500" : ""}
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
            />
            {errors.firstName && touched.firstName && (
              <p className="text-sm text-red-500" id="firstName-error">{errors.firstName}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              onBlur={() => handleBlur("lastName")}
              className={errors.lastName ? "border-red-500" : ""}
              aria-invalid={!!errors.lastName}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
            />
            {errors.lastName && touched.lastName && (
              <p className="text-sm text-red-500" id="lastName-error">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Select
            value={formData.age}
            onValueChange={(value) => handleChange("age", value)}
            onOpenChange={() => handleBlur("age")}
          >
            <SelectTrigger className={errors.age && touched.age ? "border-red-500" : ""}>
              <SelectValue placeholder="Select your age group" />
            </SelectTrigger>
            <SelectContent className="max-h-[200px] overflow-y-auto">
              <SelectItem value="under-18">Under 18</SelectItem>
              <SelectItem value="18-24">18-24</SelectItem>
              <SelectItem value="25-34">25-34</SelectItem>
              <SelectItem value="35-44">35-44</SelectItem>
              <SelectItem value="45-plus">45+</SelectItem>
            </SelectContent>
          </Select>
          {errors.age && touched.age && (
            <p className="text-sm text-red-500">{errors.age}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select
            value={formData.gender}
            onValueChange={(value) => handleChange("gender", value)}
            onOpenChange={() => handleBlur("gender")}
          >
            <SelectTrigger className={errors.gender && touched.gender ? "border-red-500" : ""}>
              <SelectValue placeholder="Select your gender identity" />
            </SelectTrigger>
            <SelectContent className="max-h-[200px] overflow-y-auto">
              {genderOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.gender && touched.gender && (
            <p className="text-sm text-red-500">{errors.gender}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="ethnicity">Ethnicity</Label>
          <Select
            onValueChange={(value) => handleChange("ethnicity", value)}
            defaultValue={formData.ethnicity}
            onOpenChange={() => handleBlur("ethnicity")}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your ethnicity" />
            </SelectTrigger>
            <SelectContent className="max-h-[200px] overflow-y-auto">
              {ethnicityOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.ethnicity && touched.ethnicity && (
            <p className="text-sm text-red-500">{errors.ethnicity}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="Your city"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              onBlur={() => handleBlur("city")}
              className={errors.city && touched.city ? "border-red-500" : ""}
              aria-invalid={!!errors.city}
              aria-describedby={errors.city ? "city-error" : undefined}
            />
            {errors.city && touched.city && (
              <p className="text-sm text-red-500" id="city-error">{errors.city}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select
              value={formData.country}
              onValueChange={(value) => handleChange("country", value)}
              onOpenChange={() => handleBlur("country")}
            >
              <SelectTrigger className={errors.country && touched.country ? "border-red-500" : ""}>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent className="max-h-[200px] overflow-y-auto">
                {countries.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.country && touched.country && (
              <p className="text-sm text-red-500" id="country-error">{errors.country}</p>
            )}
          </div>
        </div>
      </form>
    </Card>
  );
} 