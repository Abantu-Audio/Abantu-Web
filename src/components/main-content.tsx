'use client';

import React from 'react';
import { useBooks } from '@/hooks/use-books';
import { BookGrid } from '@/components/book-grid';
import { Book } from '@/types/book';

interface MainContentProps {
  onBookSelect: (book: Book) => void;
}

export function MainContent({ onBookSelect }: MainContentProps) {
  const { books, displayCount, isLoading } = useBooks();

  if (isLoading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-grow overflow-auto">
        <BookGrid books={books.slice(0, displayCount)} onBookSelect={onBookSelect} />
      </div>
      {/* {displayCount < books.length && <LoadMoreButton onClick={loadMore} />} */}
    </div>
  );
}

// ... existing code ...
