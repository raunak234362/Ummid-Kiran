import { Client, Account,Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6797d15d00067f717caa'); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client); //Adding databases and exporting them to use wherever required
export { ID } from 'appwrite';
