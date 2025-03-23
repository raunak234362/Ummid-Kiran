"use client"
import DashboardSidebar from "@/components/dashboard/DashboardSidebar"
// import AddImageToGallery from "@/components/dashboard/AddImageToGallery"

function AddImagePage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <DashboardSidebar />
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-sky-800 mb-6">Add Image to Gallery</h1>
        {/* <AddImageToGallery /> */}
      </main>
    </div>
  )
}

export default AddImagePage

