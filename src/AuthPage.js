import { useState } from 'react';
import { signIn, signUp } from './services/fetch_utils';

export default function AuthPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signIn(email, password);

    props.setUser(user);
  }

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUp(email, password);

    props.setUser(user);
  }

  return (
    <div className='auth'>
      <h1><em>BOOKS</em></h1>
      <form onSubmit={handleSignIn}>
        <label>
                  Email
          <input value={email} required type="email" name="email"
            onChange={e => setEmail(e.target.value)}/> 
        </label>
        <label>
                  Password
          <input value={password} required type="password" name="password"
            onChange={e => setPassword(e.target.value)}/> 
        </label>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp} type="button">Sign Up</button>
      </form>
    </div>
  );
}