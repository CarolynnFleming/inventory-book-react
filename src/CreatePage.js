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
      title:title,
      author:author,
      genre:genre,
      sample:sample,
      year:year
    });

    history.push('/books');
  }
  return (
    <div className='create'>
      <form type="form" onSubmit={handleSubmit}>
        <h1>Add Book</h1>
        <label>
                Title
          <input required onChange={e => setTitle(e.target.value)} name='title' />
        </label>
        <label>
                Author
          <input required onChange={e => setAuthor(e.target.value)} name='author' />
        </label>
        <label>
                Genre
          <input required onChange={e => setGenre(e.target.value)} name='genre' />
        </label>
        <label>
                Sample
          <textarea required onChange={e => setSample(e.target.value)} name='year' />
        </label>
        <label>
                Year
          <input required onChange={e => setYear(e.target.value)} name='year' />
        </label>
        <button>Create Book</button>
      </form>
    </div>
  );
}

