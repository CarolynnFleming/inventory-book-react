import { useState, useEffect } from 'react';
import { getUser } from './services/fetch_utils';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import DetailPage from './DetailPage';
import ListPge from './ListPage';
import CreatePage from './CreatePage';
import './App.css';
import { logout } from './services/fetch_utils';
function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
