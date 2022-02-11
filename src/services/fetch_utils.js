import { client, checkError } from './client';

export function getuser() {
  return client.auth.session();
}

export async function signUp(email, password) {
    const response = await client.auth.suignUp({ email, password });
    return response.user;
}