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
    <Card className="p-6">
      <form id="step-2-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Select the genres that interest you (select at least 3)
          </p>
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_GENRES.map((genre) => {
              const isSelected = selectedGenres.includes(genre);
              return (
                <Badge
                  key={genre}
                  variant={isSelected ? "default" : "outline"}
                  className={`cursor-pointer ${
                    isSelected ? "bg-primary" : "hover:bg-primary/10"
                  }`}
                  onClick={() => toggleGenre(genre)}
                >
                  {genre}
                </Badge>
              );
            })}
          </div>
          {selectedGenres.length < 3 && (
            <p className="text-sm text-destructive">
              Please select at least 3 genres to continue
            </p>
          )}
        </div>
      </form>
    </Card>
  );
} 