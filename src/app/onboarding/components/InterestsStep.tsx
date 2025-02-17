"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface InterestsStepProps {
  onDataSubmit: (data: { genres: string[] }) => void;
}

const AVAILABLE_GENRES = [
  "African Literature",
  "Contemporary Fiction",
  "Historical Fiction",
  "Poetry",
  "Memoirs",
  "Cultural Studies",
  "Politics",
  "Business",
  "Self Development",
  "Children's Books",
  "Young Adult",
  "Spirituality",
  "History",
  "Science Fiction",
  "Fantasy",
] as const;

export function InterestsStep({ onDataSubmit }: InterestsStepProps) {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedGenres.length >= 3) {
      onDataSubmit({ genres: selectedGenres });
    }
  };

  return (
    <Card className="p-6 border-gray-200 shadow-sm">
      <form id="step-2-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Select the genres that interest you (select at least 3)
          </p>
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_GENRES.map((genre) => {
              const isSelected = selectedGenres.includes(genre);
              return (
                <Badge
                  key={genre}
                  variant={isSelected ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    isSelected 
                      ? "bg-[#6F459F] hover:bg-[#5D3B86] text-white border-transparent" 
                      : "border-gray-300 text-gray-700 hover:border-[#6F459F] hover:text-[#6F459F]"
                  }`}
                  onClick={() => toggleGenre(genre)}
                >
                  {genre}
                </Badge>
              );
            })}
          </div>
          {selectedGenres.length < 3 && (
            <p className="text-sm text-red-500">
              Please select at least 3 genres to continue
            </p>
          )}
        </div>
      </form>
    </Card>
  );
} 