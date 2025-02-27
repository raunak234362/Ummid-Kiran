import { NextRequest, NextResponse } from "next/server";
import { databases, client } from "@/app/appwrite";
import { Query, Storage } from "appwrite"; // ✅ Import Storage

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string;
const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string; // ✅ Add Bucket ID



const storage = new Storage(client); // ✅ Initialize Storage

export async function GET(req: NextRequest) {
console.log(DATABASE_ID, COLLECTION_ID, BUCKET_ID);

  try {
    // Get query parameters for pagination
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "6", 10);
    const offset = (page - 1) * limit;

    // Fetch blogs with pagination
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(limit),
      Query.offset(offset),
      Query.orderDesc("$createdAt"),
    ]);

    // Attach image URLs if blogs have images
    const blogsWithImages = await Promise.all(
      response.documents.map(async (blog) => {
        let imageUrl = null;
        if (blog.imageId) {
          imageUrl = storage.getFileView(BUCKET_ID, blog.imageId);
        }
        return { ...blog, imageUrl };
      })
    );

    return NextResponse.json({ success: true, blogs: blogsWithImages });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
