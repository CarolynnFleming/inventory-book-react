import { Link } from 'react-router-dom';

export default function Book({ book:
id,
title,
author,
genre,
year }) {
  return (
    <Link to={`/books/${id}`}>
      <div className='book-info'>
        <h1><em>{title}</em></h1>
        <p>by:{author}</p>
        <p>Genre:{genre}</p>
        <p>Year:{year}</p>
        <h2><em>Click for sample📚</em></h2>
      </div>
    </Link>
  );
}