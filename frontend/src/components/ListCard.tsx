import React from "react";

const Listcard = ({ product }) => {
  return (
    <div className="w-64 rounded-lg p-4 hover:shadow-2xs transition cursor-pointer">
      <img
        src={product.image}
        alt="apple watch image"
        className="w-full object-contain rounded bg-white"
      />
      <h3 className="mt-2 font-medium text-lg">{product.title}</h3>
      <p className="text-gray-600 text-xs">Rs. {product.price}.00</p>
    </div>
  );
};

export default Listcard;
