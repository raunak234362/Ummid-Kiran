"use client"
import Link from "next/link"
import DashboardSidebar from "@/components/dashboard/DashboardSidebar"

function WelcomePage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <DashboardSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-sky-800 mb-6">Welcome, User!</h1>
        <p className="text-gray-600 mb-8">What would you like to do today?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/dashboard/add-blog"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-sky-800 mb-2">Add Blog Post</h2>
            <p className="text-gray-600">Create a new blog post to share with your audience.</p>
          </Link>
          <Link
            href="/dashboard/add-image"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-sky-800 mb-2">Add Image to Gallery</h2>
            <p className="text-gray-600">Upload a new image to your gallery collection.</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default WelcomePage

