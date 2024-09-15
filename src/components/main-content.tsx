'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
}

const books: Book[] = [
  {
    id: 'book-1',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverUrl: 'https://covers.openlibrary.org/b/id/8231990-L.jpg',
  },
  {
    id: 'book-2',
    title: '1984',
    author: 'George Orwell',
    coverUrl: 'https://covers.openlibrary.org/b/id/8575741-L.jpg',
  },
  {
    id: 'book-3',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    coverUrl: 'https://covers.openlibrary.org/b/id/8739161-L.jpg',
  },
  {
    id: 'book-4',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverUrl: 'https://covers.openlibrary.org/b/id/8432047-L.jpg',
  },
  {
    id: 'book-5',
    title: 'Moby Dick',
    author: 'Herman Melville',
    coverUrl: 'https://covers.openlibrary.org/b/id/8258384-L.jpg',
  },
  // Add more books as needed to reach your desired count
];

const INITIAL_LOAD = 20;
const LOAD_MORE_INCREMENT = 20;

export function MainContentComponent({ onBookSelect }: { onBookSelect: (book: Book) => void }) {
  const [displayCount, setDisplayCount] = useState(INITIAL_LOAD);

  const loadMore = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + LOAD_MORE_INCREMENT, books.length));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          {books.slice(0, displayCount).map((book) => (
            <Card
              key={book.id}
              className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
              onClick={() => onBookSelect(book)}
            >
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={book.coverUrl}
                    alt={`${book.title} cover`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="font-semibold text-sm truncate">{book.title}</h3>
                  <p className="text-xs text-gray-500 truncate">{book.author}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {displayCount < books.length && (
        <div className="flex justify-center p-4 border-t">
          <Button onClick={loadMore} variant="outline" className="w-full max-w-xs">
            Show More
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}
