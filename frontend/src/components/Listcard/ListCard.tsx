import React from "react";
import { Link } from "react-router-dom";

interface ListcardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

const Listcard: React.FC<ListcardProps> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="w-64 rounded-lg p-4 hover:shadow-2xs transition cursor-pointer"
    >
      <img
        src={product.image}
        alt="apple watch image"
        className="w-full object-contain rounded bg-white"
      />
      <h4 className="mt-2">{product.title}</h4>
      <p className="text-gray-600 text-xs">Rs. {product.price}.00</p>
    </Link>
  );
};

export default Listcard;
