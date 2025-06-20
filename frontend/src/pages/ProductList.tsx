import React, { useEffect, useState } from "react";
import { Product } from "../types";
import Listcard from "../components/ListCard";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const productsData = await axios.get("http://localhost:3001/products");
    console.log(productsData);
    setProducts(productsData.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 2xl:grid-cols-5 gap-2">
      {products.map((product) => (
        <Listcard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
