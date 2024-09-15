import { useState } from 'react';
import { Book } from '@/types/book';
import { dummyBooks } from '@/data/dummy-books';

const INITIAL_LOAD = 20;
const LOAD_MORE_INCREMENT = 20;

// Set this to true to use dummy data, false to use real data
const USE_DUMMY_DATA = true;

// This would typically come from an API call
const fetchRealBooks = async (): Promise<Book[]> => {
  // Implement your API call here
  // For now, we'll return an empty array
  return [];
};

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [displayCount, setDisplayCount] = useState(INITIAL_LOAD);
  const [isLoading, setIsLoading] = useState(true);

  useState(() => {
    const loadBooks = async () => {
      setIsLoading(true);
      const loadedBooks = USE_DUMMY_DATA ? dummyBooks : await fetchRealBooks();
      setBooks(loadedBooks);
      setIsLoading(false);
    };

    loadBooks();
  });

  const loadMore = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + LOAD_MORE_INCREMENT, books.length));
  };

  return {
    books,
    displayCount,
    loadMore,
    isLoading,
  };
}
