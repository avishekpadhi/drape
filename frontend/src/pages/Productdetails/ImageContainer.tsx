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
    <div className="flex gap-6 w-full">
      <div className="flex flex-col gap-3 w-1/5">
        {product.images?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            onClick={() => setSelectedImage(img)}
            className={`object-cover h-16 w-full rounded-lg cursor-pointer
          transition ${selectedImage === img ? "ring-2 ring-blue-500" : ""}`}
            alt={`thumbnail-${idx}`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="w-4/5">
        <img
          className="w-full aspect-[3/4] object-cover rounded-lg"
          src={selectedImage || ""}
          alt="main product"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
