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
      <div className="flex flex-row w-2/5 items-start">
        {/* Thumbnail Grid */}
        <div className="flex flex-col gap-4 w-1/5 mr-4">
          {product.images?.map((img, idx) => (
            <img
              key={idx}
              src={img}
              onClick={() => setSelectedImage(img)}
              className={`object-cover object-center h-16 w-full rounded-lg cursor-pointer transition
                ${selectedImage === img ? "ring-2 ring-blue-500" : ""}`}
              alt={`thumbnail-${idx}`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="w-4/5">
          <img
            className="w-full aspect-[3/4] object-cover object-center rounded-lg"
            src={selectedImage || ""}
            alt="main product"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
