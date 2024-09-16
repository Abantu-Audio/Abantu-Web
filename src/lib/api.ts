import { Book } from '@/types/book';

// Expanded dummy data for demonstration purposes
const dummyBooks: Book[] = [
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
];

export async function fetchRecentListens(): Promise<Book[]> {
  // Simulate an API call by returning the first 5 books after a short delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyBooks.slice(0, 5)), 500);
  });
}

export async function fetchYourCollection(): Promise<Book[]> {
  // Simulate an API call by returning all books after a short delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyBooks), 500);
  });
}
