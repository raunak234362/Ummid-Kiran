import { Client, Account, Databases, Storage, ID } from 'appwrite';

export const client = new Client();

const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client); // ✅ Adding Storage
export { ID };
