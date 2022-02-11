import React from 'react';
import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getBookById } from './services/fetch_utils';

export default function DetailPage() {
  const [book, setBook] = useState({});
  const match = useRouteMatch();
  
  useEffect(() => {
    async function fetchBooks() {
      const bookResponse = await getBookById(match.params.id);

      setBook(bookResponse);
    }
    fetchBooks();
  }, [match]);

  return (
    <div className='detail'>
      <h1>{book.title}</h1>
      <p>{book.sample}</p>
    </div>
  );
}
