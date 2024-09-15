'use client';

import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
}

const recentListens: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverUrl: 'https://covers.openlibrary.org/b/id/8432047-M.jpg',
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    coverUrl: 'https://covers.openlibrary.org/b/id/8575741-M.jpg',
  },
  {
    id: '3',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverUrl: 'https://covers.openlibrary.org/b/id/8231990-M.jpg',
  },
  {
    id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    coverUrl: 'https://covers.openlibrary.org/b/id/8739161-M.jpg',
  },
  {
    id: '5',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    coverUrl: 'https://covers.openlibrary.org/b/id/8231583-M.jpg',
  },
];

const yourCollection: Book[] = [
  {
    id: '6',
    title: 'Moby Dick',
    author: 'Herman Melville',
    coverUrl: 'https://covers.openlibrary.org/b/id/8258384-M.jpg',
  },
  {
    id: '7',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    coverUrl: 'https://covers.openlibrary.org/b/id/8406786-M.jpg',
  },
  {
    id: '8',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    coverUrl: 'https://covers.openlibrary.org/b/id/8231887-M.jpg',
  },
  {
    id: '9',
    title: 'The Odyssey',
    author: 'Homer',
    coverUrl: 'https://covers.openlibrary.org/b/id/8239853-M.jpg',
  },
  {
    id: '10',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    coverUrl: 'https://covers.openlibrary.org/b/id/8408435-M.jpg',
  },
  {
    id: '11',
    title: 'Frankenstein',
    author: 'Mary Shelley',
    coverUrl: 'https://covers.openlibrary.org/b/id/8091482-M.jpg',
  },
];

export function LeftSidebarComponent() {
  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Listens</h2>
        {recentListens.map((book) => (
          <div key={book.id} className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 relative">
              <Image
                src={book.coverUrl}
                alt={`${book.title} cover`}
                fill
                sizes="48px"
                className="object-cover rounded"
              />
            </div>
            <div>
              <h3 className="font-medium">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
            </div>
          </div>
        ))}

        <Separator className="my-6" />

        <h2 className="text-lg font-semibold mb-4">Your Collection</h2>
        <div className="grid grid-cols-3 gap-4">
          {yourCollection.map((book) => (
            <div key={book.id} className="aspect-square relative group">
              <Image
                src={book.coverUrl}
                alt={`${book.title} cover`}
                fill
                sizes="(max-width: 768px) 33vw, 20vw"
                className="object-cover rounded"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <p className="text-white text-xs text-center p-1">{book.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
