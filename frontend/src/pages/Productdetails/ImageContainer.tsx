import { useState } from "react";

const ImageContainer = () => {
  // All product images
  const images = [
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1432462770865-65b70566d673?auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=2762&q=80",
    "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?auto=format&fit=crop&w=2832&q=80",
  ];

  // Keep track of the selected image (default = first image)
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex gap-6">
      {/* Left side - Image gallery */}
      <div className="flex flex-col gap-4 w-1/2">
        {/* Main Image */}
        <div className="w-full">
          <img
            className="w-full aspect-[3/4] object-cover object-center rounded-lg"
            src={selectedImage}
            alt="main product"
          />
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-5 gap-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setSelectedImage(img)}
              className={`object-cover object-center h-20 w-full rounded-lg cursor-pointer transition
                ${selectedImage === img ? "ring-2 ring-blue-500" : ""}`}
              alt={`thumbnail-${idx}`}
            />
          ))}
        </div>
      </div>

      {/* Right side - Product Info */}
      <div className="w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Product Title</h2>
        <p className="text-gray-600 mb-6">
          Product details or description goes here...
        </p>
      </div>
    </div>
  );
};

export default ImageContainer;
