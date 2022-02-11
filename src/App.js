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
  
  useEffect(() => {
    async function fetchUser() {
      const user = await getUser();
      setUser(user);
    }
    fetchUser();
  }, []);

  async function handleLogout() {
    await logout();

    setUser('');
  }

  return (
    <Router>
      <div className="App">
        <header>
          {
            user &&
            <>
              <NavLink to="/books">Favorite Books</NavLink>
              <NavLink to="/create">Create</NavLink>
              <button onClick={handleLogout}>Exit</button>
            </>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                user
                  ? <Redirect to="/books" />
                  : <AuthPage setUser={setUser} />
              }
            </Route>
            <Route exact path="/books">
              {
                user
                  ? <ListPge />
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/books/:id">
              {
                user
                  ? <DetailPage />
                  : <Redirect to="/"/>
              }
            </Route>
            <Route exact path="/create">
              {
                user
                  ? <CreatePage />
                  : <Redirect to="/" />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
