import { useState, useEffect } from "react";
import { Product } from "../../types";

type ImageContainerProps = {
  product: Product;
};

const ImageContainer = ({ product }: ImageContainerProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (product?.images) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-4 w-1/2">
        {/* Main Image */}
        <div className="w-full">
          <img
            className="w-full aspect-[3/4] object-cover object-center rounded-lg"
            src={selectedImage || ""}
            alt="main product"
          />
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-5 gap-4">
          {product.images?.map((img, idx) => (
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
    </div>
  );
};

export default ImageContainer;
