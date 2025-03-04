"use client"; // Ensure this is at the top

import { useState } from "react";
import AddBlogForm from "./AddBlogForm";
import AddImageToGallery from "./AddImageToGallery";

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"blog" | "gallery" | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-sky-800 mb-6">Dashboard</h1>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveSection("blog")}
          className={`px-4 py-2 rounded transition ${
            activeSection === "blog" ? "bg-sky-600 text-white" : "bg-sky-200 text-sky-800 hover:bg-sky-300"
          }`}
        >
          Add Blog
        </button>
        <button
          onClick={() => setActiveSection("gallery")}
          className={`px-4 py-2 rounded transition ${
            activeSection === "gallery" ? "bg-sky-600 text-white" : "bg-sky-200 text-sky-800 hover:bg-sky-300"
          }`}
        >
          Add Image to Gallery
        </button>
      </div>
      <div className="mt-4">
        {activeSection === "blog" && <AddBlogForm />}
        {activeSection === "gallery" && <AddImageToGallery />}
      </div>
    </div>
  );
};

export default Dashboard;
