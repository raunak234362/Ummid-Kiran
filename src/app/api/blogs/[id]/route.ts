import { NextRequest, NextResponse } from "next/server";
import { databases, storage } from "@/app/appwrite";

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string;
const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string; // ✅ Adding Bucket ID

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Fetch blog document
    const blog = await databases.getDocument(DATABASE_ID, COLLECTION_ID, id);

    // Fetch image URL if blog has an image
    let imageUrl = null;
    if (blog.imageId) {
      imageUrl = storage.getFileView(BUCKET_ID, blog.imageId).href; // ✅ Generate image URL
    }

    return NextResponse.json({ success: true, blog: { ...blog, imageUrl } });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { success: false, message: "Blog not found" },
      { status: 404 }
    );
  }
}
