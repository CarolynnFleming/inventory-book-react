import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });
  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });
  return response.user;
}

export async function logout() {
  await client.auth.signOut();
  return window.location.href = '../';
}

export async function creatBook(book) {
  const response = await client
    .from('books')
    .insert(book);
  return checkError(response);
}

export async function getBooks() {
  const response = await client
    .from('books')
    .select();

  return checkError(response);
}

export async function getBookById(id) {
  const response = await client
    .from('books')
    .select()
    .match({ id })
    .single();

  return checkError(response);
}