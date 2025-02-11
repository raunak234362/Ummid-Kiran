import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6797d15d00067f717caa'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
