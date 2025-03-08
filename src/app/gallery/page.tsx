"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Assuming you have 79 images and their names follow a pattern
const imageCount = 78;

const images = Array.from(
  { length: imageCount + 1 }, // Increase length to account for the skipped image
  (_, i) =>
    i === 8 ? "" : `/gallery/IMG-20250212-WA${String(i).padStart(4, "0")}.jpg`
).filter((src) => src !== ""); // Filter out the empty string

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState<
    { id: number; alt: string; src: string }[]
  >([]);
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    alt: string;
    src: string;
  } | null>(null);

  console.log(images);

  useEffect(() => {
    const galleryData = images.map((src, index) => ({
      id: index + 1,
      alt: `Image ${index + 1}`,
      src: src,
    }));

    setGalleryImages(galleryData);
    console.log(galleryImages);
  }, []);

  const openLightbox = (img: { id: number; alt: string; src: string }) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Image Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="max-w-3xl w-full p-4 bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-contain max-h-[80vh]"
            />
            <p className="mt-2 text-center text-gray-600">
              {selectedImage.alt}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-300 w-full"
              onClick={closeLightbox}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
