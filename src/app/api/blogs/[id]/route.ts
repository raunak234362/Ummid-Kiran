import { NextRequest, NextResponse } from "next/server";
import { databases } from "@/app/appwrite";

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;     //Replace with database id
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string; //Replace with collection id

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Fetch single blog from AppWrite by ID
    const blog = await databases.getDocument(DATABASE_ID, COLLECTION_ID, id);

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { success: false, message: "Blog not found" },
      { status: 404 }
    );
  }
}
