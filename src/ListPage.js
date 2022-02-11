import React from 'react';
import { useState, useEffect } from 'react';
import { getBooks } from './services/fetch_utils';
import Book from './Book';

export default function ListPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetch() {
      const fetchBooks = await getBooks();

      setBooks(fetchBooks);
    }
    fetch();
  }, []);
  return (
    <div className='list-books'>
      {
        books.map(book => <Book key={book.id} book={book} />)
      }
    </div>
  );
}
