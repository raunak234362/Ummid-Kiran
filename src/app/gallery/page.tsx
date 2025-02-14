"use client";
import React, { useEffect, useState } from "react";

// Assuming you have 79 images and their names follow a pattern
const imageCount = 79;
const images = Array.from(
  { length: imageCount },
  (_, i) => `/gallery/IMG-20250212-WA${String(i).padStart(4, "0")}.jpg`
);

export default function Gallery() {
  const [loadedImages, setLoadedImages] = useState(images);

  useEffect(() => {
    const scrollContainer = document.getElementById("scrollContainer");
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust speed (lower is slower)

    const scrollDown = () => {
      if (scrollAmount < scrollContainer.scrollHeight - scrollContainer.clientHeight) {
        scrollAmount += scrollSpeed;
        scrollContainer.scrollTo({ top: scrollAmount, behavior: "smooth" });
      } else {
        scrollAmount = 0; // Reset to start once scrolled down completely
      }
    };

    const interval = setInterval(scrollDown, 50); // Adjust speed interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-100 flex justify-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Gallery</h1>

        {/* Scrollable Image Grid with Auto-Scroll */}
        <div
          id="scrollContainer"
          className="overflow-auto h-[80vh] rounded-lg shadow-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        >
          <div className="grid grid-cols-3 gap-4 p-4">
            {loadedImages.map((src, index) => (
              <div key={index} className="w-full h-64 overflow-hidden rounded-lg shadow-md">
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-md transition-transform hover:scale-105"
                  onError={(e) => {
                    console.error("Image not found:", src);
                    e.currentTarget.style.display = "none"; // Hide broken images
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
