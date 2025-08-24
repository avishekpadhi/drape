import { useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Product } from "../../types";

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
    <div className="flex flex-col container mx-auto">
      <ImageContainer product={product} />
    </div>
  );
};

export default ProductDetails;
