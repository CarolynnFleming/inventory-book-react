import React from 'react';
import { useState } from 'react';
import { creatBook } from './services/fetch_utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {

  const history = useHistory();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [sample, setSample] = useState('');
  const [year, setYear] = useState(1);

  async function handleSubmit(e) {
      e.preventDefault();

      await creatBook({
          title: title,
          author: author,
          genre: genre,
          sample: sample,
          year: year
      });

      history.push('/books');
  }
  return (
    <div className='create'>
        <form
    </div>
  );
}

