import React from 'react';
import { useState, useEffect } from 'react';
import { getBooks } from './services/fetch_utils';
import Book from './Book';

export default function ListPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            const books = await getBooks();

            setBooks(books);
        }
        fetchBooks();
    }, []);
  return (
    <div>ListPage</div>
  )
}
