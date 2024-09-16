'use client';

import React from 'react';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
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
      <div>
        <h3 className="font-medium truncate">{book.title}</h3>
        <p className="text-sm text-gray-500 truncate">{book.author}</p>
      </div>
    </div>
  );
}

function CollectionItem({ book }: BookItemProps) {
  return (
    <div className="relative group">
      <div className="w-full aspect-[2/3] relative">
        <Image
          src={book.coverUrl}
          alt={`${book.title} cover`}
          fill
          sizes="(max-width: 768px) 33vw, 20vw"
          className="object-cover rounded"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <p className="text-white text-xs text-center p-1 truncate">{book.title}</p>
      </div>
    </div>
  );
}

export function LeftSidebarComponent() {
  const { recentListens, bookCollection, isLoading } = useUser();

  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  const recentListensToShow = recentListens.slice(0, 4);
  const collectionToShow = bookCollection.slice(0, 6);

  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Listens</h2>
        {recentListensToShow.length > 0 ? (
          recentListensToShow.map((book) => <BookItem key={book.id} book={book} />)
        ) : (
          <p className="text-sm text-gray-500">No recent listens</p>
        )}

        <Separator className="my-6" />

        <h2 className="text-lg font-semibold mb-4">Book Collection</h2>
        {collectionToShow.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {collectionToShow.map((book) => (
              <CollectionItem key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">Your collection is empty</p>
        )}
      </div>
    </ScrollArea>
  );
}
