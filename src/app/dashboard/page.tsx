"use client"

import { useState } from "react"
import { FiPlusCircle, FiImage } from "react-icons/fi"
import AddBlogForm from "@/components/dashboard/AddBlogForm"
import AddImageToGallery from "@/components/dashboard/AddImageToGallery"

export default function DashboardPage() {

  const [activeSection, setActiveSection] = useState<"welcome" | "blog" | "image">("welcome")

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white bottom-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <nav className="flex items-center space-x-4">
           
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === "welcome" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-sky-800 mb-6">Welcome, Siddharth!</h2>
            <p className="text-gray-600 mb-8">What would you like to do today?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => setActiveSection("blog")}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4"
              >
                <FiPlusCircle className="h-8 w-8 text-sky-600" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-sky-800">Add Blog Post</h3>
                  <p className="text-gray-600">Create a new blog post to share with your audience.</p>
                </div>
              </button>
              <button
                onClick={() => setActiveSection("image")}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4"
              >
                <FiImage className="h-8 w-8 text-sky-600" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-sky-800">Add Image to Gallery</h3>
                  <p className="text-gray-600">Upload a new image to your gallery collection.</p>
                </div>
              </button>
            </div>
          </div>
        )}
        {activeSection === "blog" && <AddBlogForm onBack={() => setActiveSection("welcome")} />}
        {activeSection === "image" && <AddImageToGallery onBack={() => setActiveSection("welcome")} />}
      </main>
    </div>
  )
}

