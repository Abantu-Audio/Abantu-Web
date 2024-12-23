'use client';

import React, { Suspense } from 'react';
import { useBooks } from '@/hooks/use-books';
import { BookGrid } from '@/components/book-grid';
import { Book } from '@/types/book';
import { Skeleton } from '@/components/ui/skeleton';

interface MainContentProps {
  onBookSelect: (book: Book) => void;
}

function LoadingFallback() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {[...Array(8)].map((_, index) => (
        <Skeleton key={index} className="h-64 w-full rounded-md" />
      ))}
    </div>
  );
}

export function MainContent({ onBookSelect }: MainContentProps) {
  const { books, displayCount, isLoading } = useBooks();

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <Suspense fallback={<LoadingFallback />}>
        <div className="flex-grow overflow-auto">
          <BookGrid books={books.slice(0, displayCount)} onBookSelect={onBookSelect} />
        </div>
      </Suspense>
    </div>
  );
}
