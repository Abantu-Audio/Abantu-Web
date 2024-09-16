import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Book } from '@/types/book';

interface BookGridProps {
  books: Book[];
  onBookSelect: (book: Book) => void;
}

export function BookGrid({ books, onBookSelect }: BookGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onClick={() => onBookSelect(book)} />
      ))}
    </div>
  );
}

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

function BookCard({ book, onClick }: BookCardProps) {
  return (
    <Card
      className="cursor-pointer bg-white hover:bg-gray-100 rounded-lg shadow-sm hover:shadow-md active:scale-95 transition duration-200 border-0"
      onClick={onClick}
    >
      <CardContent className="p-2">
        <div className="aspect-w-2 aspect-h-3 relative overflow-hidden rounded-md mb-2">
          <Image
            src={book.coverUrl}
            alt={`${book.title} cover`}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
            className="object-cover"
          />
        </div>
        <h3 className="font-semibold text-sm truncate">{book.title}</h3>
        <p className="text-xs text-gray-500 truncate">{book.author}</p>
      </CardContent>
    </Card>
  );
}
