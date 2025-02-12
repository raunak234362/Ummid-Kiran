import { NextRequest, NextResponse } from "next/server";
import { databases } from "@/app/appwrite";
import { Query } from "appwrite"; // ✅ Import Query

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;    //Replace with database id
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string;  //Replace with collection id

export async function GET(req: NextRequest) {
  try {
    // Get query parameters for pagination
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "6", 10);
    const offset = (page - 1) * limit;

    // ✅ Use Query.limit(), Query.offset(), Query.orderDesc()
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(limit),
      Query.offset(offset),
      Query.orderDesc("createdAt"), // Change the name as per database => the createdAt
    ]);

    return NextResponse.json({ success: true, blogs: response.documents });

  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
