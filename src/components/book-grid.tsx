import React from 'react';
import Image from 'next/image';
import { Book } from '@/types/book';

interface BookGridProps {
  books: Book[];
  onBookSelect: (book: Book) => void;
}

export function BookGrid({ books, onBookSelect }: BookGridProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold my-4 px-6">Browse All</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6 p-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onClick={() => onBookSelect(book)} />
        ))}
      </div>
    </div>
  );
}

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

function BookCard({ book, onClick }: BookCardProps) {
  return (
    <div className="cursor-pointer group" onClick={onClick}>
      <div className="aspect-[3/4] relative overflow-hidden rounded-md mb-2">
        <Image
          src={book.coverUrl}
          alt={`${book.title} cover`}
          fill
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 16vw"
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="font-medium text-sm truncate">{book.title}</h3>
      <p className="text-xs text-muted-foreground truncate">{book.author}</p>
    </div>
  );
}
