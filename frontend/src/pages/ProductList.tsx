import React, { useEffect, useState } from "react";
import { Product } from "../types";
import Listcard from "../components/Listcard/ListCard";
import { useFilter } from "../context/FilterContext";
import axios from "axios";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { selectedGender, selectedColour } = useFilter();

  const fetchProducts = async () => {
    const params = new URLSearchParams();

    if (selectedGender) {
      params.append("gender", selectedGender);
    }

    if (selectedColour) {
      // support comma-separated multiple colours if needed later
      params.append("colour", selectedColour);
    }

    const url = `http://localhost:3001/products?${params.toString()}`;
    const productsData = await axios.get(url);
    setProducts(productsData.data);
  };

  useEffect(() => {
    fetchProducts();
    console.log(selectedColour);
  }, [selectedGender, selectedColour]);

  return (
    <div className="grid grid-cols-4 2xl:grid-cols-5 gap-2">
      {products.map((product) => (
        <Listcard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
