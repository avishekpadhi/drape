import React, { useEffect, useState } from "react";
import { Product } from "../types";
import Listcard from "../components/Listcard/ListCard";
import { useFilter } from "../context/FilterContext";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { selectedGender, onGenderChange } = useFilter();

  const fetchProducts = async () => {
    let url = "http://localhost:3001/products";
    if (selectedGender) {
      url += `?gender=${selectedGender}`;
    }
    const productsData = await axios.get(url);
    console.log(productsData);
    setProducts(productsData.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedGender]);

  return (
    <div className="grid grid-cols-4 2xl:grid-cols-5 gap-2">
      {products.map((product) => (
        <Listcard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
