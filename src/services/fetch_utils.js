import { client, checkError } from './client';

export function getuser() {
    return client.auth.session();
}