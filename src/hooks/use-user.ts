import { useState, useEffect } from 'react';
import { Book } from '@/types/book';
import { fetchRecentListens, fetchYourCollection } from '@/lib/api';

export function useUser() {
  const [recentListens, setRecentListens] = useState<Book[]>([]);
  const [bookCollection, setBookCollection] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUserData() {
      try {
        const [recentListensData, bookCollectionData] = await Promise.all([
          fetchRecentListens(),
          fetchYourCollection(),
        ]);
        console.log('Recent Listens:', recentListensData);
        console.log('Book Collection:', bookCollectionData);
        setRecentListens(recentListensData);
        setBookCollection(bookCollectionData);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        // Handle error (e.g., show error message to user)
      } finally {
        setIsLoading(false);
      }
    }

    loadUserData();
  }, []);

  return {
    recentListens,
    bookCollection,
    isLoading,
  };
}
