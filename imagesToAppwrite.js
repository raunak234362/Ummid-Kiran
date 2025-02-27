// import { Client, Databases, Storage } from "appwrite";
// import fs from "fs";
// import path from "path";

// const client = new Client()
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("67b32231001f01be8e49");

// const databases = new Databases(client);
// const storage = new Storage(client);

// // Function to upload files from a folder
// async function uploadImagesFromFolder(folderPath, bucketId) {
//   try {
//     // Get all files in the folder
//     const files = fs.readdirSync(folderPath);

//     for (const fileName of files) {
//       // Check if the file is an image (basic check)

//       if (/\.(jpg|jpeg|png|gif|webp)$/i.test(fileName)) {
//         const filePath = path.join(folderPath, fileName);
//         // const fileBuffer = fs.readFileSync(filePath);
//         console.log(filePath);
//         const fileStream = fs.createReadStream(filePath);
//         c

//         // Upload to Appwrite

//         const file = await storage.createFile(
//           bucketId,
//           "unique()", // Generate unique ID
//           fileStream
//         );
//         // const file = await storage.createFile(
//         //   bucketId,
//         //   "unique()", // Generate unique ID
//         //   fileBuffer
//         // );

//         // Get file URL
//         const fileUrl = storage.getFileView(bucketId, file.$id);

//         // Store in database
//         await databases.createDocument(
//           "IMAGE_DATABASE_ID",
//           "IMAGE_LINKS_COLLECTION_ID",
//           "unique()",
//           {
//             imageUrl: fileUrl,
//             bucketId: bucketId,
//             fileId: file.$id,
//             fileName: fileName,
//           }
//         );

//         console.log(`Uploaded: ${fileName}`);
//       }
//     }
//     console.log("All images uploaded successfully!");
//   } catch (error) {
//     console.error("Error uploading images:", error);
//   }
// }

// // Usage
// uploadImagesFromFolder("./public/gallery", "67c06d8100026343b1ba");

// import { Client, Databases, Storage } from "appwrite";
// import fs from "fs";
// import path from "path";

// const client = new Client()
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("67b32231001f01be8e49");

// const databases = new Databases(client);
// const storage = new Storage(client);

// // Function to upload files from a folder
// async function uploadImagesFromFolder(folderPath, bucketId) {
//   try {
//     // Get all files in the folder
//     const files = fs.readdirSync(folderPath);

//     for (const fileName of files) {
//       // Check if the file is an image (basic check)
//       if (/\.(jpg|jpeg|png|gif|webp)$/i.test(fileName)) {
//         const filePath = path.join(folderPath, fileName);

//         // Create a read stream (IMPORTANT: Fixes the error)
//         const fileStream = fs.createReadStream(filePath);

//         // Upload to Appwrite
//         const file = await storage.createFile(
//           bucketId,
//           "unique()", // Generate unique ID
//           fileStream
//         );

//         // Get file URL
//         const fileUrl = storage.getFileView(bucketId, file.$id);

//         // Store in database
//         await databases.createDocument(
//           "IMAGE_DATABASE_ID",
//           "IMAGE_LINKS_COLLECTION_ID",
//           "unique()",
//           {
//             imageUrl: fileUrl,
//             bucketId: bucketId,
//             fileId: file.$id,
//             fileName: fileName,
//           }
//         );

//         console.log(`Uploaded: ${fileName}`);
//       }
//     }
//     console.log("All images uploaded successfully!");
//   } catch (error) {
//     console.error("Error uploading images:", error);
//   }
// }

// // Usage
// uploadImagesFromFolder("./public/gallery", "67c06d8100026343b1ba");

import { Client, Storage, Databases, ID } from "appwrite";

console.log("appwrite");
import fs from "fs";
import path from "path";
// const fs = require("fs");
// const path = require("path");

const APPWRITE_ENDPOINT = "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "67b32231001f01be8e49";
const BUCKET_ID = "67c06d8100026343b1ba";
const COLLECTION_ID = "67c0856b001a4bfa84af";

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);
//   .setKey(APPWRITE_API_KEY);

const storage = new Storage(client);
const database = new Databases(client);

const folderPath = "./public/gallery";

async function uploadImages() {
  try {
    const files = fs.readdirSync(folderPath);
    console.log(files);

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      console.log(filePath);

      try {
        // Create a read stream for the file
        const fileStream = fs.createReadStream(filePath);

        const response = await storage.createFile(
          BUCKET_ID,
          ID.unique(), // Generate a unique file ID
          fileStream, // Pass the file stream instead of the file path
          ["role:all"]
        );

        if (response) {
          const metadata = {
            fileName: file,
            file: response.$id,
          };

          const document = await database.createDocument(
            COLLECTION_ID,
            ID.unique(),
            metadata
          );

          console.log(`File ${file} uploaded and metadata stored:`, document);
        } else {
          console.error(`Failed to upload file ${file}`);
        }
      } catch (error) {
        console.error(`Error uploading file ${file}:`, error);
      }
    }
  } catch (error) {
    console.error("Error reading folder:", error);
  }
}

uploadImages();
