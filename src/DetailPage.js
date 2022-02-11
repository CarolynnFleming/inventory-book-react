import React from 'react';
import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom/';
import { getBookById } from './services/fetch_utils';

export default function DetailPage() {
    const [book, setBook] = useState({});
    const match = useRouteMatch();
  return (
    <div>DetailPage</div>
  )
}
