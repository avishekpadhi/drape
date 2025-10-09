import { useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Product } from "../../types";
import ProductDescription from "./ProductDescription";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  const fetchProductDetails = async (id: string) => {
    try {
      const url = `http://localhost:3001/products/${id}`;
      const response = await axios.get(url);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    id && fetchProductDetails(id);
  }, []);

  if (!product) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="flex container mx-auto w-full py-10 gap-12">
      {/* Left: Images */}
      <div className="w-2/5">
        <ImageContainer product={product} />
      </div>

      {/* Right: Description */}
      <div className="w-3/5">
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
