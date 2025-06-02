import React, { useEffect, useState } from "react";
import { Product } from "../types";
import Listcard from "../components/ListCard";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 gap-10">
      <Listcard />
      <Listcard />
      <Listcard />
      <Listcard />
      <Listcard />
      <Listcard />
      <Listcard />
      <Listcard />
      <Listcard />
      <Listcard />
      <Listcard />
      <Listcard />
      <Listcard />
      <Listcard />
      <Listcard />
    </div>
  );
};

export default ProductList;
