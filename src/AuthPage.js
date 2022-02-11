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
}