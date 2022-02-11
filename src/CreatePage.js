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

  
  return (
    <div>CreatePage</div>
  );
}

