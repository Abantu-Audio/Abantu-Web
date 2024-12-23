'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useUser } from '@/hooks/use-user';
import { Book } from '@/types/book';

interface BookItemProps {
  book: Book;
}

function BookItem({ book }: BookItemProps) {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 relative">
        <Image
          src={book.coverUrl}
          alt={`${book.title} cover`}
          fill
          sizes="48px"
          className="object-cover rounded"
        />
      </div>
      <div className="flex-grow min-w-0">
        <h3 className="font-medium text-sm truncate">{book.title}</h3>
        <p className="text-xs text-muted-foreground truncate">{book.author}</p>
      </div>
    </div>
  );
}

export function LeftSidebarComponent() {
  const { bookCollection, isLoading } = useUser();

  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Book Collection</h2>
        {bookCollection.length > 0 ? (
          bookCollection.map((book) => <BookItem key={book.id} book={book} />)
        ) : (
          <p className="text-sm text-muted-foreground">Your collection is empty</p>
        )}
      </div>
    </ScrollArea>
  );
}
