import { NextRequest, NextResponse } from "next/server";
import { databases, storage } from "@/app/appwrite";

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string;
const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string;

// ✅ Define params as a Promise type
type tParams = Promise<{ id: string }>;

export async function GET(
  req: NextRequest,
  props: { params: tParams } // ✅ Expecting Promise for params
): Promise<NextResponse> {
  try {
    const { id } = await props.params; // ✅ Await params
    console.log("reached"+id)
    
    // Fetch blog document
    const blog = await databases.getDocument(DATABASE_ID, COLLECTION_ID, id);

    // Fetch image URL if blog has an image
    let imageUrl: string | null = null;
    if (blog.imageId) {
      imageUrl = storage.getFileView(BUCKET_ID, blog.imageId).href;
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
